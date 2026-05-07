import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.example.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { Full_Name, Email, Subject, Message } = req.body;

    try {
      // 1. Send Email
      await transporter.sendMail({
        from: '"Inventé Network" <no-reply@inventenetwork.com>',
        to: "HELLO@INVENTENETWORK.COM",
        subject: `New Contact Request: ${Subject}`,
        text: `Name: ${Full_Name}\nEmail: ${Email}\nSubject: ${Subject}\nMessage: ${Message}`,
      });

      // 2. The Google Sheet logic is still handled by the frontend,
      //    or I could proxy it here, but I'll let frontend keep doing it 
      //    to avoid needing to refactor that part.
      
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

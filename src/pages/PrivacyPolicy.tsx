import React from 'react';
import { motion } from 'motion/react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  const effectiveDate = new Date().toLocaleDateString('en-MY', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="pt-32 pb-24 px-6 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#b38b3f]/10 border border-[#b38b3f]/20 flex items-center justify-center text-[#b38b3f]">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f]">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#f5f2ed] uppercase tracking-tighter leading-none mb-8">
            Privacy <span className="text-[#b38b3f]">Policy</span>.
          </h1>
          <p className="text-sm text-[#f5f2ed]/40 uppercase tracking-widest font-bold">
            Effective Date: {effectiveDate}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-gold max-w-none"
        >
          <div className="space-y-12 text-[#f5f2ed]/80 leading-relaxed">
            <section>
              <p className="text-lg">
                At Invente Network ("we", "our", or "us"), we are committed to protecting your personal data and respecting your privacy in accordance with applicable data protection laws, including the Personal Data Protection Act 2010 (PDPA) of Malaysia.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <hr className="border-white/10" />

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">1. Information We Collect</h2>
              <p>We may collect and process the following types of personal data:</p>
              
              <div className="grid md:grid-cols-1 gap-8 mt-8">
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-[#b38b3f] font-bold uppercase tracking-widest text-xs mb-4">a. Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name</li>
                    <li>Any information you provide through contact forms</li>
                  </ul>
                </div>
                
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-[#b38b3f] font-bold uppercase tracking-widest text-xs mb-4">b. Technical Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent on the website</li>
                  </ul>
                </div>

                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-[#b38b3f] font-bold uppercase tracking-widest text-xs mb-4">c. Cookies & Tracking Technologies</h3>
                  <p className="text-sm">We use cookies to improve user experience and analyze website performance.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">2. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>To respond to inquiries and provide customer support</li>
                <li>To deliver our products and services</li>
                <li>To improve our website functionality and user experience</li>
                <li>To send updates, marketing materials, or newsletters (only if you opt-in)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">3. Sharing of Information</h2>
              <p>We do not sell or rent your personal data. However, we may share your information with:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Trusted partners and service providers (e.g., hosting, analytics)</li>
                <li>Business partners related to our services (e.g., technology vendors)</li>
                <li>Legal authorities if required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">4. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites (e.g., product manufacturers or partners). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, or loss.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">6. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">7. Your Rights</h2>
              <p>Under applicable laws, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Withdraw consent for data processing</li>
                <li>Request deletion of your data (where applicable)</li>
              </ul>
              <p className="mt-4">To exercise your rights, please contact us using the details below.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">8. Cookies Policy</h2>
              <p>
                You can choose to disable cookies through your browser settings. However, this may affect the functionality of certain parts of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </p>
            </section>

            <section className="p-12 bg-[#b38b3f]/5 border border-[#b38b3f]/20 rounded-3xl">
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-8">10. Contact Us</h2>
              <p className="mb-8">If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
              
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#b38b3f]/10 flex items-center justify-center text-[#b38b3f]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40">Email</p>
                    <a href="mailto:hello@inventenetwork.com" className="text-sm font-bold hover:text-[#b38b3f] transition-colors">hello@inventenetwork.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#b38b3f]/10 flex items-center justify-center text-[#b38b3f]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40">Phone</p>
                    <p className="text-sm font-bold">+60 11 4035 1391</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#b38b3f]/10 flex items-center justify-center text-[#b38b3f] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40">Address</p>
                    <p className="text-sm font-bold leading-relaxed">
                      Level 15, DPulze Cyberjaya,<br />
                      Lingkaran Cyber Point Timur, Cyber 12,<br />
                      63000 Cyberjaya, Selangor
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <p className="text-center text-sm italic text-[#f5f2ed]/40 pt-12">
              By using our website, you consent to the terms of this Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsConditions() {
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
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#b38b3f]">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#f5f2ed] uppercase tracking-tighter leading-none mb-8">
            Terms & <span className="text-[#b38b3f]">Conditions</span>.
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
                Welcome to Invente Network (“we”, “our”, or “us”). By accessing or using our website and services, you agree to be bound by the following Terms & Conditions. If you do not agree, please do not use our website.
              </p>
            </section>

            <hr className="border-white/10" />

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">1. Company Information</h2>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <p className="font-bold text-[#f5f2ed] mb-2">Invente Network</p>
                <p className="text-sm">Email: hello@inventenetwork.com</p>
                <p className="text-sm">Phone: +60 11 4035 1391</p>
                <p className="text-sm mt-4">
                  Level 15, DPulze Cyberjaya,<br />
                  Lingkaran Cyber Point Timur, Cyber 12,<br />
                  63000 Cyberjaya, Selangor
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">2. Scope of Services</h2>
              <p>Invente Network operates across multiple business areas, including:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><span className="text-[#b38b3f] font-bold">Education</span> – training programs, workshops, and courses</li>
                <li><span className="text-[#b38b3f] font-bold">Blyten</span> – smart IoT, engineering, and technology solutions</li>
                <li><span className="text-[#b38b3f] font-bold">Blynd</span> – curated blindbox tourism experiences</li>
                <li><span className="text-[#b38b3f] font-bold">Products & Services</span> – third-party products, engineering solutions, and professional services</li>
              </ul>
              <p className="mt-4 italic text-sm">All services are subject to availability and may be modified or discontinued at any time without prior notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">3. Use of Website</h2>
              <p>You agree to use this website only for lawful purposes. You must not:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Use the website in any way that may damage or disrupt services</li>
                <li>Attempt unauthorized access to systems or data</li>
                <li>Use the website for fraudulent or harmful activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and design, is the property of Invente Network or its licensors and is protected by applicable intellectual property laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, or use any content without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">5. Third-Party Products & Links</h2>
              <p>Our website may include links to third-party products, brands, and services.</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>These links are provided for convenience only</li>
                <li>We do not control or guarantee the accuracy, reliability, or quality of third-party offerings</li>
                <li>Any transactions or engagements with third parties are solely between you and the respective provider</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">6. Blyten (Engineering & IoT Solutions)</h2>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>All engineering solutions are subject to project scope, technical feasibility, and client requirements</li>
                <li>Quotations provided are estimates and may vary based on project changes</li>
                <li>Implementation timelines may vary depending on project complexity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">7. Education Services</h2>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Program details, schedules, and availability are subject to change</li>
                <li>Participation may require registration and payment</li>
                <li>We reserve the right to modify or cancel programs if necessary</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">8. Blynd (Tourism Experiences)</h2>
              <p>For Blynd travel experiences:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Bookings are subject to availability and confirmation</li>
                <li>Itineraries may involve surprise elements and are not fully disclosed in advance</li>
                <li>Changes may occur due to weather, safety, or operational reasons</li>
                <li>Participants are responsible for ensuring they meet travel requirements</li>
              </ul>
              <div className="mt-6 p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-[#b38b3f] font-bold uppercase tracking-widest text-xs mb-4">Cancellation & Refunds</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Cancellation policies will be communicated at the time of booking</li>
                  <li>Refunds, if applicable, are subject to terms provided for each experience</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">9. Payments & Pricing</h2>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>All prices are subject to change without prior notice</li>
                <li>Payments must be made in accordance with agreed terms</li>
                <li>Late or failed payments may result in suspension of services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">10. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Invente Network shall not be liable for any indirect, incidental, or consequential damages</li>
                <li>We do not guarantee uninterrupted or error-free operation of the website</li>
                <li>Use of our services is at your own risk</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">11. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Invente Network from any claims, damages, or expenses arising from your use of the website or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">12. Privacy</h2>
              <p>
                Your use of our website is also governed by our Privacy Policy. Please review it to understand how we handle your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">13. Changes to Terms</h2>
              <p>
                We may update these Terms & Conditions at any time. Changes will be posted on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-6">14. Governing Law</h2>
              <p>
                These Terms & Conditions are governed by the laws of Malaysia. Any disputes shall be subject to the jurisdiction of Malaysian courts.
              </p>
            </section>

            <section className="p-12 bg-[#b38b3f]/5 border border-[#b38b3f]/20 rounded-3xl">
              <h2 className="text-2xl font-bold text-[#f5f2ed] uppercase tracking-tight mb-8">15. Contact Us</h2>
              <p className="mb-8">If you have any questions regarding these Terms & Conditions, please contact us:</p>
              
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
              </div>
            </section>

            <p className="text-center text-sm italic text-[#f5f2ed]/40 pt-12">
              By accessing and using this website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

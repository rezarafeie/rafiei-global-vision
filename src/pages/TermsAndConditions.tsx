import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsAndConditions = () => {
  const { language } = useLanguage();
  const isRTL = language === 'fa' || language === 'ar';

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-6">Last updated: December 2024</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the services provided by Rafiei Group, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use of Our Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use the services in any way that violates applicable laws or regulations</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the services</li>
                <li>Attempt to gain unauthorized access to any portion of the services</li>
                <li>Use the services to transmit any malicious code or harmful content</li>
                <li>Impersonate or attempt to impersonate Rafiei Group or any other person</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The services and their original content, features, and functionality are owned by Rafiei Group and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                For paid services, you agree to pay all fees associated with your subscription or purchase. All payments are non-refundable unless otherwise stated in our Refund Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Rafiei Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the operation of our services or the information, content, or materials included therein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the services will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                <p className="text-foreground font-medium">Rafiei Group</p>
                <p className="text-muted-foreground">35 Richford Grove, Birmingham B33 0NJ, UK</p>
                <p className="text-muted-foreground">Email: contact@rafiei.co</p>
                <p className="text-muted-foreground">Phone: +44 7476 681270</p>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
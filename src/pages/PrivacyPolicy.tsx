import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const isRTL = language === 'fa' || language === 'ar';

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: December 2024</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rafiei Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may collect information about you in a variety of ways:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, and other contact details you provide.</li>
                <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our website and services.</li>
                <li><strong className="text-foreground">Device Data:</strong> Information about your device, including IP address, browser type, and operating system.</li>
                <li><strong className="text-foreground">Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Communicate with you, including for customer service and support</li>
                <li>Send you updates, marketing communications, and promotional materials</li>
                <li>Process transactions and send related information</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Sharing Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our website and services, conducting our business, or serving our users. These parties are obligated to keep your information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
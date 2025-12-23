import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const RefundPolicy = () => {
  const { language } = useLanguage();
  const isRTL = language === 'fa' || language === 'ar';

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Refund Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: December 2024</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Rafiei Group, we strive to ensure customer satisfaction with all our products and services. This Refund Policy outlines the terms and conditions under which refunds may be requested and processed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Eligibility for Refunds</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You may be eligible for a refund if:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The service was not delivered as described</li>
                <li>Technical issues prevented you from accessing the service</li>
                <li>You cancel within the applicable cooling-off period</li>
                <li>The service is discontinued by Rafiei Group</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Refund Request Period</h2>
              <p className="text-muted-foreground leading-relaxed">
                Refund requests must be submitted within 14 days of the original purchase date. Requests made after this period may not be eligible for a refund, except in exceptional circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Non-Refundable Items</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">The following are generally not eligible for refunds:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Services that have been fully delivered and used</li>
                <li>Digital products that have been downloaded or accessed</li>
                <li>Custom or personalized services</li>
                <li>Services purchased at a discounted promotional rate (unless otherwise stated)</li>
                <li>Subscription fees after the cooling-off period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. How to Request a Refund</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">To request a refund, please:</p>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li>Contact our support team at contact@rafiei.co</li>
                <li>Provide your order/transaction ID</li>
                <li>Explain the reason for your refund request</li>
                <li>Include any relevant documentation or screenshots</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Refund Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Once your refund request is received and reviewed, we will notify you of the approval or rejection. If approved, refunds will be processed within 5-10 business days. The refund will be credited to the original payment method used for the purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Partial Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                In some cases, partial refunds may be granted for services that have been partially used or delivered. The refund amount will be calculated based on the unused portion of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Subscription Cancellations</h2>
              <p className="text-muted-foreground leading-relaxed">
                For subscription-based services, you may cancel at any time. Upon cancellation, you will continue to have access until the end of your current billing period. Refunds for the current billing period are generally not provided unless specified otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Chargebacks</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you file a chargeback with your bank or payment provider without first contacting us, we reserve the right to dispute the chargeback and may suspend your account pending resolution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding our Refund Policy, please contact us at:
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

export default RefundPolicy;
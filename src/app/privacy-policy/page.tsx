import PageLayout from '../components/PageLayout';

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold mb-8">Privacy Policy</h1>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-4">
                At Pitahaya Labs, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-2">2.1 Personal Information</h3>
              <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc list-inside mb-4 ml-4">
                <li>Fill out our contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a quote</li>
                <li>Engage with our services</li>
              </ul>
              <h3 className="text-xl font-medium mb-2">2.2 Automatically Collected Information</h3>
              <p className="mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside mb-4 ml-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Access times</li>
                <li>Pages visited</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside mb-4 ml-4">
                <li>Provide and maintain our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Protect against fraud and unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Protection Rights</h2>
              <p className="mb-4">Under GDPR, you have the following rights:</p>
              <ul className="list-disc list-inside mb-4 ml-4">
                <li>The right to access your personal data</li>
                <li>The right to rectification</li>
                <li>The right to erasure</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object</li>
                <li>Rights related to automated decision-making and profiling</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
              <p className="mb-4">
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Third-Party Services</h2>
              <p className="mb-4">
                We may use third-party service providers to help us operate our website, conduct our business, or 
                service you. These providers have access to your personal information only to perform specific tasks 
                on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mb-4">
                Email: privacy@pitahayalabs.com<br />
                Address: [Your Business Address]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Updates to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an 
                updated &quot;Last Updated&quot; date and the updated version will be effective as soon as it is accessible.
              </p>
              <p className="italic mt-8">Last Updated: {new Date().toLocaleDateString()}</p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
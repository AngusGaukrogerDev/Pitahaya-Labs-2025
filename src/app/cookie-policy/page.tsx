import PageLayout from '../components/PageLayout';

export default function CookiePolicy() {
  return (
    <PageLayout>
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold mb-8">Cookie Policy</h1>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide useful information to the 
                website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside mb-4 ml-4">
                <li>To make our website work as you&apos;d expect</li>
                <li>To remember your settings during and between visits</li>
                <li>To improve the speed/security of the site</li>
                <li>To allow you to share pages with social networks</li>
                <li>To continuously improve our website for you</li>
                <li>To make our marketing more efficient</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium mb-2">3.1 Necessary Cookies</h3>
              <p className="mb-4">
                These cookies are essential for you to browse the website and use its features, such as accessing 
                secure areas of the site. The website cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-medium mb-2">3.2 Preferences Cookies</h3>
              <p className="mb-4">
                Also known as &quot;functionality cookies,&quot; these cookies allow a website to remember choices you have made 
                in the past, like your preferred language or region.
              </p>

              <h3 className="text-xl font-medium mb-2">3.3 Statistics Cookies</h3>
              <p className="mb-4">
                Also known as &quot;performance cookies,&quot; these cookies collect information about how you use a website, 
                like which pages you visited and which links you clicked on.
              </p>

              <h3 className="text-xl font-medium mb-2">3.4 Marketing Cookies</h3>
              <p className="mb-4">
                These cookies track your online activity to help advertisers deliver more relevant advertising or to 
                limit how many times you see an ad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
              <p className="mb-4">
                In some special cases, we also use cookies provided by trusted third parties. The following section 
                details which third party cookies you might encounter through this site:
              </p>
              <ul className="list-disc list-inside mb-4 ml-4">
                <li>Google Analytics</li>
                <li>Social Media plugins</li>
                <li>Payment processors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Managing Cookies</h2>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their settings preferences. However, if you 
                limit the ability of websites to set cookies, you may worsen your overall user experience.
              </p>
              <p className="mb-4">
                You can manage your cookie preferences on our website through our{' '}
                <a href="/cookie-preferences" className="text-yellow hover:underline">
                  Cookie Preferences Center
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="mb-4">
                Email: privacy@pitahayalabs.com<br />
                Address: [Your Business Address]
              </p>
            </section>

            <p className="italic mt-8">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold">Get in Touch</h2>
            <p className="text-lg">
              Have a project in mind? Let's talk about how we can help you achieve your goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p>contact@pitahayalabs.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-lg border border-light-gray dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:border-yellow"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-lg border border-light-gray dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:border-yellow"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-light-gray dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:border-yellow"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-light-gray dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:border-yellow"
            ></textarea>
            <button className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
} 
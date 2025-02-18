import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-beige pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
                Building the <span className="text-yellow">Future</span> of Technology
              </h1>
              <p className="text-xl">
                We create innovative solutions that transform businesses and enhance user experiences.
              </p>
              <div className="flex gap-4">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px]">
              <div className="absolute inset-0 bg-yellow/10 rounded-2xl"></div>
              {/* Add hero image here */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-light-gray rounded-2xl"></div>
              {/* Add about image here */}
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold">
                Who We Are
              </h2>
              <p className="text-lg">
                Pitahaya Labs is a forward-thinking technology company dedicated to creating innovative solutions 
                that help businesses thrive in the digital age. Our team of experts combines creativity with 
                technical excellence to deliver outstanding results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-yellow">100+</h4>
                  <p>Projects Completed</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-yellow">50+</h4>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">Our Projects</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Discover our latest work and see how we've helped our clients achieve their goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 bg-yellow/10">
                  {/* Add project image here */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Project {project}</h3>
                  <p className="mb-4">
                    A brief description of the project and the solutions we provided.
                  </p>
                  <button className="text-yellow hover:underline font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">Client Reviews</h2>
            <p className="text-lg max-w-2xl mx-auto">
              See what our clients have to say about working with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((review) => (
              <div key={review} className="bg-beige p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium">Client Name</h4>
                    <p className="text-sm">Company</p>
                  </div>
                </div>
                <p className="mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua."
                </p>
                <div className="flex text-yellow">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-beige">
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
                  className="w-full px-4 py-3 rounded-lg border border-light-gray focus:outline-none focus:border-yellow"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg border border-light-gray focus:outline-none focus:border-yellow"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-light-gray focus:outline-none focus:border-yellow"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-light-gray focus:outline-none focus:border-yellow"
              ></textarea>
              <button className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 
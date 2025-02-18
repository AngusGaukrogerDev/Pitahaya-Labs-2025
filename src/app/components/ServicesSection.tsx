const steps = [
  {
    number: "01",
    title: "Book a meeting",
    description: "Get in touch with us today to discuss the current stage of your product, and how we help with development."
  },
  {
    number: "02",
    title: "Plan of action",
    description: "Based off your requirements, we'll craft a full plan of action based on your long term goals."
  },
  {
    number: "03",
    title: "Leave it to us",
    description: "We'll get to work building your platform, keeping you in the loop at every stage of the process."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Our 3 Step Service</h2>
          <p className="text-lg max-w-2xl mx-auto">
            A simple 3 step solution to create the perfect MVP
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative bg-white p-8 rounded-lg shadow-md"
            >
              <div className="absolute -top-6 left-8 bg-yellow text-white text-sm font-medium px-4 py-2 rounded-full">
                Step
              </div>
              <div className="mb-6">
                <span className="text-6xl font-extrabold text-black">{step.number}</span>
              </div>
              <h3 className="text-xl font-medium mb-4">{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-[58px] transform -translate-y-1/2 z-10">
                  <svg className="w-24 h-24 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
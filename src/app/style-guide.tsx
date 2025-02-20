export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-16">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4">
          Pitahaya Labs Style Guide
        </h1>
        <p className="text-xl">
          A comprehensive overview of our design system
        </p>
      </div>

      {/* Colors Section */}
      <section className="mb-16">
        <h2 className="text-3xl mb-8">Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="space-y-2">
            <div className="h-32 bg-yellow rounded-lg"></div>
            <p className="font-medium">Yellow</p>
            <p className="text-sm text-mid-gray">#ECBA0B</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 bg-mid-gray rounded-lg"></div>
            <p className="font-medium">Mid Gray</p>
            <p className="text-sm text-mid-gray">#A8A9AB</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 bg-light-gray rounded-lg"></div>
            <p className="font-medium">Light Gray</p>
            <p className="text-sm text-mid-gray">#E7E7E7</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 bg-white border border-light-gray rounded-lg"></div>
            <p className="font-medium">White</p>
            <p className="text-sm text-mid-gray">#FFFFFF</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 bg-beige rounded-lg"></div>
            <p className="font-medium">Beige</p>
            <p className="text-sm text-mid-gray">#E3DDD5</p>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="mb-16">
        <h2 className="text-3xl mb-8">Typography</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl mb-4">Headers</h3>
            <div className="space-y-4">
              <h1 className="text-5xl">H1 - Extra Bold (800)</h1>
              <h2 className="text-4xl">H2 - Extra Bold (800)</h2>
              <h3 className="text-3xl">H3 - Extra Bold (800)</h3>
              <h4 className="text-2xl">H4 - Extra Bold (800)</h4>
              <h5 className="text-xl">H5 - Extra Bold (800)</h5>
              <h6 className="text-lg">H6 - Extra Bold (800)</h6>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4">Body Text</h3>
            <div className="space-y-4 max-w-2xl">
              <p className="font-light">
                Light (300) - Primary body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="font-medium">
                Medium (500) - Secondary text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="font-extrabold">
                Extra Bold (800) - Emphasis text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="mb-16">
        <h2 className="text-3xl mb-8">Components</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-light-gray">
                <h4 className="text-xl text-yellow mb-2">Card Title</h4>
                <p className="mb-4">
                  This is a sample card component with our brand styles applied.
                </p>
                <button className="btn-primary">Learn More</button>
              </div>
              <div className="bg-beige p-6 rounded-lg shadow-md">
                <h4 className="text-xl mb-2">Alternative Card</h4>
                <p className="mb-4">
                  This is an alternative card style using our beige background.
                </p>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

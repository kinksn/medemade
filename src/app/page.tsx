export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Your Name</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-500 hover:text-gray-900">
                About
              </a>
              <a href="#services" className="text-gray-500 hover:text-gray-900">
                Services
              </a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Welcome to My Business
              </h2>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                Professional services tailored to your needs. Let&apos;s work
                together to achieve your goals.
              </p>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
              <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto">
                I am a dedicated professional with years of experience in
                providing high-quality services. My expertise and commitment to
                excellence ensure that every project meets the highest
                standards.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Services</h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Service 1
                  </h3>
                  <p className="text-gray-600">
                    Description of your first service offering.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Service 2
                  </h3>
                  <p className="text-gray-600">
                    Description of your second service offering.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Service 3
                  </h3>
                  <p className="text-gray-600">
                    Description of your third service offering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
              <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto">
                Ready to get started? Let&apos;s discuss your project and how I
                can help you achieve your goals.
              </p>
              <div className="mt-10 flex justify-center space-x-8">
                <a
                  href="mailto:your-email@example.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Email: your-email@example.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Phone: +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

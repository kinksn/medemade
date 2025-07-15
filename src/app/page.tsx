import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-foreground">Your Name</h1>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-8">
                <a href="#about" className="text-muted-foreground hover:text-foreground">
                  About
                </a>
                <a href="#services" className="text-muted-foreground hover:text-foreground">
                  Services
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                Welcome to My Business
              </h2>
              <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional services tailored to your needs. Let&apos;s work
                together to achieve your goals.
              </p>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">About Me</h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                I am a dedicated professional with years of experience in
                providing high-quality services. My expertise and commitment to
                excellence ensure that every project meets the highest
                standards.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Services</h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    Service 1
                  </h3>
                  <p className="text-muted-foreground">
                    Description of your first service offering.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    Service 2
                  </h3>
                  <p className="text-muted-foreground">
                    Description of your second service offering.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    Service 3
                  </h3>
                  <p className="text-muted-foreground">
                    Description of your third service offering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Contact</h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                Ready to get started? Let&apos;s discuss your project and how I
                can help you achieve your goals.
              </p>
              <div className="mt-10 flex justify-center space-x-8">
                <a
                  href="mailto:your-email@example.com"
                  className="text-primary hover:text-primary/80"
                >
                  Email: your-email@example.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="text-primary hover:text-primary/80"
                >
                  Phone: +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Logo from "@/components/assets/icons/logo.svg?react";
import { ThemeToggle } from "@/components/theme-toggle";

export const Header = () => {
  return (
    <header className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground ml-2">
              <Logo className="h-5 w-auto" aria-label="medemadeのロゴ" />
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-muted-foreground hover:text-foreground"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

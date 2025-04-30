import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary text-text-secondary py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">About Us</h3>
            <p className="text-sm">
              Seed to Oaks is dedicated to empowering individuals through education
              and project-based learning, helping them grow from seeds of knowledge
              into mighty oaks of wisdom.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-sm hover:text-accent-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm hover:text-accent-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-accent-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-accent-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documentation" className="text-sm hover:text-accent-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-sm hover:text-accent-primary transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-accent-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm hover:text-accent-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com/seedtooaks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/seedtooaks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-accent-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-border-primary mt-8 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Seed to Oaks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
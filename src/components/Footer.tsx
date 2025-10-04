import { Telescope } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="about" className="border-t border-border/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Telescope className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">NASA Explorer</span>
            </div>
            <p className="text-foreground/70 mb-4">
              Empowering exploration and discovery through NASA's high-resolution imagery. 
              Built for researchers, educators, and space enthusiasts worldwide.
            </p>
            <p className="text-sm text-foreground/50">
              Part of NASA's Space Apps Challenge
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Access</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Data Sources</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tutorials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-foreground/50 text-sm">
          <p>© 2024 NASA Explorer. Built for NASA Space Apps Challenge.</p>
        </div>
      </div>
    </footer>
  );
};

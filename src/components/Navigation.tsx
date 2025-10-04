import { Button } from "@/components/ui/button";
import { Search, Telescope, Menu, X, LogOut } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { supabase } from "@/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const { user } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setMobileMenuOpen(false); // close menu on logout
  };

  const links = [
    { href: "#datasets", label: "Datasets" },
    { href: "#viewer", label: "Viewer" },
    { href: "#about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Telescope className="h-8 w-8 text-primary animate-pulse-glow" />
            <span className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              NASA Explorer
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="outline" size="sm">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
            {user && (
              <Button variant="destructive" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden flex flex-col gap-4 mt-2 pb-4 bg-background/90 rounded-b-2xl shadow-lg"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/90 hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="mx-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
              {user && (
                <Button
                  variant="destructive"
                  size="sm"
                  className="mx-4"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

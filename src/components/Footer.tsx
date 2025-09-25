import { motion } from "framer-motion";
import { Heart, Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-muted/50 to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-gradient-primary">NeuroNest</span>
            </motion.div>
            <p className="text-muted-foreground leading-relaxed">
              Making early detection and learning support accessible, engaging, and fun for every child.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Games", href: "/games" },
                { name: "Reports", href: "/reports" },
                { name: "Parent Chat", href: "/parent-chat" },
                { name: "Video Bot", href: "/video-bot" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <div className="space-y-2">
              {[
                "About Dyslexia",
                "Understanding ADHD",
                "Dyscalculia Guide",
                "Parent Resources",
                "Support Groups",
              ].map((resource) => (
                <a
                  key={resource}
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {resource}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@neuronest.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-NEST</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Learning Support Center</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="card-magical p-6 mb-8"
        >
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-warning mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-warning-foreground mb-2">Important Notice</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                NeuroNest is an early-screening educational tool designed to support learning and development. 
                It is not intended to provide medical diagnosis or replace professional healthcare advice. 
                If you have concerns about your child's development, please consult with qualified healthcare professionals.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>© 2024 NeuroNest. Made with</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>for every child's unique journey</span>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
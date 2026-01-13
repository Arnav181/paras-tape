import { Link } from "react-router-dom";
import { Package, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Package className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">
                  Paras Tape
                </span>
                <span className="text-xs opacity-80 leading-tight">
                  Industries
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Manufacturer and supplier of industrial quality BOPP packaging tapes 
              serving businesses across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              <li className="text-sm opacity-80">BOPP Tapes</li>
              <li className="text-sm opacity-80">Masking Tapes</li>
              <li className="text-sm opacity-80">Floor Marking Tapes</li>
              <li className="text-sm opacity-80">Stretch Films</li>
              <li className="text-sm opacity-80">Bubble Rolls</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">Contact for details</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">info@parastape.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Paras Tape Industries. All rights reserved.
            </p>
            <p className="text-sm opacity-60">
              Quality Packaging Solutions for Industry
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

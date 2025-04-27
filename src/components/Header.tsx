import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-playfair text-2xl font-bold tracking-tight">MOMENTUM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-gray-600 transition-colors">
            Главная
          </Link>
          <Link to="/catalog" className="font-medium hover:text-gray-600 transition-colors">
            Каталог
          </Link>
          <Link to="/about" className="font-medium hover:text-gray-600 transition-colors">
            О нас
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block font-medium py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/catalog" 
              className="block font-medium py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link 
              to="/about" 
              className="block font-medium py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              О нас
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">MOMENTUM</h3>
            <p className="text-gray-400">
              Интернет-магазин качественных реплик часов в Луганске
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/catalog" className="text-gray-400 hover:text-white transition-colors">Каталог</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/cart" className="text-gray-400 hover:text-white transition-colors">Корзина</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">г. Луганск, ул. Пример, 123</p>
              <p className="mb-2">Телефон: +7 (123) 456-7890</p>
              <p>Email: info@momentum-watches.ru</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            © {currentYear} Momentum. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

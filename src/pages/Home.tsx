import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { useState, useEffect } from 'react';
import { Product } from '@/hooks/useCart';

const featuredWatches: Product[] = [
  {
    id: '1',
    name: 'Classic Chronograph',
    brand: 'Royal Oak',
    price: 24990,
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Diver Professional',
    brand: 'Submariner',
    price: 29990,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Executive Tourbillon',
    brand: 'Nautilus',
    price: 34990,
    image: 'https://images.unsplash.com/photo-1620625515032-6ed0c8ed476e?q=80&w=800&auto=format&fit=crop'
  }
];

const Home = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury watch" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
              Время выбирать лучшее
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Momentum - первый в Луганске специализированный интернет-магазин качественных реплик популярных часовых брендов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
                <Link to="/about">О нас</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
            Наши преимущества
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Гарантия качества</h3>
              <p className="text-gray-600">
                Все наши часы проходят строгий контроль качества перед продажей
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставляем заказы по Луганску и области максимально оперативно
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Широкий ассортимент</h3>
              <p className="text-gray-600">
                В нашем каталоге представлены реплики самых популярных брендов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">
              Хиты продаж
            </h2>
            <Button asChild variant="link" className="group">
              <Link to="/catalog">
                Смотреть все 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWatches.map(watch => (
              <ProductCard key={watch.id} product={watch} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1200&auto=format&fit=crop" 
                alt="Luxury watches collection" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                О магазине Momentum
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Momentum - первый в Луганске специализированный интернет-магазин качественных реплик популярных часовых брендов. Мы создали удобную онлайн-платформу, где каждый ценитель стильных аксессуаров может выбрать и заказать часы своей мечты, не выходя из дома.
                </p>
                <p>
                  В интернет-магазине Momentum вы легко найдете часы, которые подчеркнут ваш стиль и статус. Наши реплики создаются с вниманием к мельчайшим деталям, что делает их внешне неотличимыми от оригиналов, при этом стоимость остается доступной для каждого.
                </p>
              </div>
              
              <Button asChild className="mt-8">
                <Link to="/about">Узнать больше</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </>
  );
};

export default Home;

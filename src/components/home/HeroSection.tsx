import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
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
  );
};

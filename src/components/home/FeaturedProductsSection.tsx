import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
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

export const FeaturedProductsSection = () => {
  return (
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
  );
};

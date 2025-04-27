import { Product } from '@/hooks/useCart';
import { Button } from './ui/button';
import { useCart } from '@/hooks/useCart';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {product.brand}
        </div>
        <h3 className="font-medium mb-2 truncate">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="font-semibold">
            {new Intl.NumberFormat('ru-RU', { 
              style: 'currency', 
              currency: 'RUB'
            }).format(product.price)}
          </span>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => addToCart(product)}
            className="rounded-full"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

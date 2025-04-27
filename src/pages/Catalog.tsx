import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Product } from '@/hooks/useCart';
import ProductCard from '@/components/ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';

// Mock data for the catalog
const allProducts: Product[] = [
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
  },
  {
    id: '4',
    name: 'Skeleton Automatic',
    brand: 'DateJust',
    price: 19990,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Perpetual Calendar',
    brand: 'Calatrava',
    price: 39990,
    image: 'https://images.unsplash.com/photo-1548171311-3328eed9f873?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Modern Pilot',
    brand: 'Big Pilot',
    price: 26990,
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '7',
    name: 'Sportive Racing',
    brand: 'Daytona',
    price: 31990,
    image: 'https://images.unsplash.com/photo-1623998021446-45a49d93ba3a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '8',
    name: 'Classic Dress',
    brand: 'Patrimony',
    price: 27990,
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '9',
    name: 'Elegant Moonphase',
    brand: 'Cellini',
    price: 32990,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop'
  }
];

const brands = ['Royal Oak', 'Submariner', 'Nautilus', 'DateJust', 'Calatrava', 'Big Pilot', 'Daytona', 'Patrimony', 'Cellini'];

const Catalog = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([10000, 50000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter products based on selected criteria
  const filteredProducts = allProducts.filter((product) => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesPrice && matchesBrand && matchesSearch;
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setPriceRange([10000, 50000]);
    setSelectedBrands([]);
    setSearchQuery('');
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8">Каталог часов</h1>
        
        {/* Search and mobile filter toggle */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Поиск по названию или бренду..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <Button 
            variant="outline" 
            className="md:hidden flex items-center"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Фильтры
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-lg">Фильтры</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-xs text-gray-500 hover:text-black"
                >
                  Сбросить
                </Button>
              </div>
              
              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Цена</h3>
                <Slider
                  defaultValue={[10000, 50000]}
                  min={10000}
                  max={50000}
                  step={1000}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{priceRange[0].toLocaleString()} ₽</span>
                  <span>{priceRange[1].toLocaleString()} ₽</span>
                </div>
              </div>
              
              {/* Brands */}
              <div>
                <h3 className="font-medium mb-4">Бренды</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center">
                      <Checkbox 
                        id={`brand-${brand}`} 
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <Label 
                        htmlFor={`brand-${brand}`}
                        className="ml-2 text-sm font-normal cursor-pointer"
                      >
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters - Mobile */}
          {isFilterOpen && (
            <div className="md:hidden fixed inset-0 bg-white z-40 overflow-auto p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-xl">Фильтры</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Цена</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-xs text-gray-500"
                  >
                    Сбросить
                  </Button>
                </div>
                <Slider
                  defaultValue={[10000, 50000]}
                  min={10000}
                  max={50000}
                  step={1000}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{priceRange[0].toLocaleString()} ₽</span>
                  <span>{priceRange[1].toLocaleString()} ₽</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium mb-4">Бренды</h3>
                <div className="grid grid-cols-2 gap-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center">
                      <Checkbox 
                        id={`brand-mobile-${brand}`} 
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <Label 
                        htmlFor={`brand-mobile-${brand}`}
                        className="ml-2 text-sm font-normal"
                      >
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="sticky bottom-0 bg-white pt-4 pb-4 border-t border-gray-200">
                <Button 
                  className="w-full"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Показать результаты ({filteredProducts.length})
                </Button>
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Товары не найдены</h3>
                <p className="text-gray-600 mb-6">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
                <Button onClick={clearFilters}>Сбросить фильтры</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

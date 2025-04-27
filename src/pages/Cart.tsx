import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full">
            <ShoppingBag className="h-10 w-10 text-gray-400" />
          </div>
          <h1 className="font-playfair text-2xl font-bold mb-4">Корзина пуста</h1>
          <p className="text-gray-600 mb-8">
            Ваша корзина пока пуста. Перейдите в каталог, чтобы выбрать товары.
          </p>
          <Button asChild>
            <Link to="/catalog">Перейти в каталог</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8">Корзина</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:flex-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="p-4 md:p-6 flex flex-col md:flex-row gap-4">
                    <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.brand}</p>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <p className="font-semibold">
                            {new Intl.NumberFormat('ru-RU', { 
                              style: 'currency', 
                              currency: 'RUB'
                            }).format(item.price)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border rounded-md">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-10 text-center">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          <span className="hidden sm:inline">Удалить</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 md:p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex justify-between mb-4">
                  <Button 
                    variant="outline"
                    onClick={clearCart}
                  >
                    Очистить корзину
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/catalog">
                      Продолжить покупки
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="font-playfair text-xl font-bold mb-4">Сумма заказа</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Товары ({items.length}):</span>
                  <span>
                    {new Intl.NumberFormat('ru-RU', { 
                      style: 'currency', 
                      currency: 'RUB'
                    }).format(total)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Доставка:</span>
                  <span>Бесплатно</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between font-semibold">
                  <span>Итого:</span>
                  <span>
                    {new Intl.NumberFormat('ru-RU', { 
                      style: 'currency', 
                      currency: 'RUB'
                    }).format(total)}
                  </span>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => setIsCheckingOut(true)}
              >
                Оформить заказ
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с правилами магазина и условиями обработки персональных данных
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {isCheckingOut && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="font-playfair text-2xl font-bold mb-4">Оформление заказа</h2>
            <p className="mb-4 text-gray-600">
              Здесь будет форма оформления заказа с полями для ввода контактных данных, адреса доставки и способа оплаты.
            </p>
            <div className="flex justify-end gap-4 mt-6">
              <Button 
                variant="outline" 
                onClick={() => setIsCheckingOut(false)}
              >
                Отмена
              </Button>
              <Button>
                Продолжить
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

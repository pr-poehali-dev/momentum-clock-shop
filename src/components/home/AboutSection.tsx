import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
  return (
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
  );
};

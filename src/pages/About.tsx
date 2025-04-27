import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              О магазине Momentum
            </h1>
            <p className="text-xl text-gray-300">
              Первый в Луганске специализированный интернет-магазин качественных реплик популярных часовых брендов
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl">
                Momentum - интернет-магазин часов. Время выбирать лучшее.
              </p>
              
              <p>
                Momentum - первый в Луганске специализированный интернет-магазин качественных реплик популярных часовых брендов. Мы создали удобную онлайн-платформу, где каждый ценитель стильных аксессуаров может выбрать и заказать часы своей мечты, не выходя из дома.
              </p>
              
              <h2 className="font-playfair text-2xl font-bold mt-8 mb-4">Наши преимущества:</h2>
              
              <ul className="space-y-2">
                <li>• Широкий ассортимент высококачественных реплик премиальных брендов</li>
                <li>• Доступные цены на все модели</li>
                <li>• Быстрая доставка по Луганску и области</li>
                <li>• Детальные фотографии и описание каждой модели</li>
                <li>• Удобные способы оплаты</li>
                <li>• Гарантия качества на все изделия</li>
                <li>• Профессиональная онлайн-консультация</li>
              </ul>
              
              <p className="mt-6">
                В интернет-магазине Momentum вы легко найдете часы, которые подчеркнут ваш стиль и статус. Наши реплики создаются с вниманием к мельчайшим деталям, что делает их внешне неотличимыми от оригиналов, при этом стоимость остается доступной для каждого.
              </p>
              
              <p>
                Независимо от того, какой стиль вы предпочитаете – классические элегантные модели для деловых встреч, спортивные часы для активного образа жизни или изысканные аксессуары для особых случаев – каталог Momentum предлагает варианты на любой вкус.
              </p>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-12">
              <h2 className="font-playfair text-3xl font-bold mb-6 text-center">
                Почему выбирают нас
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Качество и внимание к деталям</h3>
                  <p className="text-gray-700">
                    Мы тщательно отбираем поставщиков и проверяем каждую модель часов перед отправкой клиенту. Наши реплики отличаются высоким качеством материалов и сборки.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Доступные цены</h3>
                  <p className="text-gray-700">
                    Мы стремимся сделать премиальные модели часов доступными для наших клиентов, предлагая качественные реплики по разумным ценам.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Удобство выбора</h3>
                  <p className="text-gray-700">
                    Наш каталог организован таким образом, чтобы вы могли легко найти часы по бренду, стилю или цене. Детальные фотографии и описания помогут сделать правильный выбор.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Клиентская поддержка</h3>
                  <p className="text-gray-700">
                    Наши консультанты всегда готовы помочь с выбором часов, ответить на вопросы о доставке и оплате, а также предоставить информацию о гарантии и обслуживании.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-xl mb-8">
                Готовы выбрать свои идеальные часы?
              </p>
              <Button asChild size="lg">
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

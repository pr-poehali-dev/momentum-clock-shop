import { ShieldCheck, Truck, Clock } from 'lucide-react';

type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <div className="text-center p-6">
    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
      {icon}
    </div>
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Гарантия качества",
      description: "Все наши часы проходят строгий контроль качества перед продажей"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Быстрая доставка",
      description: "Доставляем заказы по Луганску и области максимально оперативно"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Широкий ассортимент",
      description: "В нашем каталоге представлены реплики самых популярных брендов"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
          Наши преимущества
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

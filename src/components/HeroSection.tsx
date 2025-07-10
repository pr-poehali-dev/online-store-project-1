import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
          Создайте уют в вашем доме
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Премиальные товары для дома с доставкой по всей России
        </p>
        <Button size="lg" className="bg-white text-black hover:bg-gray-100">
          Перейти к покупкам
        </Button>
      </div>
    </section>
  );
};

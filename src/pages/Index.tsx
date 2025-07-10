import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { products, categories } from "@/data/products";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getCartItemsCount,
  } = useCart();

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header
        onCartClick={handleCartClick}
        cartItemsCount={getCartItemsCount()}
      />
      <HeroSection />
      <ProductGrid
        products={products}
        categories={categories}
        onAddToCart={addToCart}
      />
      <Cart
        isOpen={isCartOpen}
        onClose={handleCartClose}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        totalPrice={getTotalPrice()}
      />
      <Footer />
    </div>
  );
};

export default Index;

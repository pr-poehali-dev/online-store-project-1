import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const discountPercentage = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <Badge className="absolute top-2 left-2 bg-red-500">
              Скидка {discountPercentage}%
            </Badge>
          )}
          {!product.inStock && (
            <Badge className="absolute top-2 right-2 bg-gray-500">
              Нет в наличии
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600 mb-3">
          {product.description}
        </CardDescription>

        <div className="space-y-2 mb-4">
          <h4 className="font-semibold text-sm">Особенности:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <li key={index} className="flex items-center">
                <Icon name="Check" className="h-3 w-3 text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-black">
              {product.price.toLocaleString()} ₽
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
          <Button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="bg-black hover:bg-gray-800 text-white"
          >
            {product.inStock ? "В корзину" : "Недоступно"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

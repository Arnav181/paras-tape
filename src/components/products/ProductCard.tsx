import { Package, ChevronRight } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card-industrial group h-full flex flex-col">
      {/* Product Icon/Image Placeholder */}
      <div className="w-full aspect-[4/3] rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
        <Package className="w-12 h-12 text-muted-foreground group-hover:text-secondary transition-colors" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1">
          {product.description}
        </p>

        {/* Specifications */}
        <div className="space-y-2 mb-4">
          <div className="text-xs font-semibold text-foreground uppercase tracking-wide">
            Specifications
          </div>
          <ul className="space-y-1.5">
            {product.specifications.slice(0, 4).map((spec, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-secondary flex-shrink-0" />
                <span>{spec}</span>
              </li>
            ))}
            {product.specifications.length > 4 && (
              <li className="text-xs text-secondary font-medium">
                +{product.specifications.length - 4} more specifications
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

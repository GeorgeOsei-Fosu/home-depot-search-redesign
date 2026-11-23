import HeroCarousel from "../components/HeroCarousel.jsx";
import RecentlyViewed from "../components/RecentlyViewed.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ShopByCategory from "../components/ShopByCategory.jsx";
import {
  SLIDES,
  RECENTLY_VIEWED,
  SERVICES,
  HALLOWEEN_PRODUCTS,
  FEATURED_SET,
  DEALS,
  CATEGORIES,
} from "../data.js";

export default function HomeScreen({ onOpenService }) {
  return (
    <div className="screen__content">
      <HeroCarousel slides={SLIDES} />
      <RecentlyViewed items={RECENTLY_VIEWED} />
      <ServicesSection services={SERVICES} onOpen={onOpenService} />
      <h3 className="section-title">Halloween Headquarters</h3>
      <div className="product-row">
        {HALLOWEEN_PRODUCTS.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
      <ProductCard product={FEATURED_SET} wide />
      <ShopByCategory deals={DEALS} categories={CATEGORIES} />
    </div>
  );
}

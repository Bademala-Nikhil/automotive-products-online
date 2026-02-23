import Header from "./components/Header";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import ProductsSection from "./components/ProductsSection";
import MiniBannerSection from "./components/MiniBannerSection";
import RecommendedSection from "./components/RecommendedSection";
import BestSellingSection from "./components/BestSellingSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CategorySection />
      <ProductsSection />
      <MiniBannerSection />
      <RecommendedSection />
      <BestSellingSection />
      <Footer />
    </>
  );
}

export default App;
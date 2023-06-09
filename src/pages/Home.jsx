import Banner from "../partials/Banner"
import About from "../partials/About";
import ProductTeaser from "../partials/ProductTeaser";
import Portfolio from "../partials/Portfolio";
import Services from "../partials/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <ProductTeaser />
      <Portfolio />
      <Services />
    </>
  );
}

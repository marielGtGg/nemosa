// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "../partials/About";
import ProductTeaser from "../partials/ProductTeaser";
import Portfolio from "../partials/Portfolio";
import Services from "../partials/Services";

export default function Home() {
  return (
    <>
      <About />
      <ProductTeaser />
      <Portfolio />
      <Services />
    </>

    // <div style={{ position: "relative", height: "100vh" }}>
    //   <Parallax pages={5} style={{ top: "0", left: "0" }}>
    //     <ParallaxLayer offset={0} speed={2.5}>
    //       <div className="banner"></div>
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={0} speed={2.5}>
    //       <img
    //         id="nemosa"
    //         src="img/logo/nemosa_text_gray_orange.svg"
    //         alt="NEMOSA"
    //       />
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={1} speed={5}>
    //       <About />
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={2} speed={2.5}>
    //       <ProductTeaser />
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={3} speed={2.5}>
    //       <Portfolio />
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={4} speed={2.5}>
    //       <Services />
    //     </ParallaxLayer>
    //   </Parallax>
    // </div>
  );
}

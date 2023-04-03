import About from '../partials/About'
import ProductTeaser from '../partials/ProductTeaser'
import Portfolio from '../partials/Portfolio'
import Services from '../partials/Services'

export default function Home() {
  return (
    <>
      <div className="spacer"></div>
      <div id="nemosa">Nemosa</div>
      <div className="spacer"></div>
      <About />
      <ProductTeaser />
      <Portfolio />
      <Services />
    </>
  )
}
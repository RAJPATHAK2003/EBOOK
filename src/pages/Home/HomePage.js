import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProduct";
import { Faq } from "./components/Faq";
export const HomePage = () => {
    return (
      <main>
          <Hero/>
          <FeaturedProducts/>
            <Faq/>
      </main>
    )
  }




import Banner from './components/home/banner'
import Features from './components/home/features'
import Categories from './components/home/categorie'
import About from './components/home/about'
import Course from './components/home/course'
import Testimonial from './components/home/testimonial'
import CounterUp from './components/home/counterup'
import CTA from './components/home/cta'
import Team from './components/home/team'
import CtaBanner from './components/home/cta-banner'
import Brand from './components/home/brand'
import Blog from './components/home/blog'
export default function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <About />
      <Categories />
      <Course />
      <CounterUp />
      <Testimonial />
      <CTA />
      <Team />
      <CtaBanner />
      <Brand />
      <Blog />
    </div>
  )
}

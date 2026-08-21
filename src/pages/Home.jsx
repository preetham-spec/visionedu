import Seo from '../components/Seo'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import Academics from '../components/Academics'
import CampusesTeaser from '../components/CampusesTeaser'
import Testimonials from '../components/Testimonials'
import Admissions from '../components/Admissions'

export default function Home() {
  return (
    <>
      <Seo description="Karnataka's premier Pre-University institute offering integrated Science (PCMB/PCMC/PCME), Commerce and Degree programs with NEET/JEE/KCET coaching, day-scholar and residential campuses in Bangalore, and merit scholarships up to 100%." />
      <Hero />
      <StatsBar />
      <Academics />
      <CampusesTeaser />
      <Testimonials />
      <Admissions />
    </>
  )
}

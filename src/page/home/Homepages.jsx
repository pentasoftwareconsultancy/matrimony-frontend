import React from 'react'
import Hero from '../../components/home/hero/Hero'
import Featurees from '../../components/home/featurees/Featurees'
import ProfileSteps from '../../components/home/profilestep/Profilestep'
import Profilesteps from '../../components/home/profilestep/Profilestep'
import Filter from '../../components/home/filter/Filter'
import Homeabout from '../../components/home/homeabout/Homeabout'
import HeroSlider from '../../components/home/heromain/Heromain'
import Testimonials from '../../components/home/testimonials/Testimonials'
import Testimonihome from '../../components/home/testimonihome/Testimonihome'
// import Hero from '../../homes/home/hero/Hero'
// import Filter from '../../homes/home/hero/filter/Filter'

function Homepages() {
  return (
    <div>
      {/* <HeroSlider/> */}
     <Hero/>
   {/* <Filter/> */}
     
      <Homeabout/>
       <Featurees/>
      <Profilesteps/>
      {/* <Testimonials/> */}
      <Testimonihome/>
    </div>
  )
}

export default Homepages
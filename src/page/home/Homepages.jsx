import React from 'react'
import Hero from '../../Components/homes/hero/Hero'
import Featurees from '../../Components/homes/featurees/Featurees'
import ProfileSteps from '../../Components/homes/profilestep/Profilestep'
import Profilesteps from '../../Components/homes/profilestep/Profilestep'
import Filter from '../../Components/homes/filter/Filter'
import Homeabout from '../../Components/homes/homeabout/Homeabout'
import HeroSlider from '../../Components/homes/heromain/Heromain'
import Testimonials from '../../Components/homes/testimonials/Testimonials'
import Testimonihome from '../../Components/homes/testimonihome/Testimonihome'
// import Hero from '../../homes/home/hero/Hero'
// import Filter from '../../homes/home/hero/filter/Filter'

function Homepages() {
  return (
    <div>
      <HeroSlider/>
     {/* <Hero/> */}
   {/* <Filter/> */}
      <Featurees/>
      <Homeabout/>
      <Profilesteps/>
      {/* <Testimonials/> */}
      <Testimonihome/>
    </div>
  )
}

export default Homepages
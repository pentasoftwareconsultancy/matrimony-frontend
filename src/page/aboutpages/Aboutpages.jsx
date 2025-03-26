import React from 'react'
import Abouthero from '../../Components/about/abouthero/Abouthero'
import Section from '../../Components/about/abouthero/section/Section'
import Media from '../../Components/about/media/Media'
import Aboutus from '../../Components/about/aboutus/Aboutus'
import Gallary from '../../Components/about/gallary/Gallary'
import Sectionmain from '../../Components/about/sectionmain/Sectionmain'
import Testimonials from '../../Components/homes/testimonials/Testimonials'

function Aboutpages() {
  return (
    <div>
       {/* <Abouthero/> */}
       <Abouthero/>
       <Section/>
       <Media/>
       <Aboutus/>
       <Gallary/>
       {/* <Sectionmain/> */}
       <Testimonials/>
    </div>
  )
}

export default Aboutpages
import React from 'react'
import Abouthero from '../../components/about/aboutheros/Abouthero'
import Section from '../../components/about/section/Section'
import Media from '../../components/about/medias/Media'
import Aboutus from '../../Components/about/aboutus/Aboutus'
import Gallary from '../../Components/about/gallary/Gallary'
import Sectionmain from '../../Components/about/sectionmain/Sectionmain'
import Testimonials from '../../components/home/testimonials/Testimonials'

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
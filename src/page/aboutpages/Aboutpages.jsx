import React from 'react'
import Abouthero from '../../components/about/aboutheros/Abouthero'
import Section from '../../components/about/section/Section'
import Media from '../../components/about/medias/Media'
import Aboutus from '../../components/about/aboutuss/Aboutus'
import Gallary from '../../components/about/gallarys/Gallary'
import Sectionmain from '../../components/about/sectionmains/Sectionmain'
import Testimonials from '../../components/home/testimonials/Testimonials'

function Aboutpages() {
  return (
    <div>
       {/* <Abouthero/> */}
       <Abouthero/>
       {/* <Section/> */}
       <Media/>
       <Aboutus/>
       <Gallary/>
       {/* <Sectionmain/> */}
       <Testimonials/>
    </div>
  )
}

export default Aboutpages
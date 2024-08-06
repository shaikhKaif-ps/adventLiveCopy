import React from 'react'
import PressSpotlight from '../Components/press_sections/PressSpotlight'
import Footer from '../Components/Footer/Footer';
import Press_inside_sec from '../Components/press_sections/press_inside_sec';
const page = () => {
  return (
    <>
    <PressSpotlight pressReleaseTitle={'Valor estate to demerge hospitality business'}/>
    <Press_inside_sec videoLink={'https://wordpress-1034502-4717804.cloudwaysapps.com/wp-content/uploads/2024/07/press_video.mp4'}/>
    <Footer />
   </>
  )
}

export default page
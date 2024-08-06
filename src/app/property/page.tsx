import React from 'react'
import Property_spotligth from '../Components/property_sections/property_spotlight/property_spotlight';
import Property_info from '../Components/property_sections/propery_info_section/property_info';
import Property_list from '../Components/property_sections/property_list/property_list';
import Footer from '../Components/Footer/Footer';
export default function page() {
  return (
    <>
       <Property_spotligth />
       <Property_info />
       <Property_list />
       <Footer />
    </>
  )
}

import React from 'react'
import Pro_dtls_spotlight from '../Components/riverwalk_hotel_sections/pro_dtls_spotlight/pro_dtls_spotlight'
import Pro_dtls_info from '../Components/riverwalk_hotel_sections/pro_dtls_info_sec/pro_dtls_info'
import Pro_dtls_Media from '../Components/riverwalk_hotel_sections/pro_dtls_media_sec/pro_dtls_media'
import Pro_dtls_loc from '../Components/riverwalk_hotel_sections/pro_dtls_loc_sec/pro_dtls_loc'
import Footer from '../Components/Footer/Footer'
import PremiumCollSection from '../Components/Home-page-section/premium-collection/premiumCollSection'




export default function page() {
  return (
    <>
      <Pro_dtls_spotlight />
      <Pro_dtls_info />
      <Pro_dtls_Media />
      <Pro_dtls_loc />
      <PremiumCollSection />
      <Footer />
    </>
  )
}


"use client";
import React from 'react'
import '../../../globals.css';
import "bootstrap/dist/css/bootstrap.min.css";

import './pro_dtls_loc.css'
import Link from 'next/link';



export default function pro_dtls_loc() {
  return (
    <div className='pro_dtls_loc_Main tab_padding'>
      <div className="cstm-cont-wdt">
        <div className='pro_dtl_loc_header'>
          <h2 className='section_hd'>Location </h2>
          {/* <h2 className='premium-hd'>Location </h2> */}
          <Link href="https://maps.app.goo.gl/3Gpz4bfw4BvBbJxCA" target='_blank' className='mapBtn_link'>
            view in google map
          </Link>
        </div>
      </div>


    
      <div className="cstm-cont-wdt">
        <div className="row pro_dtls_locParent">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.6137327756483!2d73.8497811104704!3d15.451385485080197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb8a991555555%3A0xb9238d62be942f9a!2sGrand%20Hyatt%20Goa!5e0!3m2!1sen!2sin!4v1720803023026!5m2!1sen!2sin" ></iframe>
        </div>
      </div>
    </div>
  )
}

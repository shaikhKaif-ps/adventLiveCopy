
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
          <Link href="https://maps.app.goo.gl/zQYDFDQSf8mRfqRW9" target='_blank' className='mapBtn_link'>
            view in google map
          </Link>
        </div>
      </div>


    
      <div className="cstm-cont-wdt">
        <div className="row pro_dtls_locParent">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14018.20767513257!2d77.12135!3d28.553185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c69140ab7a9%3A0x22f2522c2e0e742f!2sJW%20Marriott%20Hotel%20New%20Delhi%20Aerocity!5e0!3m2!1sen!2sin!4v1720802795343!5m2!1sen!2sin"></iframe>
        </div>
      </div>
    </div>
  )
}


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
          <button  className='mapBtn_link'>
            view in google map
          </button>
          {/* <Link href="https://maps.app.goo.gl/UFWfkaeLDpSWU6Rm8" target='_blank' className='mapBtn_link'>
            view in google mapf
          </Link> */}
        </div>
      </div>


    
      <div className="cstm-cont-wdt">
        <div className="row pro_dtls_locParent">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.060554353911!2d77.10667079470768!3d28.546778259762227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c139f8e287d%3A0xe8379e93a8cf186a!2sHotel%20Delhi%20Aerocity!5e0!3m2!1sen!2sin!4v1720803362017!5m2!1sen!2sin"></iframe>
        </div>
      </div>
    </div>
  )
}

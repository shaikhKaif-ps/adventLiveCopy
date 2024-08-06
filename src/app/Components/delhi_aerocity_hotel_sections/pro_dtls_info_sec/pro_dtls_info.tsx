import Image from 'next/image'
import React from 'react'
import  '../../../Components/Home-page-section/YearSection/YearSection.css'
import '../../../globals.css'
import './pro_dtls_info.css'


import locationIcon from '../../../../../public/pro_dtls_page/LocationIcon1.png'
import upper from '../../../../../public/pro_dtls_page/prop_dtls_upper.png'
import upArrow from '../../../../../public/pro_dtls_page/prop_dtls_Booknow.png'
import listIcon from '../../../../../public/pro_dtls_page/listIcon.png'
import key from '../../../../../public/Year-Icon/key.svg'




export default function Pro_dtls_info() {
  return (
    <>
      <div className='prop_dtls_Section tab_padding'>
        <div className="cstm-cont-wdt">
          <div className='row '>
            <div className='col-lg-4 col-md-12 pro_dtls_name'>
                <h2 className='section_hd'>Delhi Aerocity Hotel</h2>
                <div className="pro_dtl_address_Con">
                  <Image src={locationIcon}  alt=''/>
                  <span className='pro_dtl_adress'>Delhi, india</span>
                </div>
            </div>

            <div className='col-lg-8 col-md-12'>
              <div className="row prop_dtls_iconCon">
                <div className="col-md-4 prop_dtls_IconsDesp bg-prop ">
                  <Image src={key}  alt=''/>
                  <div className='prop_dtls_num '>
                    <h2>117 <br /> Keys</h2>
                  </div>
                </div>
                <div className="col-md-4 prop_dtls_IconsDesp bg-prop">
                  <Image src={upper}  alt=''/>
                  <div className='prop_dtls_num '>
                    <h2>Upper <br /> Upscale</h2>
                  </div>
                </div>
                {/* <div className="col-md-4 prop_dtls_IconsDesp bg-prop-last">
                  <Image src={upArrow}  alt=''/>
                  <div className='prop_dtls_num '>
                    <h2>Book Now</h2>
                  </div>
                </div> */}
              </div>
            </div>

            

          </div>
          


          
        </div>
      </div>
      
      <div className="cstm-cont-wdt">
        <hr />
      </div>

      <div className="cstm-cont-wdt porp_dtls_desc tab_padding">
        <div className="row ">
          <div className="col-lg-8 col-md-12">
            <p className='desp_text'>
            The Marriott Marquis - St. Regis, New Delhi, is the largest integrated hospitality development in India, strategically located on 7.70 acres of prime land at the T3 Terminal, Aerocity, Hospitality District. This joint venture with the Prestige Group will feature two premier hotel brands: Marriott Marquis with 590 rooms and St. Regis with 189 rooms, totalling 779 bays. The development will also offer a large conference facility of 200,000 sq.ft. and substantial commercial space of 615,000 sq.ft.
            </p>
          </div>


          <div className="col-lg-4 col-md-12 prop_dtls_bulletCon ">
            <ul>
              <li>
                <span>Largest Integrated Development: </span> The largest integrated hospitality development in India.  
              </li>

              <li>
                <span>Prime Location: </span>  7.70 acres of prime land at T3 Terminal, Aerocity, New Delhi.
              </li>
              <li>
                <span>Hotel Inventory:</span> Marriott Marquis (590 rooms) and St. Regis (189 rooms) with a total of 779 bays.
                </li>
              <li>
                <span>Conference Facility:</span> A large conference facility of 200,000 sqft.</li>
                <li>
                <span>Commercial Space:</span> 615,000 sqft of commercial space.
                </li>

            </ul>
          </div>

        </div>
      </div>
      <hr />
    </>
  )
}


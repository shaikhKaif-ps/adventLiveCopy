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
                <h2 className='section_hd'>Grand Hayat </h2>
                <div className="pro_dtl_address_Con">
                  <Image src={locationIcon}  alt=''/>
                  <span className='pro_dtl_adress'>Goa, india</span>
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
                <div className="col-md-4 prop_dtls_IconsDesp bg-prop-last">
                  <Image src={upArrow}  alt=''/>
                  <div className='prop_dtls_num '>
                    <h2>Book Now</h2>
                  </div>
                </div>
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
            Grand Hyatt, Goa, boasts 13 years of operational excellence and is situated on 27 acres of prime beach-facing freehold land at Bambolim, Goa. The property currently features 313 keys and has plans to expand its inventory with an additional 89 keys, bringing the total to 402 keys. With impressive financial performance and strategic expansion plans, the Grand Hyatt, Goa, is a premier destination in the region.
            </p>
          </div>


          <div className="col-lg-4 col-md-12 prop_dtls_bulletCon ">
            <ul>
              <li>
                <span>Prime Location:</span> 27 acres of prime beach-facing freehold land at Bambolim, Goa.  
              </li>

              <li>
                <span>Premium Facilities:</span> 313 keys with the potential to add 89 more, increasing the total to 402 keys.
              </li>
              <li>
                <span>High Occupancy:</span> Lorem ipsum dolor sit amet.</li>
              <li>
                <span>Architectural Excellence:</span> Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>

        </div>
      </div>
      <hr />
    </>
  )
}


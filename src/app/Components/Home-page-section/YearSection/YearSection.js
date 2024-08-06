import React from 'react'
import Image from 'next/image'
import hotel from '../../../../../public/Year-Icon/Cities.svg'
import key from '../../../../../public/Year-Icon/key.svg'
import lineChart from '../../../../../public/Year-Icon/line-chart-square.svg'
import activity from '../../../../../public/Year-Icon/activity-2.svg'
import new_hotel from '../../../../../public/Year-Icon/building.svg'
import  './YearSection.css'
import '../../../globals.css'

export default function yearsection() {
  return (
    <div className='YearSection'>
      <div className="row cstm-cont-wdt cstmSe section-year ">
        <div className='col-md-6 yr-hd'>
            <h2 className='section_hd'>Years of <br/>excellence in <br /> <span>The making</span> </h2>
            {/* <h2>excellence in </h2>
            <h2 className='txt-color'>The making</h2> */}
        </div>
        <div className='col-md-6 bg-sec-clr'>
              <p>At Advent Hotel International, we are redefining hospitality with a portfolio of luxury and upscale hotels, committed to delivering exceptional experiences and superior value for our stakeholders.</p>
            <button className='yr-btn btnHoverEffect'>
            View our properties
            </button>

        </div>
      </div>

      <div className='row cstm-cont-wdt gap-30 cstmSe pd-top '>

        <div className='col-md-4 num-cont-wdt item'>
            <div className='flex num-section'>
            <Image src={new_hotel} width={50} height={50} alt="Hotel Icon" />
              <div className='bloc font-museo'>
              <h1>07</h1>        
              <h6 className='num-txt'>Total Hotels</h6>
              </div>
            </div>
        </div>

        <div className='col-md-4 num-cont-wdt item'>
            <div className='flex num-section'>
            <Image src={key} width={50} height={50} alt="Hotel Icon" />
              <div className='bloc font-museo'>
              <h1>4287</h1>        
              <h6 className='num-txt'>Total Keys</h6>
              </div>
            </div>
        </div>

        <div className='col-md-4 num-cont-wdt item'>
            <div className='flex num-section'>
            <Image src={hotel} width={50} height={50} alt="Hotel Icon" />
              <div className='bloc font-museo blocLast'>
              <h1>03</h1>        
              <h6 className='num-txt'>No. Of Cities</h6>
              </div>
            </div>
        </div>


      </div>
    </div>
  )
}

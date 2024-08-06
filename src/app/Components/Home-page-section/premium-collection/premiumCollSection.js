"use client";

import React from 'react';
import '../../../globals.css';
import './PremiumSection_module.css';
import { Tab, Tabs } from 'react-bootstrap'; // Assuming you have react-bootstrap installed
import SwTabOne from './SwTabOne'
import Link from 'next/link';
import SwTabLandingClear from './SwTabLandingClear'
import SwTabOperational from './SwTabOperational'
import SwTabPlanning from './SwTabPlanning'
import SwTabUnderCount from './SwTabUnderCount'
import SwTabOne1 from './SwTabOne'

const PremiumCollSection = () => {
  return (
    <div className='premiumCollection_section'>
      <div className='premimum_inside_section'>
        <h2 className='section_hd'>Our premium collection
        <br/> of
        <span> Properties</span>  
        </h2>
        
      </div>

      <div className='tab-section'>
        <div className='row'>

          <div className='col-md-12'>
              <div className='pipeline_section'>
          

                <div className='btn-prm-sec'>
                {/* <button className='exp-tab-btn hd-mob-btn'>EXPLORE ALL PROPERTIES</button> */}
                  <Link href={'/property'} className='exp-tab-btn hd-mob-btn'>EXPLORE ALL PROPERTIES</Link>
                </div>
    
                <Tabs defaultActiveKey="tab1" id="pipeline_tabs">
                  <Tab className='tab-ttl hd-mob' eventKey="tab1" title="All">
                    <SwTabOne1 />
                  </Tab>
                  <Tab className='tab-ttl' eventKey="tab2" title="Operational">
                    <SwTabOperational />
                  </Tab>
                  <Tab className='tab-ttl' eventKey="tab3" title="Under construction">
                    <SwTabUnderCount />
                  </Tab>
                  <Tab eventKey="tab4"  title="Planning">
                    <SwTabPlanning />
                  </Tab>
                  <Tab eventKey="tab5"  title="Land Clearing">
                    <SwTabLandingClear />
                  </Tab>
                </Tabs>
              </div>
          </div>

        </div>
      </div>


      {/* Mobile View All Button code start here  */}


      <div className='Mob_view_all_btn'>
          <a href='/property' className='mob-vw-btn'>EXPLORE ALL PROPERTIES</a>
      </div>


    </div>
    
  );
};

export default PremiumCollSection;

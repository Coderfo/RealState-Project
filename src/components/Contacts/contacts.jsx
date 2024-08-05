import React from 'react'
import './contacts.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const contacts = () => {
  return (
    <section className='c-wrapper'>
      <div className="padding innerWidth flexCenter c-container">
        {/* left side */}
        <div className=" flexColStart c-left">
          <span className='orangeText'>
            Our Contact Information
          </span>
          <span className='primaryText'>Easy to Contact Us</span>
          <span className='secondaryText'>
            Contact us now for the best prices and service.
            We promise strive for %100 customer satisfaction through our dedication and srvices.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25}/>
                  </div>
                  <div className="flexColStart details">
                    <span className='primaryText'>
                      Call
                    </span>
                    <span className='secondaryText'>
                      021 453 342 12
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>

              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart details">
                    <span className='primaryText'>
                      Chat
                    </span>
                    <span className='secondaryText'>
                      021 453 342 12
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>

              </div>
             
            </div>
            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart details">
                    <span className='primaryText'>
                      Video Call
                    </span>
                    <span className='secondaryText'>
                      021 453 342 12
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>

              </div>

              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25}/>
                  </div>
                  <div className="flexColStart details">
                    <span className='primaryText'>
                      Message
                    </span>
                    <span className='secondaryText'>
                      021 453 342 12
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>

              </div>
             
            </div>
          </div>
          
        </div>


        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="https://mrwallpaper.com/images/hd/magnificent-modern-luxury-home-oj9nyozvh7a9xbh2.jpg" alt="" srcset="" />
          </div>

        </div>
      </div>

    </section>
  )
}

export default contacts
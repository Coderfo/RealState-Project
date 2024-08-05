import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import './Value.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../assets/utils/accordion'


const Value = () => {
  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        {/* Left Side */}
        <div className='v-left'>
          <div className="image-container">
            <img src="https://pics.craiyon.com/2023-07-27/cb9aaa95b673461a94c3df93edebd1af.webp" alt="" srcset="" />
          </div>
          {/* right side */}
        </div>
          <div className="flexColStart v-right">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Best values in the market</span> 
            <span className='secondaryText'>
              We always ready to help, provide and find the best value for you.
              <br />
              We believe that a good place to live can make your life better.
            </span>

            <Accordion
            className='accordion-container'
            allowMultipleExpanded = {false}
            preExpanded={[0]}
            >
              {

                data.map((item, i) => {
                  const [className, setClassName] = useState(null)
                  return (
                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                      <AccordionItemHeading>
                        <AccordionItemButton className='accordionButton flexCenter'>

                          <AccordionItemState>
                            {({expanded}) =>
                             expanded
                             ? setClassName("expanded")
                             : setClassName("collapsed")
                            }
                          </AccordionItemState>

                          <div className="flexCenter icon">{item.icon}</div>
                          <span className='primaryText'>{item.heading}</span>
                          <div className="flexCenter icon">
                            <MdOutlineArrowDropDown size={20}/>
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className='secondaryText'>{item.details}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  )
                })


              }

            </Accordion>



          </div>
        

      </div>
    </section>
  )
}

export default Value
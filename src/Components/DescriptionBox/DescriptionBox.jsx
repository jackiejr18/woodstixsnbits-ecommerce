import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>WoodStixsNBits believes in taking art from the past and combining it with technology of the future.  
            No matter the medium whether it be on screen or off we want something that the human 
            brain has to take an extra second to determine reality from fantasy. 
        </p>
        <p>Of course our key material is wood due to not only its sturdiness but the look and 
          freedom it allows us when coming to the creative process. We believe that we can capture 
          the attention of society from all generations with wood, technology and pop culture. 
          Nostalgia with a modern twist that bridges the gap between old and young. 
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox

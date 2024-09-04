import React from 'react'
import "../../index.css";
import "../../Styles/Overall.css"
import Leftcontainer from '../left-containerComponent/leftcontainer'
import RightContainer from '../right-containerComponent/RightContainer'

function Forclosure() {
  return (
    <>
    <div className="overall-container">
      <div className="left-container">
        <Leftcontainer />
      </div>
      <div  className="right-container">
        <RightContainer />
      </div>
    </div>
  </>
  )
}

export default Forclosure
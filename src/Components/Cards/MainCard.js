import React from 'react'
// import Bag from '../Img/bagg.png'
import './MainCard.css'

function MainCard(props) {
  return (
    <div className="CardTopDiv">
      <div className="CardDivTwo">
        <div className="imgtext">
          <div className="imgDiv">
            <img src={props.ProductPix} alt="" style={{
              width: '100px'
            }} />
          </div>
          <p className="firstText"  > {props.Productname} </p>
        </div>
        <div className="subtexes">
          <div>
            <p className="titltSub">Price</p>
            <p className="subSub"> {props.Pricetag} </p>
          </div>
          <div>
            <p className="titltSub">Total Sales</p>
            <p className="subSub1"> {props.TotalSale} </p>
          </div>

        </div>
      </div>
    </div >
  )
}

export default MainCard

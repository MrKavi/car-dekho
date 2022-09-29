import React from 'react'
import './Carfeatures.css'
import carfeature from '../assets/carfeature.jpeg'

const Carfeatures = () => {
  return (
    <div className='carfeatures'>
        <div className='row'>
            <div className='clm'>
<ul className='carfeaturelist'>
<li className='li'>
    <span className='lispan'>COMFORT</span>
</li>
  <li className='li'>
  <span className='lispan'>CHARGER</span>
  </li>
  <li className='li'>
  <span className='lispan'>EXTERIOR</span>
  </li>
  <li className='li'>
  <span className='lispan'>INTERIOR</span>
  </li>
  <li className='li'>
  <span className='lispan'>AIR PURIFIER</span>
  </li>
</ul>
            </div>
            <div className='clm2'>
                <div className='clm2-1'>
<h3>AIR PURIFIER WITH AQI DISPLAY</h3>
<span>Inspired by the pristine air of luxury.</span>
<button className='knowmorebtn'>KNOW MORE</button>
</div>
            <div className='img'>
            <img className='carfeatureimg' src={carfeature} alt="logo" />
                        </div>
            </div>

        </div>
    </div>
  )
}

export default Carfeatures
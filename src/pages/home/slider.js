import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img1 from './empty.png';
import img2 from './default.png';
import img3 from './code1.png';
import img4 from './code2.png';

const sliderThumbStyles =  (`
  width: 25px;
  height: 25px;

   box-shadow:5px 5px 5px rgba(50,50,50,0.5);
  cursor: pointer;
  outline: 5px solid #333;

  -webkit-transition: .2s;
  transition: opacity .2s;
`);

const Styles = styled.div`
  display: flex;
  align-items:center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;

  .value {
    flex: 1;
    font-size: 1rem;
    color:rgb(10,10,10)
  }

  .slider {
    flex:6
    
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
  
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${sliderThumbStyles}
    }

    &::-moz-range-thumb {
      ${sliderThumbStyles}
    }

    .icon{      
      width: 40px;
      height: 30px;}
  }
`;

const Slider=()=> {
    // state = {
    //   value: 0.1
    // }
    const [value,setvalue] = useState('')
    const onHandleChange = (e) => {
        e.preventDefault()
        setvalue({ value: e.target.value })}
    
    const imageshow = (value) => {
      switch (value) {
        case (0<=value && value <25):
          return img1
        case (25<=value && value<50):
          return img2
        case (50<=value && value<75):
          return img3
        case (75<=value && value<100):
          return img4
      }
    }
     
      return (
        <Styles opacity={value } color="blue">
          <input type="range" min={0} max={100} value={value} className="slider" onChange={(e) => setvalue(e.target.value)} />
          <div className="slider">{value} </div>
            <div className="icon">
              <img src={imageshow} alt="logo" />
            </div>
          
          
          </Styles>
        
        
        
      )
      // console.log(imageshow)
    }
  
  export default Slider;


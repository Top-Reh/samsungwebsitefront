import React, { useState,useRef  } from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";
import {pickforu} from './piickforudata';
import { mobiledata } from './mobiledata';
import { tvdata } from './tvdata';
import { computingdata } from './computingdata';
import { homeappdata } from './homeappdata';

const Thing = styled.div`
  &:hover {
    button {
      opacity:1;
      transform: translateY(0);
    }
    p {
      opacity:0;
      display:none;
    }
  }
`;

const Button = styled(motion.button)`
  transition: all 0.7s ease-in-out;
  transform:  translateY(100%);
  opacity:0;
`;

const Firstitem = styled.div`
  background-image: url(${prop => prop.bgimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &:hover {
    button {
      opacity:1;
      transform: translateY(0);
    }
  }
`;

const Restitem = styled.div`
  &:hover {
      button {
        opacity:1;
        transform: translateY(0);
      }
    }
`;

const Restitemhome = styled.div`
  background-image: url(${prop => prop.bgimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top:60%;

  &:hover {
      button {
        opacity:1;
        transform: translateY(0);
      }
    }
`;

const Thirddiv = () => {
  const [spancls,setSpancls] = useState('pfu');

  const pfuRef = useRef(null);
  const mbRef = useRef(null);
  const tvRef = useRef(null);
  const happRef = useRef(null);
  const cmpRef = useRef(null);

  function addspan(id,ref) {
    setSpancls(id);
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='thirddiv'>
      <h1>Shop all latest offers and innovations</h1>
      <button className='viewall'>
        <a href='https://www.samsung.com/us/shop/all-deals/'>View all offers</a>
      </button>
      <div className='thingslists'>
        <ul>
          <li onClick={() =>addspan('pfu',pfuRef)}>Picks For You <span className={spancls === 'pfu' ? 'listline listfull' : 'listline'}></span></li>
          <li onClick={() =>addspan('mb',mbRef)}>Mobile <span className={spancls === 'mb' ? 'listline listfull' : 'listline'}></span></li>
          <li onClick={() =>addspan('tv',tvRef)}>TV & Audio <span className={spancls === 'tv'? 'listline listfull' : 'listline'}></span></li>
          <li onClick={() =>addspan('happ',happRef)}>Home Appliances <span className={spancls === 'happ' ? 'listline listfull' : 'listline'}></span></li>
          <li onClick={() =>addspan('cmp',cmpRef)}>Computing <span className={spancls === 'cmp' ? 'listline listfull' : 'listline'}></span></li>
        </ul>
      </div>
      <div className='thingsshow'>
        <div ref={pfuRef} className='pfu'>
          {
            pickforu.map(item => (
              <Thing key={item.id}>
                <img src={item.img}></img>
                <h2>{item.name}</h2>
                <p className='price'>{item.price || ''}</p> 
                <p>{item.discount}</p>
                <Button 
                  transition={{type: 'tween',duration:0.2}}
                className='thingbuybtn'
                >
                <a href='https://www.samsung.com/us/smartphones/galaxy-z-fold6/buy/galaxy-z-fold6-256gb-unlocked-sm-f956uakaxaa/'>Buy now</a></Button>
              </Thing>
            ))
          }
        </div>
        <div ref={mbRef} className='mb'>
          {
            mobiledata.map((item,index) => (
              index === 0 ? (
                <Firstitem className='mobiledivfirst' key={item.id} bgimg={item.img}>
                  <h3 className='price'>{item.price || ''}</h3> 
                  <h3>{item.name}</h3>
                  <Button 
                    transition={{type: 'tween',duration:0.2}}
                  className='thingbuybtn'
                  >Buy now</Button>
                </Firstitem>
              ) : (
                <Restitem className='mobiledivrest' key={item.id} bgimg={item.img}>
                  <img src={item.img}></img>
                  <h5 className='price'>{item.price || ''}</h5> 
                  <h5>{item.name}</h5>
                  <Button 
                    transition={{type: 'tween',duration:0.2}}
                  className='thingbuybtn'
                  >Buy now</Button>
                </Restitem>
              )
              
            ))
          }
        </div>
        <div ref={tvRef} className='tv'>
        {
            tvdata.map((item,index) => (
              index === 0 ? (
                <Firstitem className='mobiledivfirst' key={item.id} bgimg={item.img}>
                  <h3 className='price'>{item.price || ''}</h3> 
                  <h3>{item.name}</h3>
                  <Button 
                    transition={{type: 'tween',duration:0.2}}
                  className='thingbuybtn'
                  >Buy now</Button>
                </Firstitem>
              ) : (
                <Restitem className='mobiledivrest' key={item.id} bgimg={item.img}>
                  <img src={item.img}></img>
                  <h5 className='price'>{item.price || ''}</h5> 
                  <h5>{item.name}</h5>
                  <Button 
                    transition={{type: 'tween',duration:0.2}}
                  className='thingbuybtn'
                  >Buy now</Button>
                </Restitem>
              )
              
            ))
          }
        </div>
        <div ref={happRef} className='mb'>
        {
            homeappdata.map((item,index) => (
              index === 0 ? (
                <Firstitem className='mobiledivfirst' key={item.id} bgimg={item.img}>
                  <h3 className='price'>{item.price || ''}</h3> 
                  <h3>{item.name}</h3>
                  <Button 
                    transition={{type: 'tween',duration:0.2}}
                  className='thingbuybtn'
                  >Buy now</Button>
                </Firstitem>
              ) : (
                <Restitemhome className='mobiledivrest' key={item.id} bgimg={item.img}>
                  <h5 className='price'>{item.price || ''}</h5> 
                  <h5>{item.name}</h5>
                  <Button 
                    transition={{type: 'tween',duration:0.2}}
                  className='thingbuybtn'
                  >Buy now</Button>
                </Restitemhome>
              )
              
            ))
          }
        </div>
        <div ref={cmpRef} className='mb'>
        {
            computingdata.map((item,index) => (
              index === 0 ? (
                <Firstitem className='mobiledivfirst' key={item.id} bgimg={item.img}>
                  <h3 className='price'>{item.price || ''}</h3> 
                  <h3>{item.name}</h3>
                  <Button 
                    transition={{type: 'tween',duration:0.2}}
                  className='thingbuybtn'
                  >Buy now</Button>
                </Firstitem>
              ) : (
                <Restitem className='mobiledivrest' key={item.id} bgimg={item.img}>
                  <img src={item.img}></img>
                  <h5 className='price'>{item.price || ''}</h5> 
                  <h5>{item.name}</h5>
                  <Button 
                    transition={{type: 'tween',duration:0.2}}
                  className='thingbuybtn'
                  >Buy now</Button>
                </Restitem>
              )
              
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Thirddiv

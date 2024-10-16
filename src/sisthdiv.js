import React,{useState,useRef} from 'react';
import styled from 'styled-components';
import { appdata } from './appdata';

const Galaxyfacts = styled.div`
    width:50%;
`;

const Fold = styled.div`
    background-image: url(${prop => prop.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const Sisthdiv = () => {
    const [spancls,setSpancls] = useState('pfu');

    const pfuRef = useRef(null);
    const mbRef = useRef(null);
    const tvRef = useRef(null);
    const happRef = useRef(null);
  
    function addspan(id,ref) {
      setSpancls(id);
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  return (
    <div className='sisthdiv'>
      <h1 className='titile'>TV & Audio</h1>
        <div className='thingslists applili'>
          <ul>
            <li onClick={() =>addspan('pfu',pfuRef)}>Bundle Deals<span className={spancls === 'pfu' ? 'listline listfull' : 'listline'}></span></li>
            <li onClick={() =>addspan('mb',mbRef)}>Bespoke Refrigerators<span className={spancls === 'mb' ? 'listline listfull' : 'listline'}></span></li>
            <li onClick={() =>addspan('tv',tvRef)}>Bespoke Laundry<span className={spancls === 'tv'? 'listline listfull' : 'listline'}></span></li>
            <li onClick={() =>addspan('happ',happRef)}>Cooking Power Pair<span className={spancls === 'happ' ? 'listline listfull' : 'listline'}></span></li>
          </ul>
        </div>
        <div className='thingsshow galaxyshow appshow' >
          <Fold ref={pfuRef} className='fold' bg={appdata[0].img}>
            <Galaxyfacts className='galaxyfacts'>
                <h1>{appdata[0].name}</h1>
                <p>{appdata[0].text}</p>
                <nav className='learnmorediv4'>
                  <button className='buybtn4'><a className='alinkwhite' href='https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/65-class-the-frame-qled-4k-ls03d-qn65ls03dafxza/'>Buy now</a></button>
                </nav>
            </Galaxyfacts>
          </Fold>
          <Fold ref={mbRef} className='flip' bg={appdata[1].img}>
            <Galaxyfacts>
                <h1>{appdata[1].name}</h1>
                <p>{appdata[1].text}</p>
                <nav className='learnmorediv4'>
                  <button className='buybtn4'><a className='alinkwhite' href='https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/65-class-the-frame-qled-4k-ls03d-qn65ls03dafxza/'>Buy now</a></button>
                </nav>
            </Galaxyfacts>
          </Fold>
          <Fold ref={tvRef} className='ultra' bg={appdata[2].img}>
            <Galaxyfacts>
                <h1>{appdata[2].name}</h1>
                <nav className='learnmorediv4'>
                  <button className='buybtn4'><a className='alinkwhite' href='https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/65-class-the-frame-qled-4k-ls03d-qn65ls03dafxza/'>Buy now</a></button>
                </nav>
            </Galaxyfacts>
          </Fold>
          <Fold ref={happRef} className='ultra' bg={appdata[3].img}>
            <Galaxyfacts>
                <h1>{appdata[3].name}</h1>
                <p>{appdata[3].text}</p>
                <nav className='learnmorediv4'>
                  <button className='buybtn4'><a className='alinkwhite' href='https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/65-class-the-frame-qled-4k-ls03d-qn65ls03dafxza/'>Buy now</a></button>
                </nav>
            </Galaxyfacts>
          </Fold>
        </div>
    </div>
  )
}

export default Sisthdiv

import React,{useState,useRef} from 'react';
import styled from 'styled-components';
import { eledata } from './eledata';

const Galaxyfacts = styled.div`
    width:50%;
`;

const Fold = styled.div`
    background-image: url(${prop => prop.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center ;
`;

const Fifthdiv = () => {
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
    <div className='fifthdiv'>
      <h1>TV & Audio</h1>
        <div className='thingslists elediv'>
          <ul>
            <li onClick={() =>addspan('pfu',pfuRef)}>S90D<span className={spancls === 'pfu' ? 'listline listfull' : 'listline'}></span></li>
            <li onClick={() =>addspan('mb',mbRef)}>QLED 4K QN90D<span className={spancls === 'mb' ? 'listline listfull' : 'listline'}></span></li>
            <li onClick={() =>addspan('tv',tvRef)}>Music Frame<span className={spancls === 'tv'? 'listline listfull' : 'listline'}></span></li>
          </ul>
        </div>
        <div className='thingsshow galaxyshow eleshow' >
          <Fold ref={pfuRef} className='fold' bg={eledata[0].img}>
            <Galaxyfacts>
                <h1>{eledata[0].name}</h1>
                <p>{eledata[0].text}</p>
                <nav className='learnmorediv4'>
                  <button className='buybtn4'><a className='alink' href='https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/65-class-the-frame-qled-4k-ls03d-qn65ls03dafxza/'>Buy now</a></button>
                </nav>
            </Galaxyfacts>
          </Fold>
          <Fold ref={mbRef} className='flip' bg={eledata[1].img}>
            <Galaxyfacts>
                <h1>{eledata[1].name}</h1>
                <p>{eledata[1].text}</p>
                <nav className='learnmorediv4'>
                  <button className='buybtn4'><a className='alink' href='https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/65-class-the-frame-qled-4k-ls03d-qn65ls03dafxza/'>Buy now</a></button>
                </nav>
            </Galaxyfacts>
          </Fold>
          <Fold ref={tvRef} className='ultra' bg={eledata[2].img}>
            <Galaxyfacts>
                <h1>{eledata[2].name}</h1>
                <p>{eledata[2].text}</p>
                <nav className='learnmorediv4'>
                  <button className='buybtn4'><a className='alink' href='https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/65-class-the-frame-qled-4k-ls03d-qn65ls03dafxza/'>Buy now</a></button>
                </nav>
            </Galaxyfacts>
          </Fold>
        </div>
    </div>
  )
}

export default Fifthdiv

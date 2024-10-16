import React,{useState,useRef} from 'react';
import { galaxydata } from './galaxydata';
import styled from 'styled-components';

const Galaxyfacts = styled.div`
    width:50%;
`;

const Fold = styled.div`
    background-image: url(${prop => prop.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center ;
`;

const Fourthdiv = () => {
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
        <h1>Mobile & Computing</h1>
        <div className='thingslists phonelist'>
          <ul>
            <li onClick={() =>addspan('pfu',pfuRef)}>Galaxy Z Fold6 <span className={spancls === 'pfu' ? 'listline listfull' : 'listline'}></span></li>
            <li onClick={() =>addspan('mb',mbRef)}>Galaxy Z Flip6 <span className={spancls === 'mb' ? 'listline listfull' : 'listline'}></span></li>
            <li onClick={() =>addspan('tv',tvRef)}>Galaxy S24 Ultra<span className={spancls === 'tv'? 'listline listfull' : 'listline'}></span></li>
            <li onClick={() =>addspan('happ',happRef)}>Galaxy Tab S10 Series<span className={spancls === 'happ' ? 'listline listfull' : 'listline'}></span></li>
            <li onClick={() =>addspan('cmp',cmpRef)}>Galaxy Watch Ultra <span className={spancls === 'cmp' ? 'listline listfull' : 'listline'}></span></li>
          </ul>
        </div>
        <div className='thingsshow galaxyshow' >
          <Fold ref={pfuRef} className='fold' bg={galaxydata[0].img}>
            <Galaxyfacts>
                <h1>{galaxydata[0].name}</h1>
                <p>{galaxydata[0].price}</p>
                <nav className='learnmorediv4'>
                  <button className='viewall'>
                    <a href='https://www.samsung.com/us/smartphones/galaxy-z-fold6/'>Learn more</a>
                  </button>
                  <button className='buybtn4'><a className='alinkwhite' href='https://www.samsung.com/us/smartphones/galaxy-s24-ultra/buy/galaxy-s24-ultra-512gb-unlocked-sm-s928uzkfxaa/'>Buy now</a></button>
                </nav>
            </Galaxyfacts>
          </Fold>
          <Fold ref={mbRef} className='flip' bg={galaxydata[1].img}>
            <Galaxyfacts>
                <h1>{galaxydata[1].name}</h1>
                <p>{galaxydata[1].price}</p>
                <nav className='learnmorediv4'>
                  <button className='viewall'>
                    <a href='https://www.samsung.com/us/smartphones/galaxy-z-fold6/'>Learn more</a>
                  </button>
                  <button className='buybtn4'><a className='alinkwhite' href='https://www.samsung.com/us/smartphones/galaxy-s24-ultra/buy/galaxy-s24-ultra-512gb-unlocked-sm-s928uzkfxaa/'>Buy now</a></button>
                </nav>
            </Galaxyfacts>
          </Fold>
          <Fold ref={tvRef} className='ultra' bg={galaxydata[2].img}>
            <Galaxyfacts>
                <h1>{galaxydata[2].name}</h1>
                <p>{galaxydata[2].price}</p>
                <nav className='learnmorediv4'>
                  <button className='viewall'>
                    <a href='https://www.samsung.com/us/smartphones/galaxy-z-fold6/'>Learn more</a>
                  </button>
                  <button className='buybtn4'><a className='alinkwhite' href='https://www.samsung.com/us/smartphones/galaxy-s24-ultra/buy/galaxy-s24-ultra-512gb-unlocked-sm-s928uzkfxaa/'>Buy now</a></button>
                </nav>
            </Galaxyfacts>
          </Fold>
          <Fold ref={happRef} className='series' bg={galaxydata[3].img}>
            <Galaxyfacts>
                <h1>{galaxydata[3].name}</h1>
                <p>{galaxydata[3].price}</p>
                <nav className='learnmorediv4'>
                  <button className='viewall'>
                    <a href='https://www.samsung.com/us/smartphones/galaxy-z-fold6/'>Learn more</a>
                  </button>
                  <button className='buybtn4'><a className='alinkwhite' href='https://www.samsung.com/us/smartphones/galaxy-s24-ultra/buy/galaxy-s24-ultra-512gb-unlocked-sm-s928uzkfxaa/'>Buy now</a></button>
                </nav>
            </Galaxyfacts>
          </Fold>
          <Fold ref={cmpRef} className='watch' bg={galaxydata[4].img}>
            <Galaxyfacts>
                <h1>{galaxydata[4].name}</h1>
                <p>{galaxydata[4].price}</p>
                <nav className='learnmorediv4'>
                  <button className='viewall'>
                    <a href='https://www.samsung.com/us/smartphones/galaxy-z-fold6/'>Learn more</a>
                  </button>
                  <button className='buybtn4'><a className='alinkwhite' href='https://www.samsung.com/us/smartphones/galaxy-s24-ultra/buy/galaxy-s24-ultra-512gb-unlocked-sm-s928uzkfxaa/'>Buy now</a></button>
                </nav>
            </Galaxyfacts>
          </Fold>
        </div>
    </div>
  )
}

export default Fourthdiv

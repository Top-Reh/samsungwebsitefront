import React, { useState } from 'react';
import styled from 'styled-components';
import { explorestoriesdata } from './explorestoriesdta';

const Oneads = styled.div`
  background-color: lightgrey;
  transition: height 0.3s ease;
`;

const Seventhdiv = () => {
  const [mouseenter, setMouseEnter] = useState(1);

  const mouseenterfun1 = (id) => {
    setMouseEnter(id);
  };

  const mouseoutfun1 = () => {
    setMouseEnter(1);
  };

  return (
    <div className="seventhdiv">
      <h1>Explore Stories</h1>
      <div className="two7div">
        <img
          src={explorestoriesdata[mouseenter-1].img}
          alt="Story"
        />
        <div className="youradsonhover">
          <span
            className="adshoverline"
            style={{ width: mouseenter === 1 ? '100%' : '0' }}
          ></span>

          <Oneads
            className="oneads7"
            onMouseEnter={() => mouseenterfun1(1)}
            onMouseLeave={mouseoutfun1}
            style={{ height: mouseenter === 1 ? '130px' : '50px' }}
          >
            <span>01</span>
            {explorestoriesdata[0].name}
            <button className='viewall' style={{display: mouseenter === 1 ? 'block' : 'none'}}>
                    <a href='https://www.samsung.com/us/explore/brand/How-to-power-your-way-to-a-more-productive-fall-with-Samsung-AI-and-SmartThings/'>Learn more</a>
            </button>
            <hr style={{ display: mouseenter === 1 ? 'block' : 'none' }}/>
          </Oneads>
          

          <span
            className="adshoverline"
            style={{ width: mouseenter === 2 ? '100%' : '0' }}
          ></span>

          <Oneads
            className="oneads7"
            onMouseEnter={() => mouseenterfun1(2)}
            onMouseLeave={mouseoutfun1}
            style={{ height: mouseenter === 2 ? '130px' : '50px' }}
          >
            <span>02</span>
            {explorestoriesdata[1].name}
             <button className='viewall' style={{display: mouseenter === 2 ? 'block' : 'none'}}>
                    <a href='https://www.samsung.com/us/explore/brand/How-to-power-your-way-to-a-more-productive-fall-with-Samsung-AI-and-SmartThings/'>Learn more</a>
            </button>
            <hr style={{ display: mouseenter === 2 ? 'block' : 'none' }}/>
          </Oneads>
          
          <span
            className="adshoverline"
            style={{ width: mouseenter === 3 ? '100%' : '0' }}
          ></span>

          <Oneads
            className="oneads7"
            onMouseEnter={() => mouseenterfun1(3)}
            onMouseLeave={mouseoutfun1}
            style={{ height: mouseenter === 3? '130px' : '50px' }}
          >
            <span>03</span>
            {explorestoriesdata[2].name}
             <button className='viewall' style={{display: mouseenter === 3 ? 'block' : 'none'}}>
                    <a href='https://www.samsung.com/us/explore/brand/How-to-power-your-way-to-a-more-productive-fall-with-Samsung-AI-and-SmartThings/'>Learn more</a>
            </button>
            <hr style={{ display: mouseenter === 3 ? 'block' : 'none' }}/>
          </Oneads>
          
          <span
            className="adshoverline"
            style={{ width: mouseenter === 4 ? '100%' : '0' }}
          ></span>

          <Oneads
            className="oneads7"
            onMouseEnter={() => mouseenterfun1(4)}
            onMouseLeave={mouseoutfun1}
            style={{ height: mouseenter === 4 ? '130px' : '50px' }}
          >
            <span>04</span>
            {explorestoriesdata[3].name}
             <button className='viewall' style={{display: mouseenter === 4 ? 'block' : 'none'}}>
                    <a href='https://www.samsung.com/us/explore/brand/How-to-power-your-way-to-a-more-productive-fall-with-Samsung-AI-and-SmartThings/'>Learn more</a>
            </button>
            <hr style={{ display: mouseenter === 4 ? 'block' : 'none' }}/>
          </Oneads>
          
          <span
            className="adshoverline"
            style={{ width: mouseenter === 5 ? '100%' : '0' }}
          ></span>

          <Oneads
            className="oneads7"
            onMouseEnter={() => mouseenterfun1(5)}
            onMouseLeave={mouseoutfun1}
            style={{ height: mouseenter === 5 ? '130px' : '50px' }}
          >
            <span>05</span>
            {explorestoriesdata[4].name}
             <button className='viewall' style={{display: mouseenter === 5 ? 'block' : 'none'}}>
                <a href='https://www.samsung.com/us/explore/brand/How-to-power-your-way-to-a-more-productive-fall-with-Samsung-AI-and-SmartThings/'>Learn more</a>
            </button>
            <hr style={{ display: mouseenter === 5 ? 'block' : 'none' }}/>
          </Oneads>
          
        </div>
      </div>
    </div>
  );
};

export default Seventhdiv;

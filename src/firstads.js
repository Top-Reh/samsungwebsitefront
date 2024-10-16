import React,{useContext} from 'react';
import { useEffect,useState } from 'react';
import Menuhover from './menuhover';
import { accessoriesdata } from './accessories';
import { DataContext } from './dataContent';

const Firstads = ({props}) => {

  const { thedata } = useContext(DataContext);

  const adsdata = [
    {
      id: 1,
      title: 'Galaxy Tab S10 Series is here',
      text: 'Pre-order and save up to $1,000+. Get up to $800 instant trade-in credit and 50% off Book Cover Keyboard Slim. Plus, get 3Xs Samsung Rewards points.',
      time: '',
      button: 'Pre-order now',
      img: 'https://images.samsung.com/is/image/samsung/assets/us/home/09252024/HOME_TS10-Series_Main-KV_1440x640_pc.jpg?imwidth=2560',
      color: 'black'
    },
    {
      id: 2,
      title: 'Galaxy S24 FE is here',
      text: 'Pre-order to save up to $500+. Get up to $400 or at least $150 trade-in credit, and 50% off Galaxy Buds FE. Plus, 3x Samsung rewards for a limited time.',
      time: '',
      button: 'Pre-order now',
      img: 'https://images.samsung.com/is/image/samsung/assets/us/home/09252024/SDSAC-8150-S24FE-KV-HP-KV-DT-1440x640.jpg?imwidth=1366',
      color: 'black'
    },
    {
      id: 3,
      title: 'Elevate The Frame with a Deco TV Bezel',
      text: 'Personalize your space with The Frame and save up to $220 on a Deco TV bezel.',
      time: '',
      button: 'Buy now',
      img: 'https://images.samsung.com/is/image/samsung/assets/us/home/09272024/W38_KV-Deco_D_1440x640-1x.jpeg?imwidth=1366',
      color: 'white'
    },
    {
      id: 4,
      title: 'Top-rated by Consumer Reports',
      text: 'Get $1,300 off and more. Wash and dry in one machine without transferring loads.',
      time: '',
      button: 'Buy now',
      img: 'https://images.samsung.com/is/image/samsung/assets/us/home/09272024/Homepage-KV-Combo-DT.jpg?imwidth=1366',
      color: 'white'
    },
    {
      id: 5,
      title: "It's more than a fridge",
      text: "It's a Family Hub. Stream content, access recipes, and more. Save $800 on Bespoke Refrigerator with AI Family Hub+.",
      time: '',
      button: 'Buy now',
      img: 'https://images.samsung.com/is/image/samsung/assets/us/home/09152024/Homepage-KV-FamilyHub-DT.jpg?imwidth=1366',
      color: 'white'
    },
    {
      id: 6,
      title: 'Unify your sound with Q-Symphony',
      text: 'Save $1,528 when you pair an 85" Class QLED 4K QE1D TV with a Q600C Soundbar. With Q-Symphony, combine your speakers to operate as one.',
      time: '',
      button: 'Buy now',
      img: 'https://images.samsung.com/is/image/samsung/assets/us/home/09272024/W40_KV1_D_1440x640-1x.jpeg?imwidth=1366',
      color: 'black'
    }
  ];

  const [point,setPoint] = useState(0);
  const [title,settitle] = useState(adsdata[0].title);
  const [text,setText] = useState(adsdata[0].text);
  const [button,setButton] = useState(adsdata[0].button);
  const [linenum,setLinenum] = useState(`line${point+1}`);
  const [image,setImage] = useState(adsdata[0].img);
  const [color,setColor] = useState(adsdata[0].color);
  const [startagain, setStartagain] = useState(0);

  function pastclick() {
    if (point === 0) {
      setPoint(5)
    } else {
      setPoint(pre => pre -= 1)
    }
    settitle(adsdata[point].title);
    setText(adsdata[point.text]);
    setButton(adsdata[point].button);
    setImage(adsdata[point].img);
    setColor(adsdata[point].color);
  };

  function nextclick() {
    if (point === 5) {
      setPoint(0)
    }else {
      setPoint(pre => pre += 1)
    }
    settitle(adsdata[point].title);
    setText(adsdata[point.text]);
    setButton(adsdata[point].button);
    setImage(adsdata[point].img);
    setColor(adsdata[point].color);
  };

  useEffect(() => {
    settitle(adsdata[point].title);
    setText(adsdata[point].text);
    setButton(adsdata[point].button);
    setImage(adsdata[point].img);
    setImage(adsdata[point].img);
    setColor(adsdata[point].color);
  },[point]);

  /*const linefill = async () => {
    const line1 = await document.querySelector('.line1');
    line1.style.width = '100%';
  }*/

    useEffect(() => {
      const line1 = document.querySelector('.line1');
      const line2 = document.querySelector('.line2');
      const line3 = document.querySelector('.line3');
      const line4 = document.querySelector('.line4');
      const line5 = document.querySelector('.line5');
      const line6 = document.querySelector('.line6');
  
      // Helper function to reset lines
      const resetLines = () => {
        [line1, line2, line3, line4, line5, line6].forEach((line) => {
          line.style.width = '0';
          line.style.display = 'none';
        });
      };
  
      // Display all lines before animation
      [line1, line2, line3, line4, line5, line6].forEach((line) => {
        line.style.display = 'block';
      });
  
      // Animate based on `point` value
      if (point === 0) {
        line1.style.width = '100%';
        setTimeout(() => setPoint(1), 5000);
      } else if (point === 1) {
        line2.style.width = '100%';
        setTimeout(() => setPoint(2), 5000);
      } else if (point === 2) {
        line3.style.width = '100%';
        setTimeout(() => setPoint(3), 5000);
      } else if (point === 3) {
        line4.style.width = '100%';
        setTimeout(() => setPoint(4), 5000);
      } else if (point === 4) {
        line5.style.width = '100%';
        setTimeout(() => setPoint(5), 5000);
      } else if (point === 5) {
        line6.style.width = '100%';
        setTimeout(() => {
          setStartagain((prev) => prev + 1); // Trigger restart
          resetLines();
          setPoint(0); // Reset to start animation again
        }, 5000);
      }
    }, [point, startagain]);
  
  return (
    <div className='firstads' style={{
      backgroundImage: `url(${image})`,
      color: `${color}`
    }}>
       <button className='skipbtn pastbtn' onClick={pastclick}><i className="bi bi-chevron-left"></i></button>
       <button className='skipbtn nextbtn' onClick={nextclick}><i className="bi bi-chevron-right"></i></button>
      <div className='adsfirst' style={{
        color: `${color}`
      }}>
        <h1>{title}</h1>
        <p>{text}</p>
        <button style={{
          color: `${color=== 'white' ? 'black' : 'white'}`,
          backgroundColor: `${color=== 'white' ? 'white' : 'black'}`
          
        }}
        className='firstadsshopbtn'><a style={{color: `${color=== 'white' ? 'black' : 'white'}`}} href='https://www.samsung.com/us/smartphones/galaxy-z-fold6/buy/galaxy-z-fold6-256gb-unlocked-sm-f956uakaxaa/'>{button}</a></button>
      </div>
      <div className='alllines'>
        <div className='line'><span className='line1'></span></div>
        <div className='line'><span className='line2'></span></div>
        <div className='line'><span className='line3'></span></div>
        <div className='line'><span className='line4'></span></div>
        <div className='line'><span className='line5'></span></div>
        <div className='line'><span className='line6'></span></div>
      </div>
      
      <Menuhover/>
    </div>
  )
}

export default Firstads

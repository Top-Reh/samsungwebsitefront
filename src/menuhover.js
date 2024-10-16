import React,{useContext} from 'react';
import { DataContext } from './dataContent';
import { motion } from 'framer-motion';
import { shop } from './shopdata';
import { tvaudio } from './tv&audiodata';
import { appliances } from './appliancesdata';
import { computingmenu } from './computingmenu';
import { display } from './displaydata';
import { accessoriesdata } from './accessories';
import { exploreData } from './exploredata';
import { supportData } from './supportdata';
import { aidata } from './aidata';
import { smartthingdata } from './smartthingdata';

const Menuhover = () => {
  const { thedata,setthedata } = useContext(DataContext);
  const {hoveropen,setHoveropen} = useContext(DataContext);

  return (
    <div className='menuhover' 
    onMouseLeave={() => {setHoveropen(false);setthedata()}} 
    style={{display: hoveropen ? (thedata === aidata || thedata === smartthingdata) ? 'block' :'flex' : 'none',
    height: hoveropen ? 'auto' : '0',
    left: thedata === exploreData ? '10rem' : thedata === smartthingdata ? '45rem' : thedata === aidata ? '10rem' :'3rem',
    width: (thedata === aidata || thedata === smartthingdata) ? '200px' : '83%'
  }}
    >
      {thedata === aidata || thedata === smartthingdata ? (
        thedata && thedata.map((list, index) => (
          <p key={index} style={{display:'block'}} className='aidatadiv'>{list}</p>
        ))
      ) : (
        thedata && thedata.map((list, index) => (
          <div key={index} className='menuhoverdiv'>
            <h6>{list.category}</h6>
            <ul>
              {list.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default Menuhover;

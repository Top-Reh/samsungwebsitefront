import React, { createContext, useState } from 'react';
import { shop } from './shopdata';
import { tvaudio } from './tv&audiodata';
import { appliances } from './appliancesdata';
import { computingmenu } from './computingmenu';
import { display } from './displaydata';
import { accessoriesdata } from './accessories';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [thedata, setthedata] = useState();
    const [hoveropen,setHoveropen] = useState(false);

    return (
        <DataContext.Provider value={{ thedata, setthedata,hoveropen,setHoveropen }}>
            {children}
        </DataContext.Provider>
    );
};


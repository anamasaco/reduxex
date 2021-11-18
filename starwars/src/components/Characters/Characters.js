import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {size} from "lodash";
import apiCall from '../../services/api';
import { CharInfo } from './components/CharInfo';
import "../Characters/Charcaters.style.css";

export const Characters = () => {

    const backColor = "red";

    const page = useSelector((state) => state.page);
    const [list, setList] = useState([]);
    const [charToDisplay, setCharToDisplay] = useState(null);

    useEffect( () => {
      apiCall(page).then((info) => setList(info));
    }, [page]);
  
    const handleClick = (index) => {
        setCharToDisplay(index);
        console.log(index);
    }


    return (
        <div className="starwarsNames">
            <div>
                {size(list)
                    ? list.map((elem, index) => 
                    <div className="divGeneralText">
                        <div
                            id="nameStarWars"
                            className="starwarsDivNames"
                            onClick={() => handleClick(index)}
                            style={{backgroundColor: charToDisplay === index ? backColor : ''}}
                            value={elem.name}
                        >
                            {elem.name}
                        </div>
                        {Number.isInteger(charToDisplay) && index === charToDisplay ? (
                            <div className="modalDiv">
                                {Number.isInteger(charToDisplay) && index === charToDisplay && (
                                    <CharInfo info={elem} />
                                )}
                            </div>
                        ) : null}
                    </div>
                )
                : "loading"}
            </div>
        </div>
          
    );
}

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
// import { nextPage, previousPage } from "../store/starwarsReducer/starwarsReducer";
import apiCall from '../apiCall/apiCall';
import CharInfo from './CharInfo';
import {size} from "lodash";
import "./Charcaters.css";

export default function Characters (props) {

    const backColor = "red";


    const page = useSelector((state) => state.page);
    const [list, setList] = useState([]);
    const [charToDisplay, setCharToDisplay] = useState(null); 
    // const [hidden, setHidden] = useState(false);

    // vai mostrar os 10 nomes
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
            {/* <div className="btnChangePageDiv">
                <button className="btnChangePages btnPrevious" onClick={props.previousPage}>Previous</button>
                <button className="btnChangePages" onClick={props.nextPage}>Next</button>
            </div> */}
        </div>
          
    );
}

// const mapStateToProps = (state) => ({
//     page: state.page,
// })

// const mapDispatchToProps = (dispatch) => ({
//     nextPage: () => {
//         dispatch(nextPage());
//     },
//     previousPage: () => {
//         dispatch(previousPage());
//     }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Characters);
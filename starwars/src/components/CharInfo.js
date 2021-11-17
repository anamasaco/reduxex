import React from 'react';
// import { get } from 'lodash';

export default function CharInfo({info}){
    // const name = get(info, "name", "");
    return (
        <div>
            <div>Height: {info.height} cm</div>
            <div>Mass: {info.height} kg</div>
            <div>Birth Year: {info.birth_year}</div>
        </div>
    )
}
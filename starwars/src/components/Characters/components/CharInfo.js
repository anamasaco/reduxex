import React from 'react';

export const CharInfo = ({info}) =>{
    return (
        <div>
            <div>Height: {info.height} cm</div>
            <div>Mass: {info.height} kg</div>
            <div>Birth Year: {info.birth_year}</div>
        </div>
    )
}
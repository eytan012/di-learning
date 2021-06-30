import React from "react";
import '../App.css';
import './hero.css'


const HeroCard = ({hero,handleClick}) => {
    const {name, occupation, image, id} = hero;
    return (
        <div>
            <div className={'hero'}
                 style={{backgroundImage: `url(${image}`}}
                 onClick={()=>handleClick(id)}>
            </div>
            <div className={'hero-content'}>
                <p>{name}
                    <br/>
                    {occupation}</p>
            </div>
        </div>
    )

}

export default HeroCard;
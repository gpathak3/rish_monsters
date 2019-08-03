import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';
export const CardList = (props) => (
    //console.log(props);
    <div className='card-list'>
    { props.monsters.map(monsters => (<Card key={monsters.id} monster={monsters}/>))}
    </div>
);
import React from 'react';
import './Book.css';

function Book(props){
        return(
            <div className='book'>
                <img src={props.image} alt='Book Cover'/>
                <h2><a href={props.link} target='_blank' rel='noreferrer'>{props.title}</a></h2>
                <h3>{props.author}</h3>
                <p>{props.description}</p>
                <hr/>
            </div>
        )
}

export default Book;
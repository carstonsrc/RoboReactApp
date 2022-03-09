import React from 'react';

const Card = (props) => {
    //const {id, name, username, email} = props;
    return (
        
        <div className='bg-light-green dib br3 pa3 ma2 grow '>
        <img alt='robots' src={`https://robohash.org/${props.id}`}/>
            <div>
                <h2>{props.name}</h2>
                <p>Username: {props.username}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
}
export default Card;
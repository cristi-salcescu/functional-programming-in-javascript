import React from 'react';
import { connect } from 'react-redux';
import { Increment, Decrement } from './store';
 
function Counter({number, Increment, Decrement}){
    return(
        <div>
            <div>{number}</div>
            <button 
                type="button" 
                onClick={Decrement}>-</button>
            <button 
                type="button" 
                onClick={Increment}>+</button>
        </div>
    )
}

export default connect(
    state => state,
    {Increment, Decrement}
)(Counter);
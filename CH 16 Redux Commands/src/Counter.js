import React from 'react';
import { connect } from 'react-redux';
import { GenerateNumber } from './store';
 
function Counter({number, GenerateNumber}){
    return(
        <div>
            <div>{number}</div>
            <button 
                type="button" 
                onClick={GenerateNumber}>Generate</button>
        </div>
    )
}
    
export default connect(
    state => state,
    { GenerateNumber }
)(Counter)
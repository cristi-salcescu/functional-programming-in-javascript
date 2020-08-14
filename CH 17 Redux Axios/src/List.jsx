import React from 'react';
import { connect } from 'react-redux';
import { LoadTodos } from './store';

function List({todos, LoadTodos}){
    return(
        <div>
            <div>
                <button 
                type="button" 
                onClick={LoadTodos}>
                    Refresh
                </button>
            </div>
            <div>
                { todos.map(todo => 
                    <span>{todo.title}</span> )}
            </div>
        </div>
    )
}
    
export default connect(
    state => state,
    { LoadTodos }
)(List)
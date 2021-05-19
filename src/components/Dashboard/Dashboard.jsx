import React from 'react';
import {useEffect, useState, useRef, useReducer} from 'react';

export default function Dashboard() {

    const [value, setValue] = useReducer(reducer, {type: "init", value: 0});
    const [divText, setDivText] = useState("initiated");
    const divRef = useRef(null);

    // setValue(prevState => {
    //     return {...prevState, ...value};
    // });

    function reducer(state, action) {
        return {...state, ...{value: action.value, type: action.type} };
        // switch (action.type) {
        //   case 'increment':
            //return {...state, ...{value: state.value + 1, type: action.type} };
        //   case 'decrement':
        //     return {...state, ...{value: state.value  - 1, type: action.type} };
         
        // }
    }

    useEffect(()=>{
        setDivText(divText +"\n"+ value.type);
       return () => {
   
       }
    }, [value])

    const PlusHandler = ()=>{

        setValue({type:"increment", value: parseInt(value.value) +1});
    }

    const MinusHandler = ()=>{

        setValue({type:"decrement", value: parseInt(value.value) -1});
    }

    return (
        <div>        
            <h2>Dashboard </h2>
            <button onClick = {PlusHandler} >+</button>
            <input type='text' id='numeric' value = {value.value} onChange= {(e)=>{setValue({type: "input change",value: e.target.value})}} />
            <button onClick={MinusHandler}>-</button>
            <div id = 'logger' ref = {divRef}> {divText} </div>
        </div>

    );
    
}
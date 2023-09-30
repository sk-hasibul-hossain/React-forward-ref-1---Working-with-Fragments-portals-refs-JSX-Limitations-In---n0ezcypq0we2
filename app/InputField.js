'use client'
import React ,{useRef,useState,useEffect} from 'react';
const InputField=()=>{
    const ref = useRef()
    return(
    <div>
      <input id="input" type="text"  ref={ref}/>
    </div>
    )
    }
export default InputField;
import React from 'react'

export default function Data (props) { 
    return (
        // using fragment <></> to deal with delivering 2 P tags without using a div
        <> 
        <p><span>conditions:</span> {props.conditions}</p>
            <p><span>time:</span> {props.time}</p>
        </>
      );}
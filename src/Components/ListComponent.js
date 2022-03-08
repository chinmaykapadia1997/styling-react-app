import React from "react";
import './ListComponent.css';

const ListComponent =(props) =>{
    console.log(props);
    return(
        <div>
            {props.items}
        {/* {data.text} */}
        </div>
    );
}

export default ListComponent;
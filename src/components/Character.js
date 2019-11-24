import React from "react";


function Character (props) {
    return(
            <img 
                className="img-responsive m-3" 
                id={props.id}
                width="150" 
                height="150" 
                alt={props.name} 
                src={props.image}
                onClick={(e) => props.selected(e)}
            />
    );
}

export default Character;
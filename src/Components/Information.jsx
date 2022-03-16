import React  from 'react';


const Info = (props) =>{
    console.log(props)
    return (
         <h3>Welcome {props.name}</h3>
        )
}
export default Info;
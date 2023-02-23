import React from "react"
import "./Button.css"



function Button(props){
	return (
		<React.Fragment>
			<button style={{backgroundColor:props.color}} className="card-form-button">{props.children}</button>
		</React.Fragment>
	)
}


export default Button

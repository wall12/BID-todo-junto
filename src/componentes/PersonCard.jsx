import { Component } from "react";

class PersonCard extends Component {
    render() { 

        const {firstname, lastname, age, haircolor} = this.props;

        return (
            <>
            <h1>{lastname},{firstname}</h1>
            <p>age: {age}</p>
            <p>haircolor: {haircolor}</p>
            </>
        );
    }
}
 
export default PersonCard;
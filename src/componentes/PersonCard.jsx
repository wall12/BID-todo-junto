import { Component } from "react";

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            count: parseInt(this.props.age)
        };
    }
    render() { 

        const {firstname, lastname, haircolor} = this.props;

        return (
            <>
            <h1>{lastname},{firstname}</h1>
            <p>age: {this.state.count}</p>
            <p>haircolor: {haircolor}</p>
            <button onClick={()=> this.setState({count: this.state.count+1})}>Birthday Button for { firstname } { lastname }</button>
            </>
        );
    }
}
 
export default PersonCard;
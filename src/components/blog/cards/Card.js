import React, {Component} from "react";
import './Card.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            'heading': '',
            'info':''
        }
    }

    render(){
        return ( <div className="Card-Container">
            <img src='https://picsum.photos/seed/picsum/200/300'></img>
            <h2>Generating electricity from atmospheric charge</h2>
            <p>According to vedas we can generate electricity by an inverted copper tree </p>
        </div>)
    }
}

export default Card;
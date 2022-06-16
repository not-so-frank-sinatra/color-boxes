import React, { Component } from 'react';
import './box.css';
class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { color: this.getRandomColor() };
    }
    getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    handleClick = () => {
        let newCol;
        do {
            newCol = this.getRandomColor();
        } while (newCol === this.state.color);
        this.setState({ color: newCol });
    }
    render() {
        return (
            <div className='Box' style={{ backgroundColor: this.state.color }} onClick={this.handleClick} />
        )
    }
}

export default Box;
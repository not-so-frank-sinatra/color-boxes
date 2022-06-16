import React, { Component } from 'react';
import Box from './box';
import './boxcontainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 16
    };
    render() {
        const Boxes = Array.from({ length: this.props.numBoxes }).map(() => (
            <Box />
        ));
        return <div className='BoxContainer'>{Boxes}</div>;
    }
}

export default BoxContainer;
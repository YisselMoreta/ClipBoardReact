import React from 'react';
import './NotFound.scss';
import styled, {keyframes} from 'styled-components';
import {Animated} from "react-animated-css";




class NotFound extends React.Component {

    render() {
        return (
            <div className="notFoundDiv">
            
            
            <Animated className="notFoundText" animationIn="lightSpeedIn" animationOut="fadeOut" isVisible={true}>
            <h1>Upsss!</h1>
            <h1>Página no encontrada...</h1>
            </Animated>
            
            
            
            </div>
        )
    }
}




export default NotFound;
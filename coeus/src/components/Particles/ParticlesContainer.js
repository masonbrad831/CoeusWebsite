import React, { Component } from 'react'
import Particles from 'react-tsparticles'
import options from './ParticlesConfig'


export default class ParticlesContainer extends Component {
    render() {
        return (
          <>
          <Particles params={options}/>
          </>
        );
    }
}

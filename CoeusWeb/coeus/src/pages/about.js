import React from 'react';
import ParticlesContainer from '../components/Particles/ParticlesContainer';

const About = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}>
            <ParticlesContainer/>
            <h1>About</h1>
        </div>
    );
};

export default About;
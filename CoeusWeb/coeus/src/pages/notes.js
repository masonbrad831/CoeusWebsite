import React from 'react';
import ParticlesContainer from '../components/Particles/ParticlesContainer';

const Notes = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}>
            <ParticlesContainer/>
            <h1>Notes</h1>
        </div>
    );
};

export default Notes;
import React from 'react';
import ParticlesContainer from '../components/Particles/ParticlesContainer';

const Home = () => {
    return (
        <>
        <ParticlesContainer/>
        <div className="mainDiv"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                verticalAlign: 'middle',
                color: '#fff',
                marginTop: '300px',
                fontSize: '56px'
                
            }}>
            <h1>COEUS</h1>
        </div>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff'
            }}>
            <h3>(/koy·ows/)</h3>
        </div>
        </>
    );
};

export default Home;
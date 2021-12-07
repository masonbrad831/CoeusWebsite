import React from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import ParticlesContainer from '../components/Particles/ParticlesContainer';

const calendar = () => {
    return (
        <>
        <Calendar/>
        <ParticlesContainer />
        </>
    );
};

export default calendar;
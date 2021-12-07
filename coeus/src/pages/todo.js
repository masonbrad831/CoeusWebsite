import React from 'react';
import ParticlesContainer from '../components/Particles/ParticlesContainer';
import Table from '../components/Tables/Table';

const list= [
    {date: '12/2/2021', todo : 'Clean dinner'},
    {date: '12/3/2021', todo : 'wash dishes'},
    {date: '12/4/2021', todo : 'Clean'}
]

const colNames = ['Date','Todo']
const todo = () => {
    return (
        <>
        <ParticlesContainer/>
        <Table list={list} colNames={colNames}/>
        </>
    );
};

export default todo;
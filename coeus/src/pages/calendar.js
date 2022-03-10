import React, {useState, useEffect} from 'react';
import ParticlesContainer from '../components/Particles/ParticlesContainer';
import '../App.css'

const Calender = () => {
    const [data, setData] = useState([{}])

    function getCalendar() {
        fetch('/calendar').then(
            res => res.json()
        ).then (
            data => {
                setData(data)
                console.log(data)
            }
        )
    }

    useEffect(() => {
        getCalendar();
    }, [])
    

    function deleteRemider(reminder) {
        fetch('/calendar/'+ reminder);
        getCalendar();
    }

    return (
        <div>
            {/* <ParticlesContainer/> */}
            <h1 style={{fontWeight:"bold",
                        fontSize: "52px",
                        textAlign: "center",
                        color : "white",
                        marginTop: "50px",
                        textDecoration: "underline"
                        }}>Calendar</h1>
            <div id='table'>
                        <table style={{
                            color : "white",
                            marginTop : "15px"                           
                        }}>
                            <tr>
                                <th>Month</th>
                                <th>Day</th>
                                <th>Year</th>
                                <th>Reminder</th>
                            </tr>
                            {data.map((calendar) => (
                            <tr>
                                <td key={calendar.id}>{calendar.month}</td>
                                <td key={calendar.id}>{calendar.day}</td>
                                <td key={calendar.id}>{calendar.year}</td>
                                <td key={calendar._id}>{calendar.reminder}</td>
                                <td>
                                    <button id="tableButton"
                                        onClick={() => deleteRemider(calendar.reminder)}>Delete</button>
                                </td>
                            </tr>
                            ))}
                        </table>
            </div>
        </div>
    );
};

export default Calender;
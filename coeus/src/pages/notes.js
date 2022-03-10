import React, {useState, useEffect} from 'react';
import ParticlesContainer from '../components/Particles/ParticlesContainer';
import '../App.css'



function Notes() {

    const [data, setData] = useState([{}])
    function getNotes() {
        fetch('/notes').then(
            res => res.json()
        ).then (
            data => {
                setData(data)
                console.log(data)
            }
        )
    }
    useEffect(() => {
        getNotes();
    }, [])

    function deleteNote(note){
        fetch("/notes/" + note)
        getNotes();
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
                        }}>Notes</h1>
            <div id='table'>
                        <table style={{
                            color : "white",
                            marginTop : "15px"                           
                        }}>
                            <tr>
                                <th>Note Name</th>
                                <th>Note Content</th>
                            </tr>
                            {data.map((note) => (
                            <tr>
                                <td key={note.id}>{note.noteName}</td>
                                <td key={note.id}>{note.note}</td>
                                <td>
                                    <button id="tableButton"
                                        onClick={() => deleteNote(note.note)}>Delete</button>
                                </td>
                            </tr>
                            ))}
                        </table>
            </div>
        </div>
    );
};

export default Notes;
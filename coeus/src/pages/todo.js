import React, {useState, useEffect} from 'react';
import ParticlesContainer from '../components/Particles/ParticlesContainer';





const Todo = () => {

    const [data, setData] = useState([{}])
    
    function getTodo() {
        fetch('/todo').then(
            res => res.json()
        ).then (
            data => {
                setData(data)
                console.log(data)
            }
        )
    }
    useEffect(() => {
        getTodo();
    }, [])

    function deleteTodo(todo){
        fetch("/todo/" + todo);
        getTodo();
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
                        }}>To-Do</h1>
        <div id="table">
                    
                        <table style={{
                            color : "white"
                        }}>
                            <tr>
                                <th>Todo</th>
                            </tr>
                            {data.map((todo) => (
                            <tr>
                                
                                <td key={todo._id}>{todo.todo}</td>
                                <td>
                                    <button id="tableButton"
                                        onClick={() => deleteTodo(todo.todo)}>Delete</button>
                                </td>
                            </tr>
                            ))}
                        </table>
            </div>
        </div>
    );
};

export default Todo;
import React from 'react';
import ParticlesContainer from '../components/Particles/ParticlesContainer';

const About = () => {
    return (
        <>
        <div style={{textAlign: "center"}}>
        <h1 style={{fontWeight:"bold",
                        fontSize: "52px",
                        color : "white",
                        marginTop: "50px",
                        textDecoration: "underline"
                        }}>About</h1>
        <h3 style={{marginTop: "25px"}}> Coeus is an virtual assistant made for the desktop. There are many different commands to help you with you with your everyday work life.</h3>
            <h3>To order to download Coeus click this link <a href="https://github.com/masonbrad831/Capstone">here</a></h3>
            <br/>
            <h4>For my personal Github link click <a href="https://github.com/masonbrad831/">here</a></h4>
        </div>
        <div id='table'>
                        <table style={{
                            color : "white",
                            marginTop : "15px"                           
                        }}>
                            <tr>
                                <th>Command</th>
                                <th>User Example</th>
                            </tr>
                            <tr>
                                <td>Greetings</td>
                                <td>Say "Hello There"</td>
                            </tr>
                            <tr>
                                <td>Goodbye</td>
                                <td>Say "See you later"</td>
                            </tr>
                            <tr>
                                <td>Mood</td>
                                <td>Say "How are you doing today?"</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Say "What time is it?"</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>Say "What day is it today?"</td>
                            </tr>
                            <tr>
                                <td>Search Google</td>
                                <td>Say "I would like to search something"</td>
                            </tr>
                            <tr>
                                <td>Joke</td>
                                <td>Say "Tell me a joke!"</td>
                            </tr>
                            <tr>
                                <td>Insult</td>
                                <td>Say "Be mean to me!"</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>Say "I want to find a location"</td>
                            </tr>
                            <tr>
                                <td>Create notes</td>
                                <td>Say "I want to create a note"</td>
                            </tr>
                            <tr>
                                <td>Create To-Do</td>
                                <td>Say "I want to add to my To-Do list"</td>
                            </tr>
                            <tr>
                                <td>Show To-Do list</td>
                                <td>Say "What is on my To-Do list"</td>
                            </tr>
                            <tr>
                                <td>Calendar</td>
                                <td>Say "I want to add something to my calendar"</td>
                            </tr>
                            <tr>
                                <td>Open Chrome</td>
                                <td>Say "Open Google Chrome"</td>
                            </tr>
                            <tr>
                                <td>Close Chrome</td>
                                <td>Say "Close Google Chrome"</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Say "What is your name?"</td>
                            </tr>
                            <tr>
                                <td>Get Weather</td>
                                <td>Say "What is the weather?"</td>
                            </tr>
                            <tr>
                                <td>Copy Text</td>
                                <td>Say "Copy text!"</td>
                            </tr>
                            <tr>
                                <td>Paste Text</td>
                                <td>Say "Paste text!"</td>
                            </tr>
                            <tr>
                                <td>Open Youtube</td>
                                <td>Say "Open Youtube!"</td>
                            </tr>
                            <tr>
                                <td>Open Twitch</td>
                                <td>Say "Open Twitch!"</td>
                            </tr>
                            <tr>
                                <td>Open Canvas</td>
                                <td>Say "Show my grades"</td>
                            </tr>
                            <tr>
                                <td>Open this website</td>
                                <td>Say "Open Coeus"</td>
                            </tr>
                            <tr>
                                <td>Exit the app</td>
                                <td>Say "Exit the application"</td>
                            </tr>
                        </table>
            </div>
        </>
    );
};

export default About;
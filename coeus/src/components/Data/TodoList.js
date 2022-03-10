import axios from "axios";
import React from "react";


const api = axios.create({
    baseURL: "/todo"
})
export default class TodoList extends React.Component {
    
    state = {
        todos: []
    }

    constructor() {
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({todos: res.data})
        })
    }

    render() {
        return (
            <div>
                {this.state.todos.map(t => <h2 key={t._id}>{t.todo}</h2>)}
            </div>
        )
    }


}
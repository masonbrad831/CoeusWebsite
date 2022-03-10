import React from "react";

export const NotesList = ({ notes }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Content</th>
                </tr>
            </thead>

            <tbody>
                {notes.map(note => {
                    return (
                        <tr>
                            <td>{note}</td>
                            <td>{note}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};
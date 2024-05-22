import React, { useState, useEffect } from "react";

const Create = () => {
    const [input, setInput] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);
    }, []);

    const getNextId = (notesArray) => {
        return notesArray.length ? Math.max(...notesArray.map(note => note.id)) + 1 : 1;
    };

    const addNewNote = (value) => {
        value.preventDefault();
        if (input.trim() === '') return;
        
        const newNote = { id: getNextId(notes), text: input };
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        setInput("");
    };

    return (
        <div>
            <h1>Create New</h1>
            <form onSubmit={addNewNote}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Write a new note..."
                />
                <button type="submit">Done</button>
            </form>
        </div>
    );
};

export default Create;

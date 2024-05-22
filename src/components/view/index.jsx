import React,{useState, useEffect} from "react";

const Table = () => {

  const [notes, setNotes] = useState([]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);
      }, []);

      const deleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Update localStorage
      };
    return(
        <div>
            <h1>Notes List</h1>
            <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {notes.map(note => (
            <tr key={note.id}>
              <td>{note.id}</td>
              <td>{note.text}</td>
              <td>
                <button onClick={() => deleteNote(note.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    )
}

export default Table;
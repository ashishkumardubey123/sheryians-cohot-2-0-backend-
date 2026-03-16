import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchNotes = async () => {
    try {
      const res = await axios.get("https://backend-note-app-elhm.onrender.com/api/notes");
      setNotes(res.data.notes);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;

    console.log(title.value, description.value);

    axios
      .post("https://backend-note-app-elhm.onrender.com/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);

        fetchNotes();
      });
  }

  function handleDelete(id) {
    axios.delete("https://backend-note-app-elhm.onrender.com/api/notes/"+id).then((res) => {
      console.log(res.data, id);
      fetchNotes();
    });
  }

  return (
    <>
      <form className="note-create-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Create New Note</h2>
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            cols="30"
            rows="8"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Create Note</button>
      </form>

      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note" key={note._id || note.title}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDelete(note._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

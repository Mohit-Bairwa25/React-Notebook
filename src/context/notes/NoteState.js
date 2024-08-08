import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const host ="http://localhost:5000"
    const notesInital =[]
    const [notes, setNotes] = useState(notesInital)

    //Get All Notes
    const getNotes = async ()=>{
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method : 'GET',
            headers: {
                  'Content-Type':'application/json',
                  "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjc4MzUzMWJkNjI3MDE5NmFmYmMwIn0sImlhdCI6MTcyMjU3NzIwNX0._5LQsED8LmPXnlVAwYz79FkrZP39Mw8GbNBPjgBg0gE"
            },
        });

        const json = await response.json()
        console.log(json)
        setNotes(json)
    }

    //Add a Note
    const addNote = async (title, description, tag)=>{
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method : 'POST',
            headers: {
              'Content-Type':'application/json',
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjc4MzUzMWJkNjI3MDE5NmFmYmMwIn0sImlhdCI6MTcyMjU3NzIwNX0._5LQsED8LmPXnlVAwYz79FkrZP39Mw8GbNBPjgBg0gE"
            },
            body: JSON.stringify({title, description, tag})
        });

        const json = await response.json();
        console.log("Adding a New Note")
        const note ={
            "_id": "66acb621a6bb8bd25a64b15",
            "title": title,
            "description": description,
            "tag": tag,
            "user": "66ab783531bd6270196afbc0",
            "date": "2024-08-02T10:34:09.684Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote = (id)=>{
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{ return note._id!==id})
        setNotes(newNotes)
    }

    //Edit a Note
    const editNote = async (id, title, description, tag)=>{
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method : 'POST',
            headers: {
              'Content-Type':'application/json',
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjc4MzUzMWJkNjI3MDE5NmFmYmMwIn0sImlhdCI6MTcyMjU3NzIwNX0._5LQsED8LmPXnlVAwYz79FkrZP39Mw8GbNBPjgBg0gE"
            },
            body: JSON.stringify({title, description, tag})
        });
        const json =  await response.json();

        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
            
        }
        
    };

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInital =[
        {
          "_id": "6ac9ca16f317646c14827110",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "user": "66ab783531bd6270196afbc0",
          "date": "2024-08-02T08:45:21.107Z",
          "__v": 0
        },
        {
          "_id": "66cb621ad6bb8b6d25a64b11",
          "title": "New Note",
          "description": "Please Acces the Playlist",
          "tag": "personal",
          "user": "66ab783531bd6270196afbc0",
          "date": "2024-08-02T10:34:09.684Z",
          "__v": 0
        },
        {
            "_id": "66a9ca16f317646c14827112",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "user": "66ab783531bd6270196afbc0",
            "date": "2024-08-02T08:45:21.107Z",
            "__v": 0
        },
        {
            "_id": "66acb21ad6bb8b6d25a64b13",
            "title": "New Note",
            "description": "Please Acces the Playlist",
            "tag": "personal",
            "user": "66ab783531bd6270196afbc0",
            "date": "2024-08-02T10:34:09.684Z",
            "__v": 0
        },
        {
            "_id": "66ac9ca6f317646c14827114",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "user": "66ab783531bd6270196afbc0",
            "date": "2024-08-02T08:45:21.107Z",
            "__v": 0
        },
        {
            "_id": "66acb621a6bb8b6d25a64b15",
            "title": "New Note",
            "description": "Please Acces the Playlist",
            "tag": "personal",
            "user": "66ab783531bd6270196afbc0",
            "date": "2024-08-02T10:34:09.684Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInital)

    //Add a Note
    const addNote = (title, description, tag)=>{
        // To Do : API Call
        console.log("Adding a New Note")
        const note ={
            "_id": "66acb621a6bb8b6d25a64b15",
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
    const deleteNote = ()=>{
        
    }

    //Edit a Note
    const editNote = ()=>{
        
    }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;
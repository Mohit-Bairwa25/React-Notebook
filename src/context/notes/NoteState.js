import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInital =[
        {
          "_id": "66ac9ca16f317646c1482711",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "user": "66ab783531bd6270196afbc0",
          "date": "2024-08-02T08:45:21.107Z",
          "__v": 0
        },
        {
          "_id": "66acb621ad6bb8b6d25a64b1",
          "title": "New Note",
          "description": "Please Acces the Playlist",
          "tag": "personal",
          "user": "66ab783531bd6270196afbc0",
          "date": "2024-08-02T10:34:09.684Z",
          "__v": 0
        },
        {
            "_id": "66ac9ca16f317646c1482711",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "user": "66ab783531bd6270196afbc0",
            "date": "2024-08-02T08:45:21.107Z",
            "__v": 0
        },
        {
            "_id": "66acb621ad6bb8b6d25a64b1",
            "title": "New Note",
            "description": "Please Acces the Playlist",
            "tag": "personal",
            "user": "66ab783531bd6270196afbc0",
            "date": "2024-08-02T10:34:09.684Z",
            "__v": 0
        },
        {
            "_id": "66ac9ca16f317646c1482711",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "user": "66ab783531bd6270196afbc0",
            "date": "2024-08-02T08:45:21.107Z",
            "__v": 0
        },
        {
            "_id": "66acb621ad6bb8b6d25a64b1",
            "title": "New Note",
            "description": "Please Acces the Playlist",
            "tag": "personal",
            "user": "66ab783531bd6270196afbc0",
            "date": "2024-08-02T10:34:09.684Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInital)

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;
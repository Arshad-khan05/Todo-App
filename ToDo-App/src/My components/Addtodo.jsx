import React from 'react'
import { useState } from 'react';
const Addtodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or description cannot be empty !!");
        }
        else {
            props.addtodo(title, desc);
        }
        settitle("");
        setdesc("");
    }
    return (
        <div className='container'>
            <h3><b>Add todo</b></h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => settitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setdesc(e.target.value)} className="form-control" id="exampleInputPassword1"></input>
                </div>
                <button type="button" className="btn btn-sm btn-success" onClick={submit}>Success</button>
            </form>
        </div>
    )
}

export default Addtodo

import React, {useState} from "react";

export default function Form (props) {

    const [name, setName] = useState("");

    function handleChange (event) {
        setName(event.target.value);
    }
    
    function handleSubmit (event) {
        
        event.preventDefault();

        if (name.length > 0) {
            setName("");
            props.addTask(name);
        } else {
            alert("Scrivi qualcosa!");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
                Cosa vuoi fare?
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Aggiungi
          </button>
        </form>
    );
};
import React, { useState, useEffect } from "react";
import { FormValidation } from "./form-validation";


export function FormControl() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



    useEffect(() => {
        FormValidation();
    }, [name, email, message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && message) {
            alert(`Merci ${name} pour votre message`);
            setName("");
            setEmail("");
            setMessage("");
        } else {
            alert("Veuillez remplir tous les champs");
        }
    };


    return (
        <div className="contact">
            <h1>Contact</h1>
            <div>
                <form className="form1" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <button type="submit">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    );



}

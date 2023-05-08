import React from "react";
export default function Contact() {

    return (

        <div className="contact">
            <h1>Contact</h1>
            <div>
                <form className="form1">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" />
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    );
}
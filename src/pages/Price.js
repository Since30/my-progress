import React from 'react';
export default function Price() {

    return (

        <div className="price">
            <h1>Tarifs et Préstations</h1>
            <div>
                <table>
                    <thead> <tr> <th>Préstations</th> <th>Tarifs</th> </tr> </thead>
                    <tbody>
                        <tr> <td>Shooting photo</td> <td>50€</td> </tr>
                        <tr> <td>Shooting photo + 1 tirage 20x30</td> <td>70€</td> </tr>
                        <tr> <td>Shooting photo + 1 tirage 20x30 + 1 tirage 13x18</td> <td>80€</td> </tr>
                        <tr> <td>Shooting photo + 1 tirage 20x30 + 1 tirage 13x18 + 1 tirage 10x15</td> <td>90€</td> </tr>
                        <tr> <td>Shooting photo + 1 tirage 20x30 + 1 tirage 13x18 + 1 tirage 10x15 + 1 tirage 5x7</td> <td>100€</td> </tr>
                        <tr> <td>Shooting photo + 1 tirage 20x30 + 1 tirage 13x18 + 1 tirage 10x15 + 1 tirage 5x7 + 1 tirage 4x6</td> <td>110€</td> </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

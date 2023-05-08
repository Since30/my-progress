import React from "react";
export default function Gallery() {

  return (

    <div className="card-title">
      <h1>Gallerie</h1>
      <p>Voici une serie de shoot photos</p>

      <div className="card-content">
        <div className="card">
          <h2>Grosesse</h2>
          <div className="card-image">
            <img src="https://picsum.photos/id/1/200/300" alt="img" />
          </div>
          <div className="card-image">
            <img src="https://picsum.photos/id/2/200/300" alt="img" />
          </div>
          <div className="card-image">
            <img src="https://picsum.photos/id/3/200/300" alt="img" />
          </div>
          <div className="card-image">
            <img src="https://picsum.photos/id/4/200/300" alt="img" />
          </div>

          <h2>Batèmes</h2>
          <div className="card-image">
            <img src="https://picsum.photos/id/5/200/300" alt="img" />
          </div>
          <div className="card-image">
            <img src="https://picsum.photos/id/6/200/300" alt="img" />
          </div>
          <div className="card-image">
            <img src="https://picsum.photos/id/7/200/300" alt="img" />
          </div>
          <div className="card-image">
            <img src="https://picsum.photos/id/8/200/300" alt="img" />
          </div>
          <h2>Bébé</h2>
          <div className="card-image">
            <img src="https://picsum.photos/id/9/200/300" alt="img" />
          </div>
          <div className="card-image">
            <img src="https://picsum.photos/id/10/200/300" alt="img" />
          </div>
          <div className="card-image">
            <img src="https://picsum.photos/id/11/200/300" alt="img" />
          </div>
          <div className="card-image">
            <img src="https://picsum.photos/id/12/200/300" alt="img" />
          </div>

        </div>
      </div>
    </div>
  );
}


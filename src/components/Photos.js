import React from "react";
import "../styles/Photos.css";

export default function Photos(props) {
  if (props.photos && props.photos.length === 9) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <img
                  src={photo.src.landscape}
                  alt=""
                  className="img-fluid small-image"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

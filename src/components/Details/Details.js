import React from "react";
import "./Details.css";
import { useSelector } from "react-redux";
import { roundDistance, reformatDate } from "../../util";

const Details = () => {
   const bathroom = useSelector((state) => state.result.selectedBathroom);
   console.log("br", bathroom)
  return (
    <section className="Details-page">
      <section className="top">
        <section className="background details">
          <p>{`${bathroom.name}`}</p>
          <p className="distance">{roundDistance(bathroom)}</p>
          <div className="icon-container">
            <img
              alt="Wheelchair"
              className="icon"
              src="/assets/wheelchair.png"
            ></img>
            <img
              alt="Unisex"
              className="icon"
              src="/assets/transgender.png"
            ></img>
            <img
              alt="Changing Table"
              className="icon"
              src="/assets/baby.png"
            ></img>
          </div>
        </section>
        <section className="background details-map">
          This is a map... trust me
          <button className="back-to-main-button">X</button>
        </section>
      </section>
      <summary className="background summary">
        <div className="address">
          <p>{`${bathroom.street}`}</p>
          <p>{`${bathroom.city}, ${bathroom.state}`}</p>
        </div>
        <p className="directions">{`${bathroom.directions}`}</p>
      </summary>
      <section className="background conclusion">
        <p className="comment">{`${bathroom.comment}`}</p>
        <div className="votes">
          <p>{`Upvotes: ${bathroom.upvote}`}</p>
          <p>{`Downvotes: ${bathroom.downvote}`}</p>
          <p>{`Last Updated: ${reformatDate(bathroom)}`}</p>
        </div>
      </section>
    </section>
  );
};

export default Details;

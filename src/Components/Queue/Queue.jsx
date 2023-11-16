import React, { useContext } from "react";
import "./Queue.css";
import { MyContext } from "../../Data";

const Queue = () => {
  const dataa = useContext(MyContext);

  return (
    <div className="queue_container">
      <h3>Music Queue</h3>
      <ul className="queue" style={{marginBottom: '20px'}}>
        <li></li>
        <li>Title</li>
        <li>Artist</li>
        <li>Album</li>
        <li>Duration</li>
      </ul>
      {dataa.map((item, index) => {
        return (
          <div key={index} className="queue_box">
            <ul className="queue">
              <li>{index + 1}</li>
              <li>{item.title}</li>
              <li>{item.artist}</li>
              <li>{item.Album}</li>
              <li>{item.duration}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Queue;

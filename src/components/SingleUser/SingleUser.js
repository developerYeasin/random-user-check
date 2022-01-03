import React from "react";
import './SingleUser.css';

const SingleUser = (props) => {
//   console.log(props.user);
  const name =props.user.name;
  const email = props.user.email;
  const phone = props.user.phone;
  const cell = props.user.cell;
  const address = props.user.location;
  const image = props.user.picture;
  return (
    <div className="user-card">
      <div className="img">
        <img src={image.medium} alt="" />
      </div>
      <div className="user-details">
        <h2 className="user-name">{name.title + " " + name.first}</h2>
        <p className="user-email">
          Email: <a href="emailTo:yeain@gmail.com">{email}</a>
        </p>
        <p className="user-number">
          <span>
            Phone:  <a href="tell:+8801834886669">{phone}</a>
          </span>
          <span>
            Cell:  <a href="tell:+8801834886669">{cell}</a>
          </span>
        </p>
        <p className="address">
            <span>Address:</span>
            {address.city + ", " + address.country}</p>
        <div className="user-btn">
        <a className="check-btn" href="#">
          Check User
        </a>
        <a className="message-btn" href="#">
          Message
        </a>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;

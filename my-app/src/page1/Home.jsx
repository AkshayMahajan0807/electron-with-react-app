import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import "../ChatRoom/tailwind.css";
import { useAppContext } from "../Context/appContext";
const Home = () => {
  const [roomName, setRoomName] = React.useState("");
  const [username, setUsername] = useState("");
  const { onLogin, onLogOut, user } = useAppContext();

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      {/* <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      /> */}

      {user === null || !user?.username ? (
        <div className="flex w-full">
          <div className="md:w-4/12">
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div>
              <button
                onClick={() => onLogin(username)}
                className="connect-button"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap">
            <div>Welcome {`${user?.first_name} ${user?.last_name} `}!</div>
          </div>
          <div className="flex flex-wrap">
            <div>
              <div className="dr-title">Dr. Harshal Chaudhari</div>
              <div>
                <Link to={`/Harshal-Chaudhari`} className="connect-button">
                  Connect
                </Link>
              </div>
            </div>
            <div>
              <div className="dr-title">Dr. Sanddep Rane</div>
              <div>
                <Link to={`/Sanddep-Rane`} className="connect-button">
                  Connect
                </Link>
              </div>
            </div>
            <div>
              <div className="dr-title">Dr. Prashant Deshmukh</div>
              <div>
                <Link to={`/Prashant-Deshmukh`} className="connect-button">
                  Connect
                </Link>
              </div>
            </div>
            <div>
              <div className="dr-title">Dr. Pooja Yelanar</div>
              <div>
                <Link to={`/Pooja-Yelanar`} className="connect-button">
                  Connect
                </Link>
              </div>
            </div>
            <div>
              <div className="dr-title">Dr. Seema Mahajan</div>
              <div>
                <Link to={`/Seema-Mahajan`} className="connect-button">
                  Connect
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

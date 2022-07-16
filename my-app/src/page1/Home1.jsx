import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "../ChatRoom/tailwind.css";
//import { useAppContext } from "../Context/appContext";
const Home = function () {
  // const [roomName, setRoomName] = React.useState("");
  //const [username, setUsername] = useState("");
  // const { onLogin, onLogOut, user } = useAppContext();
  const user = { username: "something" };
  ("something");
  return user === null || !user?.username ? (
    <div className="home-container">
      (
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
      )
    </div>
  ) : (
    <>
      <div className="flex flex-wrap">
        <div>Welcome {`${user?.first_name} ${user?.last_name} `}!</div>
      </div>
      <div className="flex flex-wrap">
        <div >
          <div className="dr-title">Dr. Harshal Chaudhari</div>
          <div>
            <a className="connect-button" href="#">
              Connect
            </a>
          </div>
        </div>
        <div>
          <div className="dr-title">Dr. Sanddep Rane</div>
          <div>
            <a className="connect-button" href="#">
              Connect
            </a>
          </div>
        </div>
        <div>
          <div className="dr-title">Dr. Prashant Deshmukh</div>
          <div>
            <a className="connect-button" href="#">
              Connect
            </a>
          </div>
        </div>
        <div>
          <div className="dr-title">Dr. Pooja Yelanar</div>
          <div>
            <a className="connect-button" href="#">
              Connect
            </a>
          </div>
        </div>
        <div>
          <div className="dr-title">Dr. Seema Mahajan</div>
          <div>
            <a className="connect-button" href="#">
              Connect
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

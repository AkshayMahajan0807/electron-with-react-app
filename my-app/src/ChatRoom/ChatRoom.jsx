import React, {useState} from "react";

import "./ChatRoom.css";
import "./tailwind.css";
import useChat from "../useChat";

const ChatRoom = (props) => {
  const { roomId } = props.match.params;
  const { messages, sendMessage, prescription, sendPrescription } =
    useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");
  const [newPrescription, setNewPrescription] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };
  const handleNewPrescriptionChange = (event) => {
    setNewPrescription(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  const handleSendPrescription = () => {
    sendPrescription(newPrescription);
    setNewPrescription("");
  };
  const [loading, setLoading] = useState(true);
  const containerStyle = {
    width: "800px",
    height: "400px",
  };

  const jitsiContainerStyle = {
    display: "block",
    width: "100%",
    height: "100%",
  };

  function startConference() {
    try {
      const domain = "meet.jit.si";
      const options = {
        roomName: roomId,
        height: 400,
        parentNode: document.getElementById("jitsi-container"),
        interfaceConfigOverwrite: {
          filmStripOnly: false,
          SHOW_JITSI_WATERMARK: false,
        },
        configOverwrite: {
          disableSimulcast: false,
        },
      };
      window.JitsiMeetExternalAPI = window.JitsiMeetExternalAPI || window.exports.JitsiMeetExternalAPI;
      const api = new window.JitsiMeetExternalAPI (domain, options);
      api.addEventListener("videoConferenceJoined", () => {
        console.log("Local User Joined");
        setLoading(false);
        api.executeCommand("displayName", "MyName");
      });
    } catch (error) {
      console.error("Failed to load Jitsi API", error);
    }
  }

  function startCall (){
    if (window.JitsiMeetExternalAPI) startConference();
    else alert("Jitsi Meet API script not loaded");
  }

  return (
    <div className="chat-room-container">
      <h1 className="room-name">
        Room: {roomId}
        <button className="send-message-button ml-3" onClick={startCall}>Join Video Call</button>
      </h1>
      <div className="flex">
        <div className="w-6/12">
          <div className="messages-container">
            <ol className="messages-list">
              {messages.map((message, i) => (
                <li
                  key={i}
                  className={`message-item ${
                    message.ownedByCurrentUser
                      ? "my-message"
                      : "received-message"
                  }`}
                >
                  {message.body}
                </li>
              ))}
            </ol>
          </div>
          <textarea
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Write message..."
            className="new-message-input-field w-full"
          />

          <button onClick={handleSendMessage} className="send-message-button">
            Send
          </button>
        </div>
        <div className="w-6/12">
        <div style={containerStyle}>
          <div id="jitsi-container" style={jitsiContainerStyle} />
        </div>


          {prescription.map((p, i) => (
            <>{p.body}</>
          ))}

          <textarea
            value={newPrescription}
            onChange={handleNewPrescriptionChange}
            placeholder="Write Prescription..."
            className="new-message-input-field w-full"
          />

          <button
            onClick={handleSendPrescription}
            className="send-message-button"
          >
            Send Prescription
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;

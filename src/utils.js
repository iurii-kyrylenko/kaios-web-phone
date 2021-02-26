import React from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case "LISTEN":
      return {
        ...state,
        me: action.data,
        status: "Listening",
        message: ""
      };
    case "CONNECT":
      return {
        ...state,
        contact: action.data,
        status: "Conversation",
        message: ""
      };
    case "REGISTER":
      return {
        ...state,
        me: "",
        contact: "",
        status: "Registration"
      };
    case "MESSAGE":
      return {
        ...state,
        message: action.data
      }
    default:
      return;
  }
};

export const getSoftKeyProps = state => {
  const status = state.status;

  const map = {
    Registration: { left: null, center: "JOIN", right: "Clear" },
    Listening: { left: "Leave", center: "CALL", right: "Clear" },
    Conversation: { left: null, center: "LEAVE", right: null }
  };
  return map[status];
};

export const getHeaderTitle = state => state.status;

export const getAudio = () => {
  const audio = new Audio();
  audio.autoplay = true;
  return audio;
}

import React from "react";

export const Statuses = Object.freeze({
  RGS: Symbol("rgs"),
  RGS_W: Symbol("rgsw"),
  LST: Symbol("lst"),
  CLL: Symbol("cll"),
  CLL_W: Symbol("cllw"),
  ANS: Symbol("ans"),
  ANS_W: Symbol("answ"),
  CNV: Symbol("cnv")
});

const statusMap = {
  [Statuses.RGS]: {
    name: "REGISTRATION",
    keys: { center: "JOIN", right: "Clear" },
    info: "Please, input your code."
  },
  [Statuses.RGS_W]: {
    name: "REGISTRATION",
    keys: { center: "LEAVE" },
    info: "Wait, please."
  },
  [Statuses.LST]: {
    name: "LISTENING",
    keys: { left: "Leave", center: "CALL" },
    info: "Wait for call or call to your contact."
  },
  [Statuses.CLL]: {
    name: "CALLING",
    keys: { left: "Leave", center: "CALL", right: "Clear" },
    info: "Please, input contact code."
  },
  [Statuses.CLL_W]: {
    name: "CALLING",
    keys: { center: "LEAVE" },
    info: "Wait, please."
  },
  [Statuses.ANS]: {
    name: "ANSWERING",
    keys: { left: "Decline", center: "ANSWER" },
    info(id) { return `Call from "${id}"`; }
  },
  [Statuses.ANS_W]: {
    name: "ANSWERING",
    keys: { center: "LEAVE" },
    info: "Wait, please."
  },
  [Statuses.CNV]: {
    name: "CONVERSATION",
    keys: { center: "LEAVE" },
    info: "Talk with contact."
  }
}

export const getSoftKeyProps = status => statusMap[status].keys;
export const getHeaderTitle = status => statusMap[status].name;

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return;
  }
};

export const getAudio = () => {
  const audio = new Audio();
  audio.autoplay = true;
  return audio;
}

export const Statuses = Object.freeze({
  RGS: Symbol("rgs"),
  RGS_W: Symbol("rgsw"),
  LST: Symbol("lst"),
  CALL: Symbol("call"),
  CALL_W: Symbol("callw"),
  ANS: Symbol("ans"),
  ANS_W: Symbol("answ"),
  CNV: Symbol("cnv")
});

export const Actions = Object.freeze({
  JOIN: Symbol("join"),
  LEAVE: Symbol("leave"),
  LISTEN: Symbol("listen")
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
  [Statuses.CALL]: {
    name: "CALLING",
    keys: { left: "Leave", center: "CALL", right: "Clear" },
    info: "Please, input contact code."
  },
  [Statuses.CALL_W]: {
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
export const getInfo = status => statusMap[status].info;

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.JOIN:
      return {
        ...state,
        me: action.data,
        status: Statuses.RGS_W,
        message: ""
      };
    case Actions.LEAVE:
      return {
        ...state,
        status: Statuses.RGS
      };
    case Actions.LISTEN:
      return {
        ...state,
        status: Statuses.LST
      };
    default:
      return;
  }
};

export const getAudio = () => {
  const audio = new Audio();
  audio.autoplay = true;
  return audio;
}

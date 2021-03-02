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
  LISTEN: Symbol("listen"),
  CALL: Symbol("call"),
  DO_CALL: Symbol("docall"),
  IN_CALL: Symbol("incall"),
  ANSWER: Symbol("answer"),
  CONV: Symbol("conv"),
  ERR: Symbol("err")
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
    info: "Answer or decline the call."
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

export const isContactValid = (contact, me) => {
    // Cannot call to myself & The same validation as in peerjs
    return (contact !== me) &&
    /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(contact);
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
        message: "",
        status: Statuses.RGS_W
      };
    case Actions.LEAVE:
      return {
        ...state,
        message: "",
        status: Statuses.RGS
      };
    case Actions.LISTEN:
      return {
        ...state,
        status: Statuses.LST
      };
    case Actions.CALL:
      return {
        ...state,
        status: Statuses.CALL
      };
    case Actions.DO_CALL:
      const contact = action.data;
      return {
        ...state,
        contact,
        message: "",
        status: Statuses.CALL_W
      };
    case Actions.IN_CALL:
      return {
        ...state,
        contact: action.data,
        status: Statuses.ANS
      };
    case Actions.ANSWER:
      return {
        ...state,
        status: Statuses.ANS_W
      };
    case Actions.CONV:
      return {
        ...state,
        status: Statuses.CNV
      };
    case Actions.ERR:
      return {
        ...state,
        message: action.data,
        status: ([Statuses.CALL, Statuses.CALL_W].includes(state.status))
          ? Statuses.CALL
          : Statuses.RGS
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

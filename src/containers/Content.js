import Reg from "../containers/Reg/Reg";
import RegWait from "../containers/RegWait/RegWait";
import Listen from "../containers/Listen/Listen";
import Call from "../containers/Call/Call";
import CallWait from "../containers/CallWait/CallWait";
import Answer from "../containers/Answer/Answer";
import AnswerWait from "../containers/AnswerWait/AnswerWait";
import Conversation from "../containers/Conversation/Conversation";
import { Statuses, getInfo } from "../utils";

const Content = props => {
  const { state, handlers } = props;
  const info = getInfo(state.status);

  switch (state.status) {
    case Statuses.RGS:
      return (
        <Reg
          me={state.me}
          info={info}
          message={state.message}
          onJoin={handlers.onJoin}
        />
      );
    case Statuses.RGS_W:
      return (
        <RegWait
          message={info}
          onLeave={handlers.onLeave}
        />
      );
    case Statuses.LST:
      return (
        <Listen
          me={state.me}
          info={info}
          onCall={handlers.onCall}
          onLeave={handlers.onLeave}
        />
      );
    case Statuses.CALL:
      return (
        <Call
          me={state.me}
          contact={state.contact}
          info={info}
          message={state.message}
          onDoCall={handlers.onDoCall}
          onLeave={handlers.onLeave}
        />
      );
    case Statuses.CALL_W:
      return (
        <CallWait
          me={state.me}
          contact={state.contact}
          info={info}
          onLeave={handlers.onLeave}
        />
      );
    case Statuses.ANS:
      return (
        <Answer
          me={state.me}
          contact={state.contact}
          info={info}
          onAnswer={handlers.onAnswer}
          onDecline={handlers.onDecline}
        />
      );
    case Statuses.ANS_W:
      return (
        <AnswerWait
          me={state.me}
          contact={state.contact}
          info={info}
          onLeave={handlers.onLeave}
        />
      );
    case Statuses.CNV:
      return (
        <Conversation
          me={state.me}
          contact={state.contact}
          info={info}
          onLeave={handlers.onLeave}
        />
      );
    default:
      return null;
  }
}

export default Content;

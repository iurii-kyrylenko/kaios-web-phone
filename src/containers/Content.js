import Reg from "../containers/Reg/Reg";
import RegWait from "../containers/RegWait/RegWait";
import Listen from "../containers/Listen/Listen";
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
          message={state.me}
          info={info}
          onCall={handlers.onCall}
          onLeave={handlers.onLeave}
        />
      );
    default:
      return null;
  }
}

export default Content;

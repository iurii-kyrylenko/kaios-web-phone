import Reg from "../containers/Reg/Reg";
import RegWait from "../containers/RegWait/RegWait";
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
    default:
      return null;
  }
}

export default Content;

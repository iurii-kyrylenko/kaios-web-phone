import Info from "../../components/Info/Info";
import EmptyForm from "../../components/EmptyForm/EmptyForm";

const Conversation = props => {
  const { info, me, contact, onLeave } = props;

  return (
    <div>
      <EmptyForm onSubmit={onLeave} />
      <Info text={`Me: ${me}`} isMessage={true} />
      <Info text={`Contact: ${contact}`} isMessage={true} />
      <Info text={info} />
    </div>
  );
}

export default Conversation;

import Info from "../../components/Info/Info";
import EmptyForm from "../../components/EmptyForm/EmptyForm";

const Listen = props => {
  const { info, message, onCall, onLeave } = props;

  return (
    <div>
      <EmptyForm onSubmit={onCall} onSoftLeft={onLeave} />
      <Info text={`Me: ${message}`} isMessage={true} />
      <Info text={info} />
    </div>
  );
}

export default Listen;

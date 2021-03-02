import Info from "../../components/Info/Info";
import EmptyForm from "../../components/EmptyForm/EmptyForm";

const Listen = props => {
  const { info, me, onCall, onLeave } = props;

  return (
    <div>
      <EmptyForm onSubmit={onCall} onSoftLeft={onLeave} />
      <Info text={`Me: ${me}`} isMessage={true} />
      <Info text={info} />
    </div>
  );
}

export default Listen;

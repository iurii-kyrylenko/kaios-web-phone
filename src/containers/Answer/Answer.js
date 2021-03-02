import Info from "../../components/Info/Info";
import EmptyForm from "../../components/EmptyForm/EmptyForm";

const Answer = props => {
  const { info, me, contact, onAnswer, onDecline } = props;

  return (
    <div>
      <EmptyForm onSubmit={onAnswer} onSoftLeft={onDecline} />
      <Info text={`Me: ${me}`} isMessage={true} />
      <Info text={`Call from: ${contact}`} isMessage={true} />
      <Info text={info} />
    </div>
  );
}

export default Answer;

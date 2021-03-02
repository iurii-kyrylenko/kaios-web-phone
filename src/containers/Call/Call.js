import Info from "../../components/Info/Info";
import InputForm from "../../components/InputForm/InputForm";

const Call = props => {
  const { me, contact, info, message, onDoCall, onLeave } = props;

  return (
    <div>
      <Info text={`Me: ${me}`} isMessage={true} />
      <InputForm
        label="Contact"
        code={contact}
        onSubmit={onDoCall}
        onSoftLeft={onLeave}
      />
      <Info text={info} />
      <Info text={message} isMessage={true} />
    </div>
  );
}

export default Call;

import Info from "../../components/Info/Info";
import EmptyForm from "../../components/EmptyForm/EmptyForm";

const RegWait = props => {
  const { message, onLeave } = props;

  return (
    <div>
      <EmptyForm onSubmit={onLeave} />
      <Info text={message} isMessage={true} />
    </div>
  );
}

export default RegWait;

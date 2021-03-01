import Info from "../../components/Info/Info";
import InputForm from "../../components/InputForm/InputForm";

const Reg = props => {
  const { me, info, message, onJoin } = props;

  return (
    <div>
      <InputForm label="Me" code={me} onSubmit={onJoin} />
      <Info text={info} />
      <Info text={message} isMessage={true} />
    </div>
  );
}

export default Reg;

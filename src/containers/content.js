const Content = props => {
  const { state, handlers } = props;

  return (
    <div>
      {state.status}
    </div>
  );
}

export default Content;

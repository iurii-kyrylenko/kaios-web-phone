import React, { useEffect } from "react";

const ref = React.createRef();

const EmptyForm = ({ onSubmit }) => {
  useEffect(() => ref.current.focus(), []);

  const handleSubmit = event => {
    onSubmit();
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: 0, height: 0 }}>
      <input ref={ref} type="text" style={{ opacity: 0 }}/>
    </form>
  );
};

export default EmptyForm;

import React, { useEffect } from "react";
import { keys } from "../../config";

const ref = React.createRef();

const EmptyForm = ({ onSubmit, onSoftLeft }) => {
  useEffect(() => ref.current.focus(), []);

  const handleKey = event => {
    switch (event.key) {
      case keys.left:
        onSoftLeft && onSoftLeft();
        return;
      default:
        return;
    }
  }

  const handleSubmit = event => {
    onSubmit();
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit} style={{ width: 0, height: 0 }}>
      <input ref={ref} type="text" onKeyDown={handleKey} style={{ opacity: 0 }} />
    </form>
  );
};

export default EmptyForm;

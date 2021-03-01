import React, { useEffect } from "react";
import { useState } from "react";
import { keys } from "../../config";
import css from "./InputForm.module.css";

const ref = React.createRef();

const InputForm = props => {
  const { label, code, onSubmit, onSoftLeft } = props;

  const [value, setValue] = useState(code);

  useEffect(() => ref.current.focus(), []);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleKey = event => {
    switch (event.key) {
      case keys.right:
        setValue("");
        return;
      case keys.left:
        onSoftLeft && onSoftLeft();
        return;
      default:
        return;
    }
  }

  const handleSubmit = event => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      onSubmit(trimmedValue);
    }
    event.preventDefault();
  };

  return (
    <form className={css.inputForm} onSubmit={handleSubmit}>
      <label>
        <span className={css.label}>{label}{":"}</span>
        <input
          ref={ref}
          className={css.input}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKey}
        />
      </label>
    </form>
  );
};

export default InputForm;

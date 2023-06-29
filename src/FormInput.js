import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const { label, onChange, id, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  console.log(focused, "focused");

  const handleFocus = (e) => {
    setFocused(true);
  };

  console.log(inputProps.name, "name");

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        onChange={onChange}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;

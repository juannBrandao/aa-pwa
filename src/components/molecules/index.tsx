import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./index.css";

export type InputProps = {
  type: "text" | "password";
  label: string;
  id: string;
  onKeyDown: (event: string) => void;
};

const Input = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (event: any) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-container">
      <div className="mb-8">
        <label htmlFor={props.id}>{props.label}</label>
      </div>
      <div>
        {props.type === "text" && (
          <input
            className="custom-input"
            type="text"
            id={props.id}
            onKeyDown={(event: any) => props.onKeyDown(event.target.value)}
          />
        )}
        {(props.type === "password" || !props.type) && (
          <div className="input-password-container">
            <input
              className="custom-input"
              type={showPassword ? "text" : "password"}
              id={props.id}
              onKeyDown={(event: any) => props.onKeyDown(event.target.value)}
            />
            {!showPassword && <FaEyeSlash className="icon-password"  onClick={(event) => handleShowPassword(event)}/>}
            {!!showPassword && <FaEye className="icon-password" onClick={(event) => handleShowPassword(event)}/>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;

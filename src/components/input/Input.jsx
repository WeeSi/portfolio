/*
 * File: Inputs.js                                                             *
 * Project: Beall                                                              *
 * Created Date: Su Apr yyyy                                                   *
 * Author: Franck Ehui                                                         *
 * -----                                                                       *
 * Last Modified: Sun Jun 13 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2021 BeAll                                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                   *
 * ----------	---	---------------------------------------------------------  *
 */

import React from "react";

function Input({
  name,
  dataname,
  placeholder,
  handleInput,
  disabled,
  className,
  height,
  content,
  label,
  register,
  required,
  pattern,
  error,
  ...props
}) {

  return (
    <div className="w-full">
      <label style={{ fontWeight: "normal", color: "var(--text-color)" }}>
        {label} {required && "*"}
      </label>
      <input
        autoComplete={name}
        id={name}
        name={name}
        style={{
          width: "100%",
          boxShadow: "unset",
          height: height,
          fontWeight: "normal",
        }}
        className={`input ${className} ${error && "input-error"}`}
        type="text"
        value={dataname}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, {
          required: required,
          pattern: pattern,
        })}
      />
      {error && (
        <span style={{ color: "#ff4d6f" }} className="error text-sm">
          {error.message}
        </span>
      )}
    </div>
  );
}

export default React.memo(Input);

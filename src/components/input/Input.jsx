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

import React, { useRef } from "react";

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
}) {
  const input = useRef();

  return (
    <div className="w-full">
      <label style={{ fontWeight: "normal", color:"var(--text-color)" }}>{label}</label>
      <input
        ref={input}
        autoComplete={name}
        id={name}
        name={name}
        style={{
          width: "100%",
          boxShadow: "unset",
          height: height,
          fontWeight: "normal",
        }}
        className={`input ${className}`}
        type="text"
        value={dataname}
        placeholder={placeholder}
        onChange={(event) => handleInput(event)}
        disabled={disabled}
      />
      {content}
    </div>
  );
}

export default React.memo(Input);

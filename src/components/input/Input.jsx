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

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
const exceptions = ["e", "E", "+", "-", "."];

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
  type,
  ...props
}) {
  const [hasValue, setHasValue] = useState(false);

  const onChange = (e) => {
    if (e.target.value.length > 0) setHasValue(true);
    else setHasValue(false);
  };

  const keydown = (evt) => {
    if (type === "number") {
      if(evt.key === "Backspace") return;

      return !/^(\s*[0-9+ ]+\s*)+$/.test(evt.key) && evt.preventDefault();
    }
  };

  return (
    <div
      className="
    input-container w-full"
    >
      <AnimatePresence>
        {!hasValue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            <label style={{ fontWeight: "normal", color: "var(--text-color)" }}>
              {label} {required && "*"}
            </label>
          </motion.div>
        )}
      </AnimatePresence>

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
        onKeyDown={(event) => keydown(event)}
        className={`input ${className} ${error && "input-error"}`}
        type={"text"}
        value={dataname}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, {
          required: required,
          pattern: pattern,
          onChange: onChange,
        })}
      />
      {error && (
        <span
          style={{ color: "#ff4d6f", bottom: "-30px" }}
          className="block absolute error text-sm"
        >
          {error.message}
        </span>
      )}
    </div>
  );
}

export default React.memo(Input);

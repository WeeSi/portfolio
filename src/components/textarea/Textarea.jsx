import React, { useState, useEffect, useRef } from "react";
import DOMPurify from "dompurify";
import { AnimatePresence, motion } from "framer-motion";

function TextArea(props) {
  const textAreaRef = document.getElementsByClassName("message-textarea")[0];
  const [text, setText] = useState(DOMPurify.sanitize(props.value) || "");
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setParentHeight(`${textAreaRef?.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef?.scrollHeight}px`);
  }, [text, textAreaRef?.scrollHeight]);

  const onChangeHandler = (event) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textAreaRef.scrollHeight}px`);
    setText(event.target.value);
    if (event.target.value.length > 0) setHasValue(true);
    else setHasValue(false);

    if (props.handleInput) {
      props.handleInput(event);
    }
  };

  return (
    <>
      <div
        style={{ minHeight: parentHeight }}
        className="textarea-container custom-scroll-bar"
      >
        <div className="relative">
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
                <label
                  style={{ fontWeight: "normal", color: " var(--text-color)" }}
                  htmlFor={props.name}
                >
                  {props.label} {props.required && "*"}
                </label>
              </motion.div>
            )}
          </AnimatePresence>

          <textarea
            ref={textAreaRef}
            rows={1}
            autoComplete={props.name}
            id={props.name}
            name={props.name}
            style={{
              width: "100%",
              boxShadow: "unset",
              height: textAreaHeight,
              minHeight: "100px",
              maxHeight: "300px",
            }}
            className={`input custom-scroll-bar message-textarea ${
              props.error && "input-error"
            }`}
            type="text"
            placeholder={props.placeholder}
            {...props.register(props.name, {
              required: props.required,
              pattern: props.pattern,
              onChange: onChangeHandler,
            })}
          >
            {props.dataname}
          </textarea>
        </div>

        {props.error && (
          <span style={{ color: "#ff4d6f" }} className="error text-sm">
            {props.error.message}
          </span>
        )}
      </div>
    </>
  );
}

export default TextArea;

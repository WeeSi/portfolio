import React, { useState, useEffect, useRef } from "react";
import DOMPurify from "dompurify";

function TextArea(props) {
  const textAreaRef = useRef();
  const [text, setText] = useState(DOMPurify.sanitize(props.value) || "");
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  // useEffect(() => {
  //   setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
  //   setTextAreaHeight(`${textAreaRef.current?.scrollHeight}px`);
  // }, [text]);

  // const onChangeHandler = (event) => {
  //   setTextAreaHeight("auto");
  //   setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
  //   setText(event.target.value);

  //   if (props.handleInput) {
  //     props.handleInput(event);
  //   }
  // };

  return (
    <>
      <label
        style={{ fontWeight: "normal", color: " var(--text-color)" }}
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <div style={{ minHeight: parentHeight }} className="custom-scroll-bar">
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
          }}
          className={`input custom-scroll-bar`}
          type="text"
          value={props.dataname}
          placeholder={props.placeholder}
          // onChange={(event) => onChangeHandler(event)}
        >
          {props.dataname}
        </textarea>
      </div>
    </>
  );
}

export default TextArea;

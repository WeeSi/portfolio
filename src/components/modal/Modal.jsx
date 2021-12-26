/*
 * File: Modal.js                                                              *
 * Project: Beall                                                              *
 * Created Date: Mo Mar yyyy                                                   *
 * Author: Franck Ehui                                                         *
 * -----                                                                       *
 * Last Modified: Fri Jun 04 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2021 BeAll                                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                     *
 * ----------	---	---------------------------------------------------------    *
 */

import React, { useEffect, useRef, Suspense, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatIcon, XIcon } from "@heroicons/react/outline";
import { IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { hideModal } from "../../store-redux/modalActions";
import Input from "../input/Input";
import TextArea from "../textarea/Textarea";

const Modal = ({ hide, content, title, ...props }) => {
  const node = useRef();

  useEffect(() => {
    // add when mounted
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", keyBinding, false);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", keyBinding, false);
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    if (e.which === 1) {
      if (!props.modal.modalRequired) props.hideModal();
      else {
        document
          .getElementsByClassName("custom-modal")[0]
          .classList.add("modal-bounce");
        setTimeout(() => {
          document
            .getElementsByClassName("custom-modal")[0]
            .classList.remove("modal-bounce");
        }, 100);
      }
    }
  };

  const keyBinding = (event) => {
    if (event.keyCode === 27) {
      if (!props.modal.modalRequired) props.hideModal();
      else {
        document
          .getElementsByClassName("custom-modal")[0]
          .classList.add("modal-bounce");
        setTimeout(() => {
          document
            .getElementsByClassName("custom-modal")[0]
            .classList.remove("modal-bounce");
        }, 100);
      }
    }
  };

  return (
    <div
      style={{ transition: "0.9s", zIndex: "9999999999" }}
      className="fixed inset-0 overflow-hidden"
    >
      <div className="flex items-end justify-center min-h-screen p-0 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-70 cursor-pointer"></div>
        </div>
        <div className="modal-container">
          <AnimatePresence className="w-full">
            <motion.div
              className="flex items-center w-full justify-center"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div
                ref={node}
                style={{
                  borderRadius: "8px",
                  maxWidth: "800px",
                  width: "100%",
                  background: "var(--bg-color)",
                }}
                className={`custom-modal inline-block align-bottom text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline`}
              >
                <div>
                  {!props.modal.modalRequired ? (
                    <div
                      style={{
                        top: "-20px",
                        background: "white",
                        borderRadius: "999999px",
                      }}
                      className="buttons bg absolute -right-5 top-0 shadow-md"
                    >
                      <IconButton
                        className="absolute right-0 top-0"
                        onClick={() => props.hideModal()}
                      >
                        <XIcon className="h-5 text" />
                      </IconButton>
                    </div>
                  ) : null}
                </div>
                <div style={{ padding: "50px" }} className="modal-container">
                  <div className="text-center sm:flex sm:items-center mb-10">
                    <div className="relative w-full text-center sm:text-center">
                      <h2
                        style={{ color: "var(--text-color)" }}
                        className="text-2xl w-full block leading-6 font-medium m-0"
                        id="modal-headline"
                      >
                        {props.modal.modalTitle}
                      </h2>
                    </div>
                  </div>
                  <div className="grid gap-4 grid-cols-2">
                    <Input label="Nom" />
                    <Input label="Prénom" />
                    <Input label="Email" />
                    <Input label="Numéro de téléphone" />
                    <Input label="Métier" />
                    <div className="col-span-2">
                      <TextArea label={"Un petit message"} />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 mt-7">
                    <button
                      onClick={() => props.hideModal()}
                      style={{ background: "#e43052" }}
                    >
                      Annuler
                    </button>
                    <button className="flex space-x-2 items-center">
                      <span> Envoyer </span> <ChatIcon className="h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(mapStateToProps, { hideModal })(Modal);

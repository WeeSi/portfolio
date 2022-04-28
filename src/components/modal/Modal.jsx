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

import React, { useEffect, useRef, Suspense, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatIcon, XIcon } from "@heroicons/react/outline";
import { IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { hideModal } from "../../store-redux/modalActions";
import Input from "../input/Input";
import TextArea from "../textarea/Textarea";
import { useForm } from "react-hook-form";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const Modal = ({ hide, content, title, ...props }) => {
  const node = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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

  const onSubmit = async (inputsData) => {
    setLoading(true);
    const { data } = await axios.post("https://franckehui.fr/modal/send.php", {
      ...inputsData,
    });
    setLoading(false);
    if (data == 1) {
      setSent(true);

      setTimeout(() => {
        props.hideModal();
      }, 2500);
    }
  };

  return (
    <div
      style={{ transition: "0.9s", zIndex: "9999999999" }}
      className="fixed inset-0 overflow-auto"
    >
      <div className="flex items-center justify-center min-h-screen p-0 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="modal-backdrop absolute inset-0 cursor-pointer"></div>
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
                  boxShadow: "0 2px 10px rgb(0 0 0 / 15%)",
                }}
                className={`custom-modal my-2 md:my-0 inline-block align-bottom text-left transform transition-all sm:my-8 sm:align-middle sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline`}
              >
                <div className="md:block hidden">
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
                <div className="modal-container md:p-11 p-4">
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                      <Input
                        required={"Votre nom est obligatoire"}
                        register={register}
                        name="name"
                        label="Nom"
                        error={errors.name}
                        pattern={{
                          value: /^(?!\s+$)[A-Za-zÀ-ÿ-\s-]+$/,
                          message:
                            "Votre nom ne doit pas être vide ou contenir des caractères spéciaux",
                        }}
                      />
                      <Input
                        required={"Votre prénom est obligatoire"}
                        register={register}
                        name="firstname"
                        label="Prénom"
                        pattern={{
                          value: /^[A-Za-zÀ-ÿ- ]+$/i,
                          message:
                            "Votre prénom ne doit pas être vide ou contenir des caractères spéciaux",
                        }}
                        error={errors.firstname}
                      />
                      <Input
                        pattern={{
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message:
                            "Le format de votre adresse email est incorrect",
                        }}
                        required={"Votre adresse email est obligatoire"}
                        register={register}
                        name="email"
                        label="Email"
                        error={errors.email}
                      />
                      <Input
                        register={register}
                        name="phone"
                        label="Numéro de téléphone"
                      />
                      <Input register={register} name="job" label="Métier" />
                      <div className="md:col-span-2">
                        <TextArea
                          pattern={{
                            value: /^(?!\s+$)[A-Za-zăâîșțĂÂÎȘȚ\s-]+$/,
                            message: "Un message est obligatoire",
                          }}
                          required={"Un message est obligatoire"}
                          register={register}
                          error={errors.message}
                          name="message"
                          label={"Un petit message"}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4 mt-7">
                      <button
                        onClick={() => props.hideModal()}
                        style={{ background: "#e43052" }}
                      >
                        Annuler
                      </button>
                      <button
                        disabled={
                          loading === true ? true : sent === true ? true : false
                        }
                        type="submit"
                        className="flex space-x-2 items-center"
                      >
                        {loading && <CircularProgress color="inherit" />}{" "}
                        {!loading && !sent && (
                          <>
                            <span> Envoyer </span> <ChatIcon className="h-5" />{" "}
                          </>
                        )}
                        {!loading && sent && (
                          <span>Votre message a bien été envoyé! </span>
                        )}
                      </button>
                    </div>
                  </form>
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

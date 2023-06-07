import React, { useEffect, useState } from "react";
import Input from "./components/input/Input";
import { useForm } from "react-hook-form";
import TextArea from "./components/textarea/Textarea";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
    tl.from("h1 .text-animate", {
      y: "205%",
      duration: 1.5,
      stagger: 0.2,
      opacity: 0,
      skewX: "20deg",
    });

    tl.to("h1 .text-animate", {
      y: "0%",
      duration: 1.5,
      stagger: 0.2,
      opacity: 1,
      skewX: "0deg",
    });

    return () => { };
  }, []);

  const onSubmit = async (inputsData) => {
    setLoading(true);

    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_API}/api/mail/${process.env.REACT_APP_CLIENT}`,
        {
          ...inputsData,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
          }
        },
      );

      setStatus(1);
      setMessage("Merci, votre message à bien été envoyé");
    } catch (error) {
      setMessage(error.response.data);
      setStatus(-1);
    }
    setLoading(false);
  };

  return (
    <section
      className="conclusion relative z-10"
      style={{ background: "var(--bg-color)" }}
    >
      <div
        style={{ paddingTop: "200px", paddingBottom: "200px" }}
        className="screen-padding  md:px-20 px-4 relative "
      >
        <div style={{ maxWidth: "950px" }}>
          <div className="overflow-hidden">
            <h1
              style={{ fontSize: "48px", marginBottom: "150px" }}
              className="font-bold"
            >
              <div className="text-animate">Hey! Que puis-je faire</div>
              <div className="text-animate">pour vous ? 😊</div>
            </h1>
          </div>

          <form>
            <div className="form-container space-y-20">
              <Input
                required={"Veuillez remplir votre nom"}
                register={register}
                name="name"
                label="Nom Prénom"
                error={errors.name}
                pattern={{
                  value: /^(?!\s+$)[A-Za-zÀ-ÿ-\s-]+$/,
                  message:
                    "Votre nom ne doit pas être vide ou contenir des caractères spéciaux",
                }}
              />

              <Input
                required={"Veuillez remplir votre adresse e-mail"}
                register={register}
                name="email"
                label="Email"
                error={errors.email}
                pattern={{
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Le format de votre adresse email est incorrect",
                }}
              />

              <Input
                pattern={{
                  value: /^[0-9+ ]+$/i,
                  message: "Format de numéro incorrect",
                }}
                error={errors.phone}
                register={register}
                type="number"
                name="phone"
                label="Numéro de téléphone"
              />

              <div style={{ maxHeight: "400px" }}>
                <TextArea
                  required={"Veuillez remplir votre votre message"}
                  register={register}
                  error={errors.message}
                  name="message"
                  label={"Un petit message"}
                />
              </div>

              <div className="flex space-x-2">
                <button
                  style={{
                    marginLeft: "unset",
                    pointerEvents: loading ? "none" : "all",
                    cursor: loading ? "not-allowed" : "unset",
                    justifyContent: loading ? "center" : "space-between",
                  }}
                  onClick={handleSubmit(onSubmit)}
                  className="sending button shadow-md btn btn-default btn-foot wow fadeInUp flex justify-between items-center relative"
                >
                  {loading && (
                    <AnimatePresence>
                      {loading && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.5,
                          }}
                        >
                          <span className="loading block text-center">
                            Sending
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {!loading && (
                    <AnimatePresence>
                      {!loading && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.5,
                          }}
                          className="flex justify-between w-full"
                        >
                          <span>Envoyer</span>{" "}
                          <i className="fa fa-chevron-right"></i>{" "}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </button>
                {message && (
                  <AnimatePresence>
                    {!loading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.5,
                        }}
                        style={{ display: "flex", alignItems: "center" }}
                        className="flex justify-between w-full"
                      >
                        <span style={{ color: status === 1 ? "#4dff94" : "#ff4d6f" }}>
                          {message}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

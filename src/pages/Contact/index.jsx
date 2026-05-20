import pic from "../../assets/contact-picture.jpg";

import "./style.css";

import { IoSend } from "react-icons/io5";

import React, { useRef } from "react";

import { useConfig } from "../../contexts/config";

import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "../../components/Loader";

import { useState } from "react";

export default function Contact() {
  const { t } = useConfig();

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLICKEY
      )
      .then(
        (result) => {
          if (result.text === "OK") setLoading(false);
          toast.success(t("contact.success"));
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error(t("contact.error"));
        }
      );
  };

  return (
    <section className="container" id="contact">
      <div className="column form">
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />

        {loading && <Loader />}

        <form ref={form} onSubmit={sendEmail}>
          <h1 className="gradient-text">{t("contact.title")}</h1>
          <p>{t("contact.subtitle")}</p>

          <label htmlFor="nome">
            {t("contact.name-label")} <span className="required">*</span>
            <input
              type="text"
              placeholder={t("contact.name-placeholder")}
              id="nome"
              autoFocus
              name="nome"
              required
            />
          </label>

          <label htmlFor="email">
            {t("contact.email-label")} <span className="required">*</span>
            <input
              type="email"
              placeholder={t("contact.email-placeholder")}
              id="email"
              name="email"
              required
            />
          </label>

          <label htmlFor="mensagem">
            {t("contact.message-label")} <span className="required">*</span>
            <textarea
              placeholder={t("contact.message-placeholder")}
              rows={3}
              id="mensagem"
              name="mensagem"
              required
            />
          </label>

          <button className="btn">
            {t("contact.send")}
            <IoSend />
          </button>
        </form>
      </div>

      <div className="column wrapper-pic" data-aos="fade-left">
        <div className="pic">
          <div className="line-element" />
          <img
            src={pic}
            alt={t("contact.image-alt")}
            id="main-pic"
          />
        </div>
      </div>
    </section>
  );
}

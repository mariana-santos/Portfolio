import "./style.css";

import { AiOutlineClose } from "react-icons/ai";

import { Fragment, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useModal } from "../../contexts/modal";

export default function Modal() {
  const modalRef = useRef(null);

  const {
    modalData,
    toggleModal,
    setModalData,
    isModalOpen,
    modalTitle
  } = useModal();

  // Fecha o modal ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        if (!isModalOpen) return;
        toggleModal();
        setModalData(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, setModalData, toggleModal]);

  // Fecha o modal ao pressionar a tecla Esc
  useEffect(() => {
    if (!isModalOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        toggleModal();
        setModalData(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, setModalData, toggleModal]);

  // Pausa o ScrollSmoother enquanto o modal está aberto para travar o fundo
  useEffect(() => {
    ScrollSmoother.get()?.paused(isModalOpen);

    return () => {
      ScrollSmoother.get()?.paused(false);
    };
  }, [isModalOpen]);

  const showClass = isModalOpen ? "show" : "hide";

  // Renderiza fora do #smooth-content (que tem transform do GSAP) para que o
  // position: fixed funcione em relação à viewport, e não ao container.
  return createPortal(
    <Fragment>
      <div id="fade" className={`${showClass} fade`}></div>
      <div id="modal" ref={modalRef} className={showClass}>
        <div className="modal_header">
          <h3 className="line-after">{modalTitle}</h3>
          <AiOutlineClose
            onClick={() => {
              toggleModal();
              setModalData(null);
            }}
            className="btn_close"
          />
        </div>

        <div className="modal_content">
          {modalData}
        </div>
      </div>
    </Fragment>,
    document.body
  );
}

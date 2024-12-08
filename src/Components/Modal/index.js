import "./style.css";

import { AiOutlineClose } from "react-icons/ai";

import { Fragment, useEffect, useRef } from "react";
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

  const showClass = isModalOpen ? "show" : "hide";
  
  
  console.log(modalData)

  return (
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
    </Fragment>
  );
}

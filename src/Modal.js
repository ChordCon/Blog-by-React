import style from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={`${style.modalWindow}`}>
      <h2>{props.articleTitle[props.modalArr]}</h2>
      <p>{props.date[props.modalArr]}</p>
      <p>{props.textContent[props.modalArr]}</p>
    </div>
  );
};

export default Modal;

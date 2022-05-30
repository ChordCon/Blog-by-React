import { useState } from "react";
import style from "./AddTextModal.module.css";

const AddTextModal = (props) => {
  let [addTitle, setAddTitle] = useState([]);
  let [addDate, setAddDate] = useState([]);
  let [addContents, setAddContents] = useState([]);

  return (
    <div className={`${style.addTextModal}`}>
      <div className={`${style.guideText}`}>
        <p>글 제목</p>
      </div>
      <input
        className={`${style.modalInput}`}
        placeholder="글 제목을 입력해 주세요."
        onChange={(e) => {
          setAddTitle(e.target.value);
        }}
      ></input>
      <br />
      <div className={`${style.guideText}`}>
        <p>발행 날짜</p>
      </div>
      <input
        className={`${style.modalInput}`}
        type="date"
        placeholder="날짜 입력해 주세요."
        onChange={(e) => {
          setAddDate(e.target.value);
        }}
      ></input>
      <br />
      <div className={`${style.guideText}`}>
        <p>글 내용</p>
      </div>

      <textarea
        className={`${style.contentsInput}`}
        onChange={(e) => {
          setAddContents(e.target.value);
        }}
      ></textarea>
      <br />
      <div className={`${style.addTextButtonHelp}`}>
        <button
          className={`${style.addTextButton}`}
          onClick={() => {
            let titleCopy = [...props.articleTitle];
            titleCopy.unshift(addTitle);
            addTitle == ""
              ? alert("제목을 추가해주세요.")
              : props.setArticleTitle(titleCopy);

            let dateCopy = [...props.date];
            dateCopy.unshift(addDate);
            props.setDate(dateCopy);

            let textContentCopy = [...props.textContent];
            textContentCopy.unshift(addContents);
            props.setTextContent(textContentCopy);

            props.setAddTextModal(false);
          }}
        >
          글 추가하기
        </button>
      </div>
    </div>
  );
};

export default AddTextModal;

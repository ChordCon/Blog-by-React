import { useState } from "react";
import "./styles.css";
import AddTextModal from "./AddTextModal.js";
import Modal from "./Modal";

export default function App() {
  let [articleTitle, setArticleTitle] = useState([]);
  let [date, setDate] = useState([]);
  let [textContent, setTextContent] = useState([]);
  let [addTextModal, setAddTextModal] = useState(false);
  let [modalAction, setModalAction] = useState(false);
  let [modalArr, setModalArr] = useState(0);

  // 함수들
  const AddText = () => {
    addTextModal === false ? setAddTextModal(true) : setAddTextModal(false);
  };
  const modalActionButton = () => {
    modalAction === false ? setModalAction(true) : setModalAction(false);
  };

  return (
    <div className="App">
      {/*+ 블로그 제목 */}
      <h1 className="nav-bar">블로그</h1>

      {/* 글 추가 버튼 */}
      <div className="top-action-button">
        <button
          onClick={() => {
            AddText();
          }}
          className="add-text"
        >
          글 추가
        </button>
      </div>

      {articleTitle[0] === undefined ? (
        <h2 style={{ textAlign: "center" }}>
          글 추가 버튼을 이용하여 글을 추가해주세요.
        </h2>
      ) : null}

      {/* 글  */}
      {articleTitle.map(function (a, i) {
        return (
          <div className="article">
            <h3
              onClick={() => {
                modalActionButton();
                setModalArr(i);
              }}
            >
              {articleTitle[i]}
            </h3>
            <p>{date[i]}</p>

            {/* 글 삭제 버튼  splice 함수 이용 */}
            <div className="delete-text-button-help">
              <button
                className="delete-text-button"
                onClick={() => {
                  let titleCopy = [...articleTitle];
                  setArticleTitle(titleCopy.splice(1, i));
                  let dateCopy = [...date];
                  setDate(dateCopy.splice(1, i));
                  let textContentCopy = [...textContent];
                  setTextContent(textContentCopy.splice(1, i));
                  setModalAction(false);
                }}
              >
                글 삭제
              </button>
            </div>
          </div>
        );
      })}

      {modalAction === true ? (
        <Modal
          articleTitle={articleTitle}
          setArticleTitle={setArticleTitle}
          date={date}
          setDate={setDate}
          textContent={textContent}
          setTextContent={setTextContent}
          modalArr={modalArr}
        />
      ) : null}

      {addTextModal === true ? (
        <AddTextModal
          articleTitle={articleTitle}
          setArticleTitle={setArticleTitle}
          date={date}
          setDate={setDate}
          textContent={textContent}
          setTextContent={setTextContent}
          addTextModal={addTextModal}
          setAddTextModal={setAddTextModal}
        />
      ) : null}
    </div>
  );
}

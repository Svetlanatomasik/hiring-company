import React, { useContext } from "react";
import "./modal.scss";
import { appCtx } from "../context";
import moment from "moment";

function Modal() {
  const singleReport = useContext(appCtx).singleReport;
  const setModal = useContext(appCtx).setModalOpen;
  console.log(singleReport);
  return (
    <div id="modal">
      <div className="wrapper">
        <h2>{singleReport.candidateName}</h2>
        <div className="modal-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icons"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>{" "}
          {singleReport.companyName}
        </div>
        <div className="modal-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icons"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>{" "}
          {moment(singleReport.interviewDate).format("DD.MM.YYYY")}
        </div>
        <div className="modal-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>{" "}
          {singleReport.phase}
        </div>
        <div className="modal-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icons"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          {singleReport.status}
        </div>
        <div className="note-wrap">
          <b>Note: </b>
          <div className="note">{singleReport.note}</div>
        </div>
      </div>
      <button
        onClick={() => {
          setModal(false);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Modal;

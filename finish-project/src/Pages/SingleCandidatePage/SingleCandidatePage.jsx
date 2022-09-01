import React, { useContext, useState } from "react";
import "./singleCandidatePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { appCtx } from "../../Components/context";
import { useParams } from "react-router-dom";
import moment from "moment";
import Modal from "../../Components/Modal/Modal";
import { Link } from "react-router-dom";

function SingleCandidatePage() {
  const candidates = useContext(appCtx).candidatesList;
  const reports = useContext(appCtx).reportsList;
  const setReport = useContext(appCtx).setSingleReport;
  const params = useParams();
  const modalOpen = useContext(appCtx).modalOpen;
  const setModalOpen = useContext(appCtx).setModalOpen;

  const singleCandidate = candidates.find((el) => el.id == params.id);
  const candidateReports = reports.filter((el) => el.candidateId == params.id);
  console.log(candidateReports);

  if (!singleCandidate) return null;

  return (
    <div id="single-candidate-page">
      <Header />
      <div className="wrap-main">
        <div className="main">
          <div className="flex">
            <img src={singleCandidate.avatar} alt="user" />
            <div className="wrapper">
              <h2>
                <i>{singleCandidate.name}</i>
              </h2>

              <p>
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
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  />
                </svg>{" "}
                <i>{moment(singleCandidate.birthday).format("DD.MM.YYYY")}</i>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>{" "}
                <i>{singleCandidate.education}</i>
              </p>
              <p>
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
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>{" "}
                <i>{singleCandidate.email}</i>
              </p>
            </div>
          </div>
          <div className="table">
            <div className="heading-row">
              <span>Company</span>
              <span>Interview date</span>
              <span>Status</span>
              <span>More Info</span>
            </div>

            {candidateReports.map((el) => (
              <div className="row">
                <span>{el.companyName}</span>
                <span>{moment(el.interviewDate).format("DD.MM.YYYY")}</span>
                <span>{el.status}</span>
                <span className="center">
                  <button
                    onClick={() => {
                      setReport(el);
                      setModalOpen(true);
                    }}
                    className="view-btn"
                  >
                    View
                  </button>
                </span>
              </div>
            ))}
          </div>
          <Link to="/home-page" className="back-btn">
            Back To Home
          </Link>
        </div>
        {modalOpen && <Modal />}
      </div>
      <Footer />
    </div>
  );
}

export default SingleCandidatePage;

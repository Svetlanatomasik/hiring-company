import React, { useContext, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./reportsPage.scss";
import { appCtx } from "../../Components/context";
import moment from "moment";
import Modal from "../../Components/Modal/Modal";

function ReportsPage(props) {
  const reports = useContext(appCtx).reportsList;
  const modalOpen = useContext(appCtx).modalOpen;
  const setModalOpen = useContext(appCtx).setModalOpen;
  const setSingleReport = useContext(appCtx).setSingleReport;
  const token = useContext(appCtx).token;
  const refresh = useContext(appCtx).refresh;
  const setRefresh = useContext(appCtx).setRefresh;
  const [searchValue, setSearchValue] = useState("");

  function deleteRep(id) {
    fetch(`http://localhost:3333/664/api/reports/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const searchedReports = searchValue
    ? reports.filter((report) =>
        report.candidateName.toLowerCase().includes(searchValue.toLowerCase())
      )
    : reports;

  if (!reports) return null;
  return (
    <div id="reports-page">
      <Header />
      <div className="main">
        <div className="search-bar">
          <input
            type="Search"
            onChange={handleSearch}
            value={searchValue}
            placeholder="Search"
          />
        </div>
        <div className="table">
          <div className="title">
            <div>Name</div>
            <div>Interview Date</div>
            <div className="company">Company</div>
            <div>Status</div>
            <div className="more">More</div>
          </div>

          {searchedReports.map((el) => (
            <div className="row">
              <div>{el.candidateName}</div>
              <div>{moment(el.interviewDate).format("DD.MM.YYYY")}</div>
              <div>{el.companyName}</div>
              <div>{el.status}</div>
              <div className="more-flex">
                <button
                  onClick={() => {
                    setSingleReport(el);
                    setModalOpen(true);
                  }}
                >
                  View
                </button>
                <button
                  onClick={() => {
                    deleteRep(el.id);
                    setRefresh(!refresh);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        {modalOpen && <Modal />}
      </div>
      <Footer />
    </div>
  );
}

export default ReportsPage;

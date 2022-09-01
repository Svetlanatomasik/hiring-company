import React, { useContext, useState } from "react";
import { appCtx } from "../context";
import "./selectCompany.scss";
import { crpCtx } from "../context";
import logo1 from "../../images/companies/logo1.jpg";
import logo2 from "../../images/companies/logo2.jpg";
import logo3 from "../../images/companies/logo3.webp";
import logo4 from "../../images/companies/logo4.jpg";
import logo5 from "../../images/companies/logo5.webp";
import logo6 from "../../images/companies/logo6.jpg";

const Logos = [logo1, logo2, logo3, logo4, logo5, logo6];

function SelectCompany(props) {
  const companyData = useContext(appCtx).companiesList;
  const setCompany = useContext(crpCtx).setCompanySelected;
  const companySelected = useContext(crpCtx).companySelected;
  const goToReportFill = useContext(crpCtx).goToReportFill;
  const backToCandidate = useContext(crpCtx).backToCandidate;
  const [searchValue, setSearchValue] = useState("");
  const [next, setNext] = useState(false);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const searchedCompanies = () =>
    searchValue
      ? companyData.filter((company) =>
          company.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : companyData;

  return (
    <div id="select-company">
      <div className="flex-wrap">
        <input
          type="text"
          onChange={handleSearch}
          value={searchValue}
          placeholder="Search.."
        />
      </div>
      <h2 className="step">Step 2: Select Company</h2>

      <div className="company-wrapper">
        {searchedCompanies().map((el, index) => (
          <div
            className={
              companySelected.id === el.id
                ? "company-card active"
                : "company-card"
            }
            key={index}
            onClick={() => {
              setCompany(el);
              setNext(true);
            }}
          >
            <div className="red">
              <img src={Logos[index]} alt="slika" />
            </div>
            <div className="company-info">
              <h2>{el.name}</h2>
              <p>{el.email}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-wrap">
        <button onClick={backToCandidate} className="prev">
          Back
        </button>
        <button
          onClick={next ? goToReportFill : ""}
          className={next ? "active next" : "next"}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SelectCompany;

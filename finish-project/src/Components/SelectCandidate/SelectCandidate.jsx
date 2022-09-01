import React, { useContext, useState } from "react";
import "./selectCandidate.scss";
import CandidateCard from "../CandidateCard/CandidateCard";
import { appCtx } from "../context";
import { crpCtx } from "../context";

function SelectCandidate(props) {
  const setCandidateSelected = useContext(crpCtx).setCandidateSelected;
  const candidateSelected = useContext(crpCtx).candidateSelected;
  const goToCompany = useContext(crpCtx).goToCompany;

  const { candidatesList } = useContext(appCtx);
  const [searchValue, setSearchValue] = useState("");
  const [next, setNext] = useState(false);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const searchedCandidates = () =>
    searchValue
      ? candidatesList.filter((candidate) =>
          candidate.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : candidatesList;

  return (
    <div id="select-candidate">
      <div className="flex-wrap">
        <input
          type="text"
          onChange={handleSearch}
          value={searchValue}
          placeholder="Search.."
        />
      </div>
      <h2 className="step">Step 1: Select Candidate</h2>

      <div className="candidate-card">
        {searchedCandidates().map((el, index) => (
          <CandidateCard
            key={index}
            podaci={el}
            selected={el.id === candidateSelected.id ? true : false}
            setNext={setNext}
            next={next}
            setCandidateSelected={setCandidateSelected}
          />
        ))}
      </div>

      <div className="btn-wrap">
        <button
          onClick={next ? goToCompany : ""}
          className={next ? "btn active" : "btn"}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SelectCandidate;

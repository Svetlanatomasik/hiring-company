import React, { useContext, useState } from "react";
import "./fillReport.scss";
import { crpCtx } from "../context";
import { appCtx } from "../context";
import moment from "moment";

function FillReport(props) {
  const backToCompany = useContext(crpCtx).backToCompany;
  const [interviewDate, setInterviewDate] = useState("");
  const [phase, setPhase] = useState("");
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");
  const candidate = useContext(crpCtx).candidateSelected;
  const company = useContext(crpCtx).companySelected;
  const token = useContext(appCtx).token;
  const afterSubmit = useContext(crpCtx).afterSubmit;
  const setRefresh = useContext(appCtx).setRefresh;
  const refresh = useContext(appCtx).refresh;

  console.log(interviewDate);

  function submitForm() {
    fetch("http://localhost:3333/api/reports", {
      method: "POST",
      body: JSON.stringify({
        candidateId: candidate.id,
        candidateName: candidate.name,
        companyId: company.id,
        companyName: company.name,
        interviewDate: interviewDate,
        phase: phase,
        status: status,
        note: note,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div id="fill-report">
      <h2>Step 3: Fill Report</h2>
      <div className="flex-wrap"></div>

      <div className="form">
        <label className="fill-label margin-right">
          Interview date:
          <input
            className="interviewDate"
            onChange={(e) => {
              setInterviewDate(e.target.value);
            }}
            type="date"
            max={moment().format("YYYY-DD-MM")}
          />
        </label>
        <label className="fill-label">
          Phase:
          <select
            onChange={(e) => {
              setPhase(e.target.value);
            }}
            name="phase"
            id="phase"
          >
            <option>Please select</option>
            <option value="cv">cv</option>
            <option value="hr">hr</option>
            <option value="tech">tech</option>
            <option value="final">final</option>
          </select>
        </label>
        <label className="fill-label">
          Status:
          <select
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            name="status"
            id="status"
          >
            <option>Please select</option>
            <option value="passed">passed</option>
            <option value="declined">declined</option>
          </select>
        </label>
        <p>Note:</p>
        <textarea
          onChange={(e) => setNote(e.target.value)}
          name=""
          id=""
          cols="10"
          rows="20"
        ></textarea>
      </div>

      <div className="btn-wrap">
        <button onClick={backToCompany} className="back-btn">
          Back
        </button>
        <button
          onClick={() => {
            submitForm();
            afterSubmit();
            setRefresh(!refresh);
            window.scroll(0, 0);
          }}
          className="submit-btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default FillReport;

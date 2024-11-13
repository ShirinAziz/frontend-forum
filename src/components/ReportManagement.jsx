import React, { useState, useEffect } from 'react';

const ReportManagement = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('/src/mockData/reports.json')
      .then(response => response.json())
      .then(data => setReports(data))
      .catch(error => console.error("Error loading report data:", error));
  }, []);

  const handleMarkAsHandled = (reportId) => {
    setReports(reports.map(report => 
      report.id === reportId ? { ...report, status: "Hanterad" } : report
    ));
  };

  const handleDeleteReport = (reportId) => {
    setReports(reports.filter(report => report.id !== reportId));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-neutral">Rapporthantering</h2>
      <ul>
        {reports.map(report => (
          <li key={report.id} className="bg-base-200 shadow-md rounded-md p-4 mb-4">
            <p><strong>Innehåll:</strong> {report.content}</p>
            <p><strong>Rapporterad av:</strong> {report.reportedBy}</p>
            <p><strong>Status:</strong> {report.status}</p>
            <div className="mt-4 space-x-2">
              {report.status !== "Hanterad" && (
                <button onClick={() => handleMarkAsHandled(report.id)} className="btn btn-success">
                  Markera som hanterad
                </button>
              )}
              <button onClick={() => handleDeleteReport(report.id)} className="btn btn-error">
                Ta bort rapport
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportManagement;

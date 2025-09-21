import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './JobDetail.css';

const JobDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const jobData = location.state?.jobData;

  // If no job data is available, redirect to home
  if (!jobData) {
    navigate('/');
    return null;
  }

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not Available';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="job-detail-container">
      <div className="job-detail-header">
        <button onClick={handleGoBack} className="back-button">
          ← Back
        </button>
        <h1 className="job-title">{jobData.title}</h1>
      </div>

      <div className="job-detail-content">
        {/* Job Description */}
        {jobData.description && (
          <div className="job-description-card">
            <h2>Job Description</h2>
            <p className="description-text">{jobData.description}</p>
          </div>
        )}

        {/* Important Dates */}
        {jobData.importantDate && (
          <div className="important-dates-card">
            <h2>📅 Important Dates</h2>
            <div className="dates-grid">
              <div className="date-item">
                <label>Online Apply Start Date:</label>
                <span className="date-value">{formatDate(jobData.importantDate.onlineApplyStartDate)}</span>
              </div>
              <div className="date-item">
                <label>Online Apply Last Date:</label>
                <span className="date-value urgent">{formatDate(jobData.importantDate.onlineApplyLastDate)}</span>
              </div>
              <div className="date-item">
                <label>Last Date for Fee Payment:</label>
                <span className="date-value">{formatDate(jobData.importantDate.lastDateForFeePayment)}</span>
              </div>
              <div className="date-item">
                <label>Admit Card Release Date:</label>
                <span className="date-value">{formatDate(jobData.importantDate.admitCardReleaseDate)}</span>
              </div>
              <div className="date-item">
                <label>Exam Date:</label>
                <span className="date-value">{formatDate(jobData.importantDate.examDate)}</span>
              </div>
              <div className="date-item">
                <label>Result Date:</label>
                <span className="date-value">{formatDate(jobData.importantDate.resultDate)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Application Fee */}
        {jobData.applcationFee && (
          <div className="fee-card">
            <h2>💰 Application Fee</h2>
            <div className="fee-grid">
              <div className="fee-item">
                <label>General Category:</label>
                <span className="fee-amount">₹{jobData.applcationFee.general}</span>
              </div>
              <div className="fee-item">
                <label>SC/ST/OBC:</label>
                <span className="fee-amount">₹{jobData.applcationFee.scStOBC}</span>
              </div>
              <div className="fee-item">
                <label>All Categories:</label>
                <span className="fee-amount">₹{jobData.applcationFee.all}</span>
              </div>
            </div>
          </div>
        )}

        {/* Age Limit */}
        {jobData.ageLimit && (
          <div className="age-limit-card">
            <h2>👥 Age Limit</h2>
            <div className="age-grid">
              <div className="age-item">
                <label>General:</label>
                <span className="age-value">{jobData.ageLimit.general} years</span>
              </div>
              <div className="age-item">
                <label>SC/ST/OBC:</label>
                <span className="age-value">{jobData.ageLimit.scStOBC} years</span>
              </div>
              <div className="age-item">
                <label>All Categories:</label>
                <span className="age-value">{jobData.ageLimit.all} years</span>
              </div>
            </div>
          </div>
        )}

        {/* Total Vacancy */}
        {jobData.totalVacancy && (
          <div className="vacancy-card">
            <h2>📊 Total Vacancy</h2>
            <div className="vacancy-number">
              <span className="vacancy-count">{jobData.totalVacancy}</span>
              <span className="vacancy-label">Posts Available</span>
            </div>
          </div>
        )}

        {/* Vacancy Details */}
        {jobData.vacancyDetail && (
          <div className="vacancy-detail-card">
            <h2>📋 Vacancy Details</h2>
            <div className="vacancy-detail-content">
              <div className="post-info">
                <h3>{jobData.vacancyDetail.postName}</h3>
                <p className="post-count">{jobData.vacancyDetail.noOfPost} Posts</p>
              </div>

              {/* Eligibility Criteria */}
              {jobData.vacancyDetail.eligibilityCriteria && (
                <div className="eligibility-section">
                  <h4>📚 Eligibility Criteria</h4>
                  <ul className="eligibility-list">
                    {jobData.vacancyDetail.eligibilityCriteria.map((criteria, index) => (
                      <li key={index} className="eligibility-item">
                        <span className="checkmark">✓</span>
                        {criteria}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* How to Fill Form */}
              {jobData.vacancyDetail.howToFillForm && (
                <div className="form-steps-section">
                  <h4>📝 How to Fill Application Form</h4>
                  <div className="steps-container">
                    <div className="step-item">
                      <span className="step-number">1</span>
                      <span className="step-text">{jobData.vacancyDetail.howToFillForm.step1}</span>
                    </div>
                    <div className="step-item">
                      <span className="step-number">2</span>
                      <span className="step-text">{jobData.vacancyDetail.howToFillForm.step2}</span>
                    </div>
                    <div className="step-item">
                      <span className="step-number">3</span>
                      <span className="step-text">{jobData.vacancyDetail.howToFillForm.step3}</span>
                    </div>
                    <div className="step-item">
                      <span className="step-number">4</span>
                      <span className="step-text">{jobData.vacancyDetail.howToFillForm.step4}</span>
                    </div>
                    <div className="step-item">
                      <span className="step-number">5</span>
                      <span className="step-text">{jobData.vacancyDetail.howToFillForm.step5}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Mode of Selection */}
              {jobData.vacancyDetail.modeOfSelection && (
                <div className="selection-mode-section">
                  <h4>🎯 Mode of Selection</h4>
                  <div className="selection-modes">
                    {jobData.vacancyDetail.modeOfSelection.map((mode, index) => (
                      <span key={index} className="selection-mode-tag">
                        {mode}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="job-actions">
          <a 
            href={jobData.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="apply-button"
          >
            🚀 Apply Now
          </a>
          <button onClick={handleGoBack} className="secondary-button">
            ← Back to Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
import React, { useState, useEffect } from 'react';
import { steps } from './steps';
import './App.css';

const StepComponent = ({ step, language }) => {
  return (
    <div className="step-container">
      <h1>{step.title[language]}</h1>
      <div dangerouslySetInnerHTML={{ __html: step.content[language] }} />
    </div>
  );
};

const Navigation = ({ currentStep, setCurrentStep, language, setLanguage }) => {
  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handleRestart = () => {
    setCurrentStep(1);
  };

  return (
    <div className="navigation">
      <button 
        onClick={handlePrevious} 
        disabled={currentStep === 1}
        aria-label="Previous step"
      >
        Previous
      </button>
      <button 
        onClick={handleNext} 
        disabled={currentStep === steps.length}
        aria-label="Next step"
      >
        Next
      </button>
      <button 
        onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
        aria-label={`Switch to ${language === 'en' ? 'Vietnamese' : 'English'}`}
      >
        {language === 'en' ? 'Tiếng Việt' : 'English'}
      </button>
      {currentStep === steps.length && (
        <button 
          onClick={handleRestart}
          aria-label="Restart guide"
          className="restart-btn"
        >
          Restart Guide
        </button>
      )}
    </div>
  );
};

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [language, setLanguage] = useState('en');

  // Read step from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const stepNumber = parseInt(hash.replace('step-', ''));
      if (stepNumber >= 1 && stepNumber <= steps.length) {
        setCurrentStep(stepNumber);
      }
    }
  }, []);

  // Update URL hash when step changes
  useEffect(() => {
    const hash = `#step-${currentStep}`;
    window.history.replaceState(null, '', hash);
  }, [currentStep]);

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="app">
      <div className="container">
        <h2 className="title">MacBook Pro M2 DFU Restore Guide</h2>
        <div className="step-indicator">
          Step {currentStep} of {steps.length}
        </div>
        <StepComponent step={currentStepData} language={language} />
        <Navigation
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          language={language}
          setLanguage={setLanguage}
        />
      </div>
    </div>
  );
}

export default App;

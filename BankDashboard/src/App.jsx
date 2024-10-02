import React, { useState } from 'react';
import PieChart from './Component/PieChart/Piechart';
import './App.css';

function App() {
  // State for financial data
  const [homeValue, setHomeValue] = useState(3600);
  const [downPayment, setDownPayment] = useState(720);
  const [loanAmount, setLoanAmount] = useState(homeValue - downPayment);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(10);

  // Update loan amount when home value or down payment changes
  const updateLoanAmount = () => {
    setLoanAmount(homeValue - downPayment);
  };

  // Call updateLoanAmount when home value or down payment changes
  React.useEffect(updateLoanAmount, [homeValue, downPayment]);

  // Formulas
  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment = (loanAmount * interestPerMonth * Math.pow(1 + interestPerMonth, totalLoanMonths)) /
    (Math.pow(1 + interestPerMonth, totalLoanMonths) - 1);
  const totalInterestGenerated = (monthlyPayment * totalLoanMonths) - loanAmount;

  return (
    <div className="App">
      <header>
        <h1>Bank Dashboard</h1>
      </header>

      <div className="container">
        <div className="form-section">
          <h2>Adjust Loan Details</h2>

          <div className="slider-container">
            <label>Home Value</label>
            <p>${homeValue}</p>
            <input
              type="range"
              min="1000"
              max="10000"
              value={homeValue}
              onChange={(e) => setHomeValue(Number(e.target.value))}
            />
            <p>$1000 - $10000</p>
          </div>

          <div className="slider-container">
            <label>Down Payment</label>
            <p>${downPayment}</p>
            <input
              type="range"
              min="0"
              max={homeValue}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
            <p>$0 - ${homeValue}</p>
          </div>

          <div className="slider-container">
            <label>Loan Amount</label>
            <p>${loanAmount}</p>
            <input
              type="range"
              min="0"
              max={homeValue}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              disabled
            />
            <p>$0 - ${homeValue}</p>
          </div>

          <div className="slider-container">
            <label>Interest Rate</label>
            <p>%{interestRate}</p>
            <input
              type="range"
              min="2"
              max="18"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
            <p>%2 - %18</p>
          </div>

          <div className="slider-container">
            <label>Tenure</label>
            <p>{loanTerm} years</p>
            <select value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))}>
              <option value="5">5 years</option>
              <option value="10">10 years</option>
              <option value="15">15 years</option>
              <option value="20">20 years</option>
            </select>
          </div>

          <div className="data-display">
            <p><strong>Total Loan Months:</strong> {totalLoanMonths}</p>
            <p><strong>Interest per Month:</strong> {interestPerMonth.toFixed(4)}</p>
            <p><strong>Monthly Payment:</strong> ${monthlyPayment.toFixed(2)}</p>
            <p><strong>Total Interest Generated:</strong> ${totalInterestGenerated.toFixed(2)}</p>
          </div>
        </div>

        <div className="chart-section">
          <h2>Financial Breakdown</h2>
          <PieChart
            data={{
              loanAmount: loanAmount,
              totalInterestGenerated: totalInterestGenerated
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

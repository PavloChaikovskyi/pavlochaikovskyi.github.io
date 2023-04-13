function calculate(event) {
    event.preventDefault();
  
    const startCapital = parseFloat(event.target.elements.startCapital.value);
    const annualInterestRate = parseFloat(event.target.elements.annualInterestRate.value) / 100;
    const monthlyIncoming = parseFloat(event.target.elements.monthlyIncoming.value);
    const years = parseFloat(event.target.elements.years.value);
  
    const compoundingPeriods = years * 12;
    const endCapital = startCapital * Math.pow(1 + annualInterestRate/12, compoundingPeriods) 
                     + monthlyIncoming * (Math.pow(1 + annualInterestRate/12, compoundingPeriods) - 1) / (annualInterestRate/12);
    const totalIncome = endCapital - startCapital - monthlyIncoming * compoundingPeriods;
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
    <p>After ${years} years, with a starting capital of $${startCapital.toFixed(2)}, an annual interest rate of ${annualInterestRate*100}% and a monthly incoming of $${monthlyIncoming.toFixed(2)}, you will have:</p>
    <ul>
      <li>Ending capital: $${endCapital.toFixed(2)}</li>
      <li>Total income earned: $${totalIncome.toFixed(2)}</li>
    </ul>`;
}
    
  
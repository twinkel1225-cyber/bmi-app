import { useState } from 'react'
import './BMICalculator.css'

function BMICalculator({ onCalculate }) {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState('metric')
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')

  const calculateBMI = (e) => {
    e.preventDefault()

    if (!height || !weight) {
      alert('Please enter both height and weight')
      return
    }

    let bmiValue
    if (unit === 'metric') {
      // BMI = weight (kg) / (height (m))^2
      const heightInMeters = height / 100
      bmiValue = weight / (heightInMeters * heightInMeters)
    } else {
      // BMI = (weight (lbs) / (height (inches))^2) * 703
      bmiValue = (weight / (height * height)) * 703
    }

    bmiValue = parseFloat(bmiValue.toFixed(1))
    setBmi(bmiValue)

    let categoryName
    if (bmiValue < 18.5) {
      categoryName = 'Underweight'
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      categoryName = 'Normal Weight'
    } else if (bmiValue >= 25 && bmiValue < 30) {
      categoryName = 'Overweight'
    } else {
      categoryName = 'Obese'
    }

    setCategory(categoryName)
    onCalculate({
      bmi: bmiValue,
      category: categoryName,
      height: height,
      weight: weight,
      unit: unit
    })
  }

  const getColor = () => {
    if (!bmi) return '#667eea'
    if (bmi < 18.5) return '#3498db'
    if (bmi < 25) return '#2ecc71'
    if (bmi < 30) return '#f39c12'
    return '#e74c3c'
  }

  return (
    <div className="bmi-calculator">
      <h2>📏 BMI Calculator</h2>
      
      <form onSubmit={calculateBMI} className="calculator-form">
        <div className="unit-toggle">
          <button
            type="button"
            className={`unit-btn ${unit === 'metric' ? 'active' : ''}`}
            onClick={() => setUnit('metric')}
          >
            Metric (kg, cm)
          </button>
          <button
            type="button"
            className={`unit-btn ${unit === 'imperial' ? 'active' : ''}`}
            onClick={() => setUnit('imperial')}
          >
            Imperial (lbs, in)
          </button>
        </div>

        <div className="form-group">
          <label>
            {unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === 'metric' ? 'e.g., 175' : 'e.g., 69'}
            step="0.1"
          />
        </div>

        <div className="form-group">
          <label>
            {unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
            step="0.1"
          />
        </div>

        <button type="submit" className="calculate-btn">
          Calculate BMI
        </button>
      </form>

      {bmi && (
        <div className="result" style={{ borderColor: getColor() }}>
          <div className="bmi-value" style={{ color: getColor() }}>
            {bmi}
          </div>
          <div className="bmi-category" style={{ color: getColor() }}>
            {category}
          </div>
          <div className="bmi-info">
            <p>Height: {height} {unit === 'metric' ? 'cm' : 'in'}</p>
            <p>Weight: {weight} {unit === 'metric' ? 'kg' : 'lbs'}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BMICalculator

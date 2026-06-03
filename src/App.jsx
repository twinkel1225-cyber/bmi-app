import { useState } from 'react'
import BMICalculator from './components/BMICalculator'
import DietPlan from './components/DietPlan'
import WorkoutProgram from './components/WorkoutProgram'
import './App.css'

function App() {
  const [bmiData, setBmiData] = useState(null)

  const handleBMICalculate = (data) => {
    setBmiData(data)
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="app-title">🏋️ BMI Calculator & Fitness Planner</h1>
        
        <div className="main-content">
          <BMICalculator onCalculate={handleBMICalculate} />
          
          {bmiData && (
            <div className="results-section">
              <DietPlan bmiData={bmiData} />
              <WorkoutProgram bmiData={bmiData} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

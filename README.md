# BMI Calculator, Diet Plan & Workout Program

A modern React web application that helps users calculate their BMI and generates personalized diet plans and workout programs based on their BMI category.

## Features

- **BMI Calculator**: Calculate BMI using metric (kg, cm) or imperial (lbs, in) units
- **Personalized Diet Plans**: Get customized meal plans for different BMI categories:
  - Underweight → Weight Gain Plan
  - Normal Weight → Maintenance Plan
  - Overweight → Weight Loss Plan
  - Obese → Aggressive Weight Loss Plan

- **Workout Programs**: Tailored exercise routines based on fitness level:
  - Strength building for underweight individuals
  - Fitness maintenance for normal weight
  - Weight loss & conditioning for overweight
  - Beginner-friendly programs for obese individuals

## Installation

1. Navigate to the project directory:
```bash
cd "untitled folder"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **CSS3** - Styling with modern gradients and animations

## How to Use

1. Enter your height and weight (choose metric or imperial units)
2. Click "Calculate BMI"
3. View your BMI category and corresponding:
   - Daily calorie recommendations
   - Detailed meal plans with 6 meals
   - Nutritional tips
   - 5-6 day workout schedule
   - Exercise sets, reps, and rest periods

## BMI Categories

- **Underweight**: BMI < 18.5
- **Normal Weight**: BMI 18.5 - 24.9
- **Overweight**: BMI 25 - 29.9
- **Obese**: BMI ≥ 30

## Notes

- This app is for informational purposes only
- Consult with healthcare professionals before making significant dietary or exercise changes
- Always start new exercise programs gradually
- Results are customized based on BMI category

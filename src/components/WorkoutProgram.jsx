import './WorkoutProgram.css'

function WorkoutProgram({ bmiData }) {
  const getWorkoutProgram = () => {
    const { bmi, category } = bmiData

    const programs = {
      'Underweight': {
        title: 'Strength Building Program',
        color: '#3498db',
        focus: 'Muscle Gain & Strength',
        duration: '5-6 days/week',
        exercises: [
          {
            day: 'Monday - Chest & Triceps',
            exercises: [
              { name: 'Barbell Bench Press', sets: '4x6', reps: '6 reps', rest: '2-3 min' },
              { name: 'Incline Dumbbell Press', sets: '3x8', reps: '8 reps', rest: '2 min' },
              { name: 'Cable Flyes', sets: '3x10', reps: '10 reps', rest: '1 min' },
              { name: 'Tricep Dips', sets: '3x8', reps: '8 reps', rest: '1.5 min' },
              { name: 'Rope Pushdown', sets: '3x12', reps: '12 reps', rest: '1 min' }
            ]
          },
          {
            day: 'Tuesday - Back & Biceps',
            exercises: [
              { name: 'Deadlifts', sets: '4x5', reps: '5 reps', rest: '3 min' },
              { name: 'Barbell Rows', sets: '4x6', reps: '6 reps', rest: '2.5 min' },
              { name: 'Pull-ups', sets: '3x6', reps: '6 reps', rest: '2 min' },
              { name: 'Barbell Curls', sets: '3x8', reps: '8 reps', rest: '1.5 min' },
              { name: 'Hammer Curls', sets: '3x10', reps: '10 reps', rest: '1 min' }
            ]
          },
          {
            day: 'Wednesday - Rest or Light Cardio',
            exercises: [
              { name: 'Walking', sets: '1x30', reps: 'min', rest: 'steady pace' },
              { name: 'Stretching', sets: '1x15', reps: 'min', rest: 'full body' }
            ]
          },
          {
            day: 'Thursday - Legs',
            exercises: [
              { name: 'Barbell Squats', sets: '4x5', reps: '5 reps', rest: '3 min' },
              { name: 'Romanian Deadlifts', sets: '3x8', reps: '8 reps', rest: '2 min' },
              { name: 'Leg Press', sets: '3x8', reps: '8 reps', rest: '2 min' },
              { name: 'Leg Curls', sets: '3x10', reps: '10 reps', rest: '1 min' },
              { name: 'Calf Raises', sets: '3x12', reps: '12 reps', rest: '1 min' }
            ]
          },
          {
            day: 'Friday - Shoulders',
            exercises: [
              { name: 'Military Press', sets: '4x6', reps: '6 reps', rest: '2 min' },
              { name: 'Lateral Raises', sets: '3x10', reps: '10 reps', rest: '1.5 min' },
              { name: 'Face Pulls', sets: '3x15', reps: '15 reps', rest: '1 min' },
              { name: 'Shrugs', sets: '3x8', reps: '8 reps', rest: '1.5 min' }
            ]
          }
        ],
        tips: [
          'Focus on progressive overload - increase weight gradually',
          'Rest 48 hours between same muscle groups',
          'Prioritize compound movements',
          'Maintain proper form over heavy weight',
          'Get 7-9 hours of sleep for muscle recovery'
        ]
      },
      'Normal Weight': {
        title: 'Fitness Maintenance Program',
        color: '#2ecc71',
        focus: 'Overall Fitness & Health',
        duration: '4-5 days/week',
        exercises: [
          {
            day: 'Monday - Upper Body',
            exercises: [
              { name: 'Push-ups', sets: '3x12', reps: '12 reps', rest: '1.5 min' },
              { name: 'Dumbbell Rows', sets: '3x12', reps: '12 reps', rest: '1.5 min' },
              { name: 'Dumbbell Bench Press', sets: '3x10', reps: '10 reps', rest: '1 min' },
              { name: 'Lat Pulldowns', sets: '3x12', reps: '12 reps', rest: '1 min' },
              { name: 'Shoulder Press', sets: '3x10', reps: '10 reps', rest: '1 min' }
            ]
          },
          {
            day: 'Tuesday - Cardio & Core',
            exercises: [
              { name: 'Jogging', sets: '1x30', reps: 'min', rest: 'moderate pace' },
              { name: 'Planks', sets: '3x45', reps: 'sec', rest: '1 min' },
              { name: 'Crunches', sets: '3x20', reps: '20 reps', rest: '1 min' },
              { name: 'Russian Twists', sets: '3x20', reps: '20 reps', rest: '1 min' }
            ]
          },
          {
            day: 'Wednesday - Lower Body',
            exercises: [
              { name: 'Squats', sets: '3x12', reps: '12 reps', rest: '1.5 min' },
              { name: 'Walking Lunges', sets: '3x10', reps: 'each leg', rest: '1.5 min' },
              { name: 'Leg Curls', sets: '3x12', reps: '12 reps', rest: '1 min' },
              { name: 'Calf Raises', sets: '3x15', reps: '15 reps', rest: '1 min' }
            ]
          },
          {
            day: 'Thursday - Rest or Yoga',
            exercises: [
              { name: 'Yoga Flow', sets: '1x45', reps: 'min', rest: 'flexibility focus' },
              { name: 'Stretching', sets: '1x15', reps: 'min', rest: 'full body' }
            ]
          },
          {
            day: 'Friday - HIIT Training',
            exercises: [
              { name: 'Burpees', sets: '3x30', reps: 'sec', rest: '30 sec' },
              { name: 'Mountain Climbers', sets: '3x30', reps: 'sec', rest: '30 sec' },
              { name: 'Jump Squats', sets: '3x30', reps: 'sec', rest: '30 sec' },
              { name: 'High Knees', sets: '3x30', reps: 'sec', rest: '30 sec' }
            ]
          }
        ],
        tips: [
          'Mix cardio and strength training for balanced fitness',
          'Stay consistent with your routine',
          'Include flexibility and mobility work',
          'Aim for 150 minutes of moderate cardio weekly',
          'Listen to your body and take rest days'
        ]
      },
      'Overweight': {
        title: 'Weight Loss & Conditioning Program',
        color: '#f39c12',
        focus: 'Fat Loss & Endurance',
        duration: '5-6 days/week',
        exercises: [
          {
            day: 'Monday - Light Cardio',
            exercises: [
              { name: 'Treadmill Walk/Jog', sets: '1x40', reps: 'min', rest: 'moderate' },
              { name: 'Cycling', sets: '1x30', reps: 'min', rest: 'steady pace' }
            ]
          },
          {
            day: 'Tuesday - Strength Circuit',
            exercises: [
              { name: 'Bodyweight Squats', sets: '3x15', reps: '15 reps', rest: '1 min' },
              { name: 'Push-ups (Modified)', sets: '3x10', reps: '10 reps', rest: '1.5 min' },
              { name: 'Assisted Pull-ups', sets: '3x8', reps: '8 reps', rest: '1.5 min' },
              { name: 'Dumbbell Rows', sets: '3x12', reps: '12 reps', rest: '1 min' },
              { name: 'Lunges', sets: '3x12', reps: '12 reps', rest: '1 min' }
            ]
          },
          {
            day: 'Wednesday - LISS Cardio',
            exercises: [
              { name: 'Elliptical Machine', sets: '1x40', reps: 'min', rest: 'low impact' },
              { name: 'Swimming', sets: '1x30', reps: 'min', rest: 'steady pace' }
            ]
          },
          {
            day: 'Thursday - Strength & Core',
            exercises: [
              { name: 'Leg Press', sets: '3x12', reps: '12 reps', rest: '1 min' },
              { name: 'Chest Press', sets: '3x12', reps: '12 reps', rest: '1 min' },
              { name: 'Planks', sets: '3x30', reps: 'sec', rest: '1 min' },
              { name: 'Bicycle Crunches', sets: '3x20', reps: '20 reps', rest: '1 min' }
            ]
          },
          {
            day: 'Friday - Moderate Cardio',
            exercises: [
              { name: 'Brisk Walking', sets: '1x45', reps: 'min', rest: 'outdoors' },
              { name: 'Dancing', sets: '1x30', reps: 'min', rest: 'fun activity' }
            ]
          }
        ],
        tips: [
          'Start with low-impact exercises like walking or swimming',
          'Gradually increase intensity as fitness improves',
          'Combine cardio and resistance training',
          'Stay hydrated and take breaks as needed',
          'Aim for 200-300 minutes of cardio weekly'
        ]
      },
      'Obese': {
        title: 'Beginner-Friendly Weight Loss Program',
        color: '#e74c3c',
        focus: 'Safe & Sustainable Fat Loss',
        duration: '4-5 days/week',
        exercises: [
          {
            day: 'Monday - Walking Program',
            exercises: [
              { name: 'Brisk Walking', sets: '1x30', reps: 'min', rest: 'comfortable pace' },
              { name: 'Gentle Stretching', sets: '1x10', reps: 'min', rest: 'full body' }
            ]
          },
          {
            day: 'Tuesday - Light Strength',
            exercises: [
              { name: 'Wall Push-ups', sets: '2x10', reps: '10 reps', rest: '1 min' },
              { name: 'Assisted Squats', sets: '2x12', reps: '12 reps', rest: '1 min' },
              { name: 'Light Dumbbell Rows', sets: '2x10', reps: '10 reps', rest: '1 min' },
              { name: 'Bicep Curls (Light)', sets: '2x12', reps: '12 reps', rest: '1 min' }
            ]
          },
          {
            day: 'Wednesday - Rest Day',
            exercises: [
              { name: 'Light Walking', sets: '1x20', reps: 'min', rest: 'leisurely' },
              { name: 'Stretching & Mobility', sets: '1x15', reps: 'min', rest: 'full body' }
            ]
          },
          {
            day: 'Thursday - Swimming or Water Aerobics',
            exercises: [
              { name: 'Water Walking', sets: '1x25', reps: 'min', rest: 'low impact' },
              { name: 'Water Jogging', sets: '1x15', reps: 'min', rest: 'easy pace' }
            ]
          },
          {
            day: 'Friday - Easy Cardio',
            exercises: [
              { name: 'Stationary Bike', sets: '1x25', reps: 'min', rest: 'comfortable' },
              { name: 'Elliptical', sets: '1x20', reps: 'min', rest: 'no impact' }
            ]
          }
        ],
        tips: [
          'Start slow and gradually increase duration',
          'Consult a doctor before starting exercise',
          'Focus on consistency over intensity',
          'Choose low-impact activities to protect joints',
          'Aim for 150 minutes of activity weekly'
        ]
      }
    }

    return programs[category]
  }

  const program = getWorkoutProgram()

  return (
    <div className="workout-program" style={{ borderColor: program.color }}>
      <h3 style={{ color: program.color }}>💪 {program.title}</h3>
      
      <div className="program-info">
        <div className="info-item" style={{ backgroundColor: `${program.color}15` }}>
          <span className="info-label">Focus:</span>
          <span className="info-value">{program.focus}</span>
        </div>
        <div className="info-item" style={{ backgroundColor: `${program.color}15` }}>
          <span className="info-label">Duration:</span>
          <span className="info-value">{program.duration}</span>
        </div>
      </div>

      <div className="workout-schedule">
        <h4>Weekly Schedule:</h4>
        {program.exercises.map((day, idx) => (
          <div key={idx} className="day-workout">
            <h5 style={{ color: program.color }}>{day.day}</h5>
            <div className="exercises-list">
              {day.exercises.map((exercise, exIdx) => (
                <div key={exIdx} className="exercise-item">
                  <div className="exercise-header">
                    <span className="exercise-name">{exercise.name}</span>
                    <span className="exercise-sets" style={{ color: program.color }}>
                      {exercise.sets}
                    </span>
                  </div>
                  <div className="exercise-details">
                    <span>{exercise.reps}</span>
                    <span>Rest: {exercise.rest}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tips-section">
        <h4>💡 Important Tips:</h4>
        <ul>
          {program.tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WorkoutProgram

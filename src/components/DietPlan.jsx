import './DietPlan.css'

function DietPlan({ bmiData }) {
  const getDietPlan = () => {
    const { bmi, category } = bmiData

    const plans = {
      'Underweight': {
        title: 'Weight Gain Diet Plan',
        color: '#3498db',
        calories: '2500-3000',
        description: 'Focus on nutrient-dense foods to support healthy weight gain.',
        meals: [
          {
            name: 'Breakfast',
            items: ['Oatmeal with banana and peanut butter', 'Whole milk (1 cup)', 'Granola and almonds']
          },
          {
            name: 'Mid-Morning Snack',
            items: ['Greek yogurt with honey', 'Mixed nuts', 'Whole grain bread with almond butter']
          },
          {
            name: 'Lunch',
            items: ['Grilled chicken breast (150g)', 'Brown rice', 'Avocado and olive oil', 'Mixed vegetables']
          },
          {
            name: 'Afternoon Snack',
            items: ['Protein shake', 'Dried fruits', 'Cheese and crackers']
          },
          {
            name: 'Dinner',
            items: ['Salmon or beef (150g)', 'Sweet potato', 'Olive oil roasted vegetables', 'Quinoa']
          },
          {
            name: 'Evening Snack',
            items: ['Milk with honey', 'Nuts and seeds', 'Cottage cheese']
          }
        ],
        tips: [
          'Eat 5-6 meals per day',
          'Include healthy fats (nuts, avocado, olive oil)',
          'Drink plenty of whole milk and nutrient-rich smoothies',
          'Track your calories and weight gain weekly'
        ]
      },
      'Normal Weight': {
        title: 'Maintenance Diet Plan',
        color: '#2ecc71',
        calories: '2000-2500',
        description: 'Keep your weight stable with a balanced, nutritious diet.',
        meals: [
          {
            name: 'Breakfast',
            items: ['Eggs (2-3)', 'Whole wheat toast', 'Fresh fruit or orange juice', 'Green tea']
          },
          {
            name: 'Mid-Morning Snack',
            items: ['Apple with almond butter', 'Green smoothie', 'Unsalted nuts']
          },
          {
            name: 'Lunch',
            items: ['Grilled chicken or fish (120g)', 'Brown rice or whole wheat pasta', 'Steamed vegetables', 'Olive oil dressing']
          },
          {
            name: 'Afternoon Snack',
            items: ['Yogurt with berries', 'Hummus with vegetables', 'String cheese']
          },
          {
            name: 'Dinner',
            items: ['Lean meat or fish (120g)', 'Sweet potato or brown rice', 'Green salad with olive oil', 'Steamed broccoli']
          },
          {
            name: 'Optional Evening Snack',
            items: ['Herbal tea', 'Fresh fruit', 'Light yogurt']
          }
        ],
        tips: [
          'Eat 3 main meals and 2-3 snacks',
          'Balance proteins, carbs, and healthy fats',
          'Stay hydrated with 8-10 glasses of water daily',
          'Monitor portion sizes to maintain weight'
        ]
      },
      'Overweight': {
        title: 'Weight Loss Diet Plan',
        color: '#f39c12',
        calories: '1500-1800',
        description: 'Create a calorie deficit while maintaining nutrition.',
        meals: [
          {
            name: 'Breakfast',
            items: ['Oatmeal with berries', 'Low-fat milk', 'Green tea', 'Small portion of nuts']
          },
          {
            name: 'Mid-Morning Snack',
            items: ['Apple or orange', 'Herbal tea', 'Almonds (10-12)']
          },
          {
            name: 'Lunch',
            items: ['Grilled chicken breast (100g)', 'Brown rice (½ cup)', 'Steamed vegetables', 'Olive oil (1 tsp)']
          },
          {
            name: 'Afternoon Snack',
            items: ['Greek yogurt (low-fat)', 'Cucumber and carrot sticks', 'Hummus (2 tbsp)']
          },
          {
            name: 'Dinner',
            items: ['Fish or lean beef (100g)', 'Sweet potato (½ medium)', 'Large salad with vinegar', 'Steamed broccoli']
          },
          {
            name: 'Optional Evening',
            items: ['Green tea', 'Water with lemon']
          }
        ],
        tips: [
          'Create a 500 calorie daily deficit for 0.5kg/week loss',
          'Eat protein with every meal for satiety',
          'Limit processed foods and sugary drinks',
          'Measure portions carefully and track calories'
        ]
      },
      'Obese': {
        title: 'Aggressive Weight Loss Diet Plan',
        color: '#e74c3c',
        calories: '1200-1500',
        description: 'Significant calorie deficit with medical guidance recommended.',
        meals: [
          {
            name: 'Breakfast',
            items: ['Egg white omelet with vegetables', 'Whole wheat toast (1 slice)', 'Black coffee or tea']
          },
          {
            name: 'Mid-Morning Snack',
            items: ['Green apple', 'Water or herbal tea', 'Small handful of almonds (10)']
          },
          {
            name: 'Lunch',
            items: ['Grilled chicken breast (80g)', 'Brown rice (⅓ cup)', 'Large serving of vegetables', 'Lemon juice']
          },
          {
            name: 'Afternoon Snack',
            items: ['Carrot and celery sticks', 'Cucumber slices', 'Low-fat yogurt (4oz)']
          },
          {
            name: 'Dinner',
            items: ['Fish or lean meat (80g)', 'Sweet potato (small)', 'Steamed broccoli and spinach', 'No oil - baked/grilled']
          },
          {
            name: 'Evening',
            items: ['Herbal tea', 'Water with lemon']
          }
        ],
        tips: [
          'Consult with a doctor or nutritionist',
          'Focus on high protein to preserve muscle',
          'Eliminate sugary drinks, fried foods, and desserts',
          'Consider meal planning and professional support',
          'Start with regular physical activity gradually'
        ]
      }
    }

    return plans[category]
  }

  const plan = getDietPlan()

  return (
    <div className="diet-plan" style={{ borderColor: plan.color }}>
      <h3 style={{ color: plan.color }}>🍽️ {plan.title}</h3>
      <p className="description">{plan.description}</p>
      
      <div className="calories-section" style={{ backgroundColor: `${plan.color}15` }}>
        <strong style={{ color: plan.color }}>Daily Calories: {plan.calories}</strong>
      </div>

      <div className="meals-list">
        <h4>Daily Meal Plan:</h4>
        {plan.meals.map((meal, idx) => (
          <div key={idx} className="meal-item">
            <h5>{meal.name}</h5>
            <ul>
              {meal.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="tips-section">
        <h4>💡 Tips:</h4>
        <ul>
          {plan.tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DietPlan

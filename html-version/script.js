// FitFusion Website JavaScript
// All functionality for BMI/BMR calculators, diet plans, supplements, and workouts

// Data Storage
const supplementsData = [
    {
        id: 1,
        name: "Protein Powder",
        description: "Build and repair muscle tissue with high-quality whey protein. Perfect for post-workout recovery and meeting daily protein goals.",
        category: "Muscle Building",
        icon: "fas fa-dumbbell",
        iconColor: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
        brands: ["Optimum Nutrition", "MuscleBlaze", "Dymatize", "BSN"],
        priceRange: "₹2,500 - ₹4,500"
    },
    {
        id: 2,
        name: "Creatine Monohydrate",
        description: "Increase strength, power, and muscle mass. Scientifically proven to enhance athletic performance and muscle growth.",
        category: "Performance",
        icon: "fas fa-bolt",
        iconColor: "linear-gradient(135deg, #f59e0b, #d97706)",
        brands: ["Optimum Nutrition", "MuscleBlaze", "Universal Nutrition"],
        priceRange: "₹1,200 - ₹2,800"
    },
    {
        id: 3,
        name: "BCAA",
        description: "Essential amino acids for muscle recovery and endurance. Reduce muscle fatigue and accelerate recovery between workouts.",
        category: "Recovery",
        icon: "fas fa-leaf",
        iconColor: "linear-gradient(135deg, #10b981, #059669)",
        brands: ["Scivation", "MuscleBlaze", "Optimum Nutrition"],
        priceRange: "₹1,800 - ₹3,200"
    },
    {
        id: 4,
        name: "Mass Gainer",
        description: "High-calorie supplement for weight gain and muscle building. Ideal for those struggling to gain weight through regular diet.",
        category: "Weight Gain",
        icon: "fas fa-chart-line",
        iconColor: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        brands: ["Serious Mass", "MuscleBlaze", "Dymatize"],
        priceRange: "₹3,000 - ₹5,500"
    },
    {
        id: 5,
        name: "Pre-Workout",
        description: "Boost energy, focus, and endurance for intense training sessions. Contains caffeine and performance-enhancing ingredients.",
        category: "Energy",
        icon: "fas fa-fire",
        iconColor: "linear-gradient(135deg, #ef4444, #dc2626)",
        brands: ["C4 Original", "MuscleBlaze", "Optimum Nutrition"],
        priceRange: "₹2,200 - ₹4,000"
    },
    {
        id: 6,
        name: "Multivitamin",
        description: "Complete vitamin and mineral support for overall health. Fill nutritional gaps and support immune system function.",
        category: "Health",
        icon: "fas fa-pills",
        iconColor: "linear-gradient(135deg, #06b6d4, #0891b2)",
        brands: ["Optimum Nutrition", "MuscleBlaze", "Rainbow Light"],
        priceRange: "₹1,500 - ₹3,000"
    }
];

const workoutsData = [
    {
        id: 1,
        name: "Beginner Full Body Workout",
        type: "gym",
        level: "beginner",
        duration: "45 minutes",
        equipment: "Gym Equipment",
        icon: "fas fa-dumbbell",
        iconColor: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
        exercises: [
            "Squats - 3 sets x 12 reps",
            "Push-ups - 3 sets x 10 reps",
            "Bent-over rows - 3 sets x 12 reps",
            "Overhead press - 3 sets x 10 reps",
            "Planks - 3 sets x 30 seconds"
        ]
    },
    {
        id: 2,
        name: "Advanced Strength Training",
        type: "gym",
        level: "professional",
        duration: "75 minutes",
        equipment: "Full Gym",
        icon: "fas fa-fire",
        iconColor: "linear-gradient(135deg, #ef4444, #dc2626)",
        exercises: [
            "Deadlifts - 4 sets x 6 reps",
            "Bench Press - 4 sets x 8 reps",
            "Pull-ups - 4 sets x 10 reps",
            "Squats - 4 sets x 8 reps",
            "Military Press - 3 sets x 10 reps"
        ]
    },
    {
        id: 3,
        name: "Home Bodyweight Circuit",
        type: "home",
        level: "beginner",
        duration: "30 minutes",
        equipment: "No Equipment",
        icon: "fas fa-home",
        iconColor: "linear-gradient(135deg, #10b981, #059669)",
        exercises: [
            "Jump squats - 3 sets x 15 reps",
            "Push-ups - 3 sets x 12 reps",
            "Mountain climbers - 3 sets x 20 reps",
            "Burpees - 3 sets x 8 reps",
            "Plank - 3 sets x 45 seconds"
        ]
    },
    {
        id: 4,
        name: "Advanced Home HIIT",
        type: "home",
        level: "professional",
        duration: "45 minutes",
        equipment: "Minimal Equipment",
        icon: "fas fa-bolt",
        iconColor: "linear-gradient(135deg, #f59e0b, #d97706)",
        exercises: [
            "Burpee box jumps - 4 sets x 12 reps",
            "Single-arm push-ups - 4 sets x 8 reps",
            "Pistol squats - 4 sets x 6 each leg",
            "Handstand push-ups - 3 sets x 5 reps",
            "L-sit holds - 3 sets x 20 seconds"
        ]
    }
];

const testimonialsData = [
    {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        text: "FitFusion completely transformed my approach to fitness. The personalized diet plans and workout routines helped me lose 15kg in 6 months!",
        transformation: "Lost 15kg in 6 months",
        avatar: "SJ"
    },
    {
        id: 2,
        name: "Raj Patel",
        rating: 5,
        text: "The supplement guide with Indian brands was exactly what I needed. Found authentic products at great prices and saw amazing results.",
        transformation: "Gained 8kg muscle mass",
        avatar: "RP"
    },
    {
        id: 3,
        name: "Priya Sharma",
        rating: 5,
        text: "As a beginner, I was overwhelmed by fitness information online. FitFusion's calculators and meal plans made everything so simple and achievable.",
        transformation: "Improved overall fitness by 70%",
        avatar: "PS"
    },
    {
        id: 4,
        name: "Mike Chen",
        rating: 5,
        text: "The workout plans are perfectly structured for my busy schedule. Home workouts are incredibly effective and convenient.",
        transformation: "Built lean muscle at home",
        avatar: "MC"
    }
];

// Utility Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function showResult(elementId, content, type = 'success') {
    const resultElement = document.getElementById(elementId);
    resultElement.innerHTML = content;
    resultElement.className = `result ${type}`;
    resultElement.classList.remove('hidden');
}

function hideResult(elementId) {
    const resultElement = document.getElementById(elementId);
    resultElement.classList.add('hidden');
}

// BMI Calculator Functions
function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    let category, message;
    
    if (bmi < 18.5) {
        category = "Underweight";
        message = "Consider consulting a nutritionist to develop a healthy weight gain plan.";
    } else if (bmi < 25) {
        category = "Normal weight";
        message = "Great! You're in the healthy weight range. Maintain your current lifestyle.";
    } else if (bmi < 30) {
        category = "Overweight";
        message = "Consider incorporating more physical activity and a balanced diet.";
    } else {
        category = "Obese";
        message = "It's recommended to consult with a healthcare professional for a weight management plan.";
    }
    
    return {
        bmi: Math.round(bmi * 10) / 10,
        category,
        message
    };
}

// BMR Calculator Functions
function calculateBMR(weight, height, age, gender) {
    let bmr;
    
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    
    const dailyCalories = {
        maintenance: Math.round(bmr * 1.55),
        fatLoss: Math.round(bmr * 1.55 * 0.8),
        weightGain: Math.round(bmr * 1.55 * 1.2)
    };
    
    return {
        bmr: Math.round(bmr),
        dailyCalories
    };
}

// Diet Plan Generator
function generateDietPlan(data) {
    const bmr = calculateBMR(data.weight, data.height, data.age, data.gender);
    let targetCalories;
    
    switch (data.goal) {
        case 'fat_loss':
            targetCalories = bmr.dailyCalories.fatLoss;
            break;
        case 'weight_gain':
            targetCalories = bmr.dailyCalories.weightGain;
            break;
        default:
            targetCalories = bmr.dailyCalories.maintenance;
    }
    
    const protein = Math.round(data.weight * 2.2);
    
    const mealPlans = {
        vegetarian: {
            breakfast: [
                "Oatmeal with almonds and berries",
                "Greek yogurt with honey and nuts",
                "Vegetable omelet with whole grain toast",
                "Smoothie with spinach, banana, and protein powder"
            ],
            lunch: [
                "Quinoa salad with mixed vegetables",
                "Lentil curry with brown rice",
                "Chickpea and vegetable stir-fry",
                "Paneer tikka with roti and salad"
            ],
            snack: [
                "Mixed nuts and seeds",
                "Hummus with vegetable sticks",
                "Greek yogurt with berries",
                "Protein smoothie"
            ],
            dinner: [
                "Grilled tofu with steamed vegetables",
                "Dal with quinoa and sautéed greens",
                "Vegetable curry with brown rice",
                "Stuffed bell peppers with quinoa"
            ]
        },
        non_vegetarian: {
            breakfast: [
                "Scrambled eggs with whole grain toast",
                "Greek yogurt with protein powder",
                "Chicken and vegetable omelet",
                "Protein smoothie with berries"
            ],
            lunch: [
                "Grilled chicken with quinoa salad",
                "Fish curry with brown rice",
                "Chicken stir-fry with vegetables",
                "Turkey wrap with whole grain tortilla"
            ],
            snack: [
                "Boiled eggs with nuts",
                "Chicken breast strips",
                "Protein shake",
                "Tuna salad"
            ],
            dinner: [
                "Baked salmon with sweet potato",
                "Grilled chicken with steamed broccoli",
                "Lean beef with quinoa",
                "Fish tikka with vegetables"
            ]
        },
        vegan: {
            breakfast: [
                "Chia seed pudding with almond milk",
                "Smoothie bowl with plant protein",
                "Avocado toast with hemp seeds",
                "Oatmeal with nuts and fruits"
            ],
            lunch: [
                "Buddha bowl with quinoa and tahini",
                "Lentil and vegetable curry",
                "Chickpea salad wrap",
                "Tofu stir-fry with brown rice"
            ],
            snack: [
                "Mixed nuts and dried fruits",
                "Hummus with vegetable sticks",
                "Plant-based protein smoothie",
                "Almond butter with apple"
            ],
            dinner: [
                "Grilled tempeh with vegetables",
                "Black bean and quinoa bowl",
                "Vegetable curry with brown rice",
                "Stuffed sweet potato with beans"
            ]
        }
    };
    
    const tips = {
        fat_loss: [
            "Drink plenty of water throughout the day",
            "Include fiber-rich foods in every meal",
            "Practice portion control",
            "Eat slowly and mindfully"
        ],
        muscle_building: [
            "Consume protein within 30 minutes post-workout",
            "Include complex carbohydrates for energy",
            "Don't skip meals",
            "Focus on progressive overload in training"
        ],
        maintenance: [
            "Maintain a balanced approach to nutrition",
            "Listen to your body's hunger cues",
            "Include variety in your diet",
            "Stay consistent with meal timing"
        ],
        weight_gain: [
            "Eat frequent, smaller meals",
            "Include healthy fats in your diet",
            "Focus on calorie-dense foods",
            "Don't drink too much water before meals"
        ]
    };
    
    const weeklyPlan = {};
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    days.forEach(day => {
        const meals = mealPlans[data.dietType];
        weeklyPlan[day] = {
            breakfast: [meals.breakfast[Math.floor(Math.random() * meals.breakfast.length)]],
            lunch: [meals.lunch[Math.floor(Math.random() * meals.lunch.length)]],
            snack: [meals.snack[Math.floor(Math.random() * meals.snack.length)]],
            dinner: [meals.dinner[Math.floor(Math.random() * meals.dinner.length)]]
        };
    });
    
    return {
        plan: {
            dailyCalories: targetCalories,
            dailyProtein: protein,
            goalType: data.goal,
            dietType: data.dietType,
            weeklyPlan,
            tips: tips[data.goal] || tips.maintenance
        }
    };
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    setupNavigation();
    setupCalculators();
    loadSupplements();
    setupDietPlanGenerator();
    loadWorkouts();
    loadTestimonials();
}

// Navigation Setup
function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Mobile navigation
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            scrollToSection(target);
        });
    });
}

// Calculator Setup
function setupCalculators() {
    // BMI Calculator
    const bmiForm = document.getElementById('bmi-form');
    bmiForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const weight = parseFloat(document.getElementById('bmi-weight').value);
        const height = parseFloat(document.getElementById('bmi-height').value);
        
        if (weight && height) {
            const result = calculateBMI(weight, height);
            const resultHTML = `
                <h4>Your BMI Result</h4>
                <div style="font-size: 24px; font-weight: 600; color: #e11d48; margin: 10px 0;">
                    BMI: ${result.bmi}
                </div>
                <div style="font-size: 18px; font-weight: 500; margin-bottom: 10px;">
                    Category: ${result.category}
                </div>
                <p>${result.message}</p>
            `;
            showResult('bmi-result', resultHTML);
        }
    });
    
    // BMR Calculator
    const bmrForm = document.getElementById('bmr-form');
    bmrForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const weight = parseFloat(document.getElementById('bmr-weight').value);
        const height = parseFloat(document.getElementById('bmr-height').value);
        const age = parseInt(document.getElementById('bmr-age').value);
        const gender = document.getElementById('bmr-gender').value;
        
        if (weight && height && age && gender) {
            const result = calculateBMR(weight, height, age, gender);
            const resultHTML = `
                <h4>Your BMR & Daily Calorie Needs</h4>
                <div style="font-size: 20px; font-weight: 600; color: #e11d48; margin: 10px 0;">
                    Base Metabolic Rate: ${result.bmr} calories/day
                </div>
                <div style="margin-top: 15px;">
                    <h5 style="margin-bottom: 10px;">Daily Calorie Recommendations:</h5>
                    <p><strong>Maintenance:</strong> ${result.dailyCalories.maintenance} calories</p>
                    <p><strong>Fat Loss:</strong> ${result.dailyCalories.fatLoss} calories</p>
                    <p><strong>Weight Gain:</strong> ${result.dailyCalories.weightGain} calories</p>
                </div>
            `;
            showResult('bmr-result', resultHTML);
        }
    });
}

// Load Supplements
function loadSupplements() {
    const supplementsGrid = document.getElementById('supplements-grid');
    
    supplementsData.forEach(supplement => {
        const supplementCard = document.createElement('div');
        supplementCard.className = 'supplement-card';
        supplementCard.innerHTML = `
            <div class="supplement-icon" style="background: ${supplement.iconColor}">
                <i class="${supplement.icon}"></i>
            </div>
            <h3>${supplement.name}</h3>
            <p>${supplement.description}</p>
            <div class="supplement-brands">
                ${supplement.brands.map(brand => `<span class="brand-tag">${brand}</span>`).join('')}
            </div>
            <div class="supplement-price">${supplement.priceRange}</div>
        `;
        
        supplementsGrid.appendChild(supplementCard);
    });
}

// Diet Plan Generator Setup
function setupDietPlanGenerator() {
    const dietForm = document.getElementById('diet-form');
    
    dietForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            weight: parseFloat(document.getElementById('diet-weight').value),
            height: parseFloat(document.getElementById('diet-height').value),
            age: parseInt(document.getElementById('diet-age').value),
            gender: document.getElementById('diet-gender').value,
            goal: document.getElementById('diet-goal').value,
            dietType: document.getElementById('diet-type').value
        };
        
        if (Object.values(formData).every(value => value)) {
            const result = generateDietPlan(formData);
            displayDietPlan(result.plan);
        }
    });
}

function displayDietPlan(plan) {
    const resultElement = document.getElementById('diet-result');
    
    const weeklyPlanHTML = Object.entries(plan.weeklyPlan).map(([day, meals]) => `
        <div class="day-plan">
            <h4>${day}</h4>
            <div class="meal-list">
                <div class="meal-item"><strong>Breakfast:</strong> ${meals.breakfast[0]}</div>
                <div class="meal-item"><strong>Lunch:</strong> ${meals.lunch[0]}</div>
                <div class="meal-item"><strong>Snack:</strong> ${meals.snack[0]}</div>
                <div class="meal-item"><strong>Dinner:</strong> ${meals.dinner[0]}</div>
            </div>
        </div>
    `).join('');
    
    const resultHTML = `
        <h3>Your Personalized Diet Plan</h3>
        <div style="margin-bottom: 20px; padding: 15px; background: #f0fdf4; border-radius: 8px;">
            <p><strong>Daily Calories:</strong> ${plan.dailyCalories} kcal</p>
            <p><strong>Daily Protein:</strong> ${plan.dailyProtein}g</p>
            <p><strong>Goal:</strong> ${plan.goalType.replace('_', ' ').toUpperCase()}</p>
            <p><strong>Diet Type:</strong> ${plan.dietType.replace('_', ' ').toUpperCase()}</p>
        </div>
        
        <div class="meal-plan">
            <h4>Weekly Meal Plan</h4>
            ${weeklyPlanHTML}
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px;">
            <h5>Tips for Success:</h5>
            <ul style="margin-left: 20px;">
                ${plan.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
    `;
    
    resultElement.innerHTML = resultHTML;
    resultElement.classList.remove('hidden');
}

// Load Workouts
function loadWorkouts() {
    const workoutsGrid = document.getElementById('workouts-grid');
    
    function renderWorkouts(workouts) {
        workoutsGrid.innerHTML = '';
        workouts.forEach(workout => {
            const workoutCard = document.createElement('div');
            workoutCard.className = 'workout-card';
            workoutCard.setAttribute('data-type', workout.type);
            workoutCard.setAttribute('data-level', workout.level);
            
            workoutCard.innerHTML = `
                <div class="workout-header">
                    <div class="workout-icon" style="background: ${workout.iconColor}">
                        <i class="${workout.icon}"></i>
                    </div>
                    <div class="workout-info">
                        <h3>${workout.name}</h3>
                        <p style="color: #6b7280; font-size: 14px;">${workout.duration}</p>
                    </div>
                </div>
                <div class="workout-meta">
                    <span class="workout-tag">${workout.type.toUpperCase()}</span>
                    <span class="workout-tag">${workout.level.toUpperCase()}</span>
                    <span class="workout-tag">${workout.equipment}</span>
                </div>
                <ul class="exercise-list">
                    ${workout.exercises.map(exercise => `<li>${exercise}</li>`).join('')}
                </ul>
            `;
            
            workoutsGrid.appendChild(workoutCard);
        });
    }
    
    // Initial render
    renderWorkouts(workoutsData);
    
    // Filter functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            if (filter === 'all') {
                renderWorkouts(workoutsData);
            } else {
                const filtered = workoutsData.filter(workout => 
                    workout.type === filter || workout.level === filter
                );
                renderWorkouts(filtered);
            }
        });
    });
}

// Load Testimonials
function loadTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    
    testimonialsData.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        
        const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
        
        testimonialCard.innerHTML = `
            <div class="testimonial-avatar">${testimonial.avatar}</div>
            <div class="testimonial-name">${testimonial.name}</div>
            <div class="testimonial-rating">${stars}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-transformation">${testimonial.transformation}</div>
        `;
        
        testimonialsGrid.appendChild(testimonialCard);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
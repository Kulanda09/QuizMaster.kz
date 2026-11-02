// ===== QUIZ DATA =====
const quizzes = [
  {
    id: 1,
    title: "Қазақстан тарихы",
    description: "Еліміздің тарихы мен маңызды оқиғалары туралы біліміңді тексер",
    icon: "🇰🇿",
    color: "linear-gradient(135deg, #059669, #10b981)",
    difficulty: "medium",
    questions: [
      {
        question: "Қазақ хандығы қай жылы құрылды?",
        options: ["1456", "1465", "1480", "1511"],
        correct: 1
      },
      {
        question: "Абай Құнанбайұлы қай ғасырда өмір сүрді?",
        options: ["XVII ғасыр", "XVIII ғасыр", "XIX ғасыр", "XX ғасыр"],
        correct: 2
      },
      {
        question: "Қазақстан Республикасының тәуелсіздік күні қай күн?",
        options: ["16 желтоқсан", "1 наурыз", "30 тамыз", "25 қазан"],
        correct: 0
      },
      {
        question: "Алтын адам қай жерден табылды?",
        options: ["Тараз", "Есік", "Отырар", "Түркістан"],
        correct: 1
      },
      {
        question: "Қазақстанның астанасы 1997 жылы қай қалаға көшірілді?",
        options: ["Алматы", "Шымкент", "Ақмола (Астана)", "Қарағанды"],
        correct: 2
      }
    ]
  },
  {
    id: 2,
    title: "Жалпы білім",
    description: "Әлем және ғылым туралы қызықты сұрақтар",
    icon: "🌍",
    color: "linear-gradient(135deg, #4f46e5, #6366f1)",
    difficulty: "easy",
    questions: [
      {
        question: "Жер шарындағы ең үлкен мұхит қайсы?",
        options: ["Атлант", "Үнді", "Тынық", "Солтүстік Мұзды"],
        correct: 2
      },
      {
        question: "Адам денесіндегі ең үлкен орган қайсы?",
        options: ["Бауыр", "Тері", "Ми", "Өкпе"],
        correct: 1
      },
      {
        question: "Күн жүйесіндегі ең үлкен планета?",
        options: ["Жер", "Сатурн", "Юпитер", "Марс"],
        correct: 2
      },
      {
        question: "Судың қайнау температурасы (цельсий)?",
        options: ["50°C", "90°C", "100°C", "120°C"],
        correct: 2
      },
      {
        question: "Қай құрлықта кенгуру мекендейді?",
        options: ["Африка", "Азия", "Австралия", "Оңтүстік Америка"],
        correct: 2
      }
    ]
  },
  {
    id: 3,
    title: "IT және технология",
    description: "Компьютер, интернет және бағдарламалау негіздері",
    icon: "💻",
    color: "linear-gradient(135deg, #0ea5e9, #0284c7)",
    difficulty: "medium",
    questions: [
      {
        question: "HTML не үшін қолданылады?",
        options: ["Стиль беру", "Веб-бет құрылымын жасау", "Деректер базасы", "Анимация"],
        correct: 1
      },
      {
        question: "CSS қысқартуы нені білдіреді?",
        options: ["Computer Style Sheet", "Cascading Style Sheets", "Creative Style System", "Code Style Syntax"],
        correct: 1
      },
      {
        question: "JavaScript қай тілге жатады?",
        options: ["Бағдарламалау тілі", "Маркап тілі", "Стиль тілі", "Деректер тілі"],
        correct: 0
      },
      {
        question: "Интернеттің «әкесі» кім деп саналады?",
        options: ["Билл Гейтс", "Тим Бернерс-Ли", "Стив Джобс", "Марк Цукерберг"],
        correct: 1
      },
      {
        question: "Қайсысы бағдарламалау тілі емес?",
        options: ["Python", "Java", "HTML", "C++"],
        correct: 2
      }
    ]
  },
  {
    id: 4,
    title: "Спорт және ойындар",
    description: "Спорт әлемі мен танымал ойындар туралы",
    icon: "⚽",
    color: "linear-gradient(135deg, #c2410c, #ea580c)",
    difficulty: "easy",
    questions: [
      {
        question: "Футболда бір командада қанша ойыншы ойнайды (негізгі құрам)?",
        options: ["9", "10", "11", "12"],
        correct: 2
      },
      {
        question: "Олимпиада ойындары қанша жылда бір өтеді?",
        options: ["2 жыл", "3 жыл", "4 жыл", "5 жыл"],
        correct: 2
      },
      {
        question: "Қай спорт түрінде «сет» ұғымы бар?",
        options: ["Футбол", "Баскетбол", "Теннис", "Хоккей"],
        correct: 2
      },
      {
        question: "Шахматында ең күшті фигура қайсы?",
        options: ["Патша", "Ферзь", "Тура", "Піл"],
        correct: 1
      },
      {
        question: "FIFA Әлем чемпионаты қанша жылда бір өтеді?",
        options: ["2 жыл", "3 жыл", "4 жыл", "5 жыл"],
        correct: 2
      }
    ]
  }
];

// ===== STATE =====
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let answered = false;

// ===== DOM ELEMENTS =====
const quizGrid = document.getElementById('quizGrid');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');

// ===== NAVIGATION =====
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  
  // Update nav
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  if (id === 'home') document.querySelectorAll('.nav-btn')[0]?.classList.add('active');
  if (id === 'quizzes') document.querySelectorAll('.nav-btn')[1]?.classList.add('active');
  if (id === 'about') document.querySelectorAll('.nav-btn')[2]?.classList.add('active');
}

function showHome() {
  showSection('home');
}

function showQuizzes() {
  showSection('quizzes');
  renderQuizList();
}

function showAbout() {
  showSection('about');
}

// ===== RENDER QUIZ LIST =====
function renderQuizList() {
  quizGrid.innerHTML = quizzes.map(quiz => `
    <div class="quiz-item" onclick="startQuiz(${quiz.id})">
      <div class="quiz-item-header" style="background: ${quiz.color}">
        ${quiz.icon}
      </div>
      <div class="quiz-item-body">
        <h3 class="quiz-item-title">${quiz.title}</h3>
        <p class="quiz-item-desc">${quiz.description}</p>
        <div class="quiz-item-meta">
          <span>📝 ${quiz.questions.length} сұрақ</span>
          <span class="badge badge-${quiz.difficulty}">
            ${quiz.difficulty === 'easy' ? 'Оңай' : quiz.difficulty === 'medium' ? 'Орташа' : 'Қиын'}
          </span>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== START QUIZ =====
function startQuiz(id) {
  currentQuiz = quizzes.find(q => q.id === id);
  currentQuestionIndex = 0;
  score = 0;
  selectedOption = null;
  answered = false;
  
  showSection('quiz-play');
  loadQuestion();
}

// ===== LOAD QUESTION =====
function loadQuestion() {
  const q = currentQuiz.questions[currentQuestionIndex];
  const total = currentQuiz.questions.length;
  
  // Progress
  const progress = ((currentQuestionIndex) / total) * 100;
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `${currentQuestionIndex + 1} / ${total}`;
  
  // Question
  questionNumber.textContent = `Сұрақ ${currentQuestionIndex + 1}`;
  questionText.textContent = q.question;
  
  // Options
  const letters = ['A', 'B', 'C', 'D'];
  optionsContainer.innerHTML = q.options.map((opt, i) => `
    <button class="option" onclick="selectOption(${i})" id="option-${i}">
      <span class="option-letter">${letters[i]}</span>
      <span>${opt}</span>
    </button>
  `).join('');
  
  // Reset button
  nextBtn.disabled = true;
  nextBtn.textContent = currentQuestionIndex === total - 1 ? 'Нәтижені көру →' : 'Келесі сұрақ →';
  answered = false;
  selectedOption = null;
}

// ===== SELECT OPTION =====
function selectOption(index) {
  if (answered) return;
  
  selectedOption = index;
  answered = true;
  
  const q = currentQuiz.questions[currentQuestionIndex];
  const options = document.querySelectorAll('.option');
  
  options.forEach((opt, i) => {
    opt.classList.add('disabled');
    if (i === q.correct) {
      opt.classList.add('correct');
    } else if (i === index && i !== q.correct) {
      opt.classList.add('wrong');
    }
    if (i === index) {
      opt.classList.add('selected');
    }
  });
  
  if (index === q.correct) {
    score++;
  }
  
  nextBtn.disabled = false;
}

// ===== NEXT QUESTION =====
function nextQuestion() {
  if (!answered) return;
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex >= currentQuiz.questions.length) {
    showResult();
  } else {
    loadQuestion();
  }
}

// ===== SHOW RESULT =====
function showResult() {
  const total = currentQuiz.questions.length;
  const percent = Math.round((score / total) * 100);
  
  document.getElementById('scoreNumber').textContent = score;
  document.getElementById('totalQuestions').textContent = total;
  document.getElementById('resultPercent').textContent = `${percent}%`;
  
  let emoji, title, message;
  
  if (percent >= 90) {
    emoji = '🏆';
    title = 'Керемет!';
    message = 'Сіз нағыз білгірсіз! Тамаша нәтиже!';
  } else if (percent >= 70) {
    emoji = '🎉';
    title = 'Жақсы!';
    message = 'Өте жақсы нәтиже. Тағы да тырысып көріңіз!';
  } else if (percent >= 50) {
    emoji = '👍';
    title = 'Орташа';
    message = 'Жаман емес, бірақ жақсартуға болады.';
  } else {
    emoji = '📚';
    title = 'Күштірек болу керек';
    message = 'Қайта оқып, қайтадан сынап көріңіз!';
  }
  
  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('resultMessage').textContent = message;
  
  // Final progress
  progressFill.style.width = '100%';
  
  showSection('result');
}

// ===== RESTART =====
function restartQuiz() {
  if (currentQuiz) {
    startQuiz(currentQuiz.id);
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  showHome();
});

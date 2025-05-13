let quizes = [
    maths = [
        questions =[
            //question 1
            "2 x y = 8", 
            //question 2
            "4 x 3 = y",
            //question 3
            "y x 5 = 10",
            //question 4
            "7 x y = 21",
            //question 5
            "3 x y = 9"
        ],
        responsives = [
            // question 1
            "3", "1", "4", "6",
            // question 2
            "12", "15", "7", "9", 
            // question 3
            "3", "5", "2", "1", 
            // question 4
            "1", "8", "3", "7", 
            // question 5
            "6", "3", "6", "1"
        ],
        answers = [
            // question 1
            "c", 
            // question 2 
            "a", 
            // question 3 
            "c", 
            // question 4 
            "c", 
            // question 5 
            "b"
        ]
        
    ],
    english = [
        questions =[
            //question 1
            "Which word is a noun?", 
            //question 2
            "What is the correct past tense of 'go'?",
            //question 3
            "Choose the correct sentence",
            //question 4
            "What is the opposite of 'cold'?",
            //question 5
            "Which word is an adjective?"
        ],
        responsives = [
            // question 1
            "Run", "Happy", "Apple", "Quickly",
            // question 2
            "Goed", "Went", "Go", "Going", 
            // question 3
            "She are my friend.", "She is my friend.", "She am my friend.", "She be my friend.", 
            // question 4
            "freezing", "Wet", "Hot", "Cool", 
            // question 5
            "happy", "apple", "ten", "true"
        ],
        answers = [
            // question 1
            "c", 
            // question 2 
            "b", 
            // question 3 
            "c", 
            // question 4 
            "c", 
            // question 5 
            "a"
        ]

    ],

    health = [
        questions =[
            //question 1
            "What should you wear when riding a bike?", 
            //question 2
            "Why is it important to look both ways before crossing the road?",
            //question 3
            "Why is it important to wash your hands before eating?",
            //question 4
            "What can you do if you feel sad or worried?",
            //question 5
            "What is mindfulness?"
        ],
        responsives = [
            // question 1
            "A scarf", "A hat", "A helmet", "Sunglasses",
            // question 2
            "To see your friends", " To find your way home", "To check for cars and stay safe", "To take a deep breath", 
            // question 3
            "To make your hands smell nice", "To keep your food warm", "To remove germs and stay healthy", "To dry your hands", 
            // question 4
            "Keep it to yourself", "Talk to a trusted adult", "Get angry at others", "Ignore it forever", 
            // question 5
            "Eating with your eyes closed", "Playing computer games", "Running as fast as you can", "Paying attention to how you feel and what’s around you"
        ],
        answers = [
            // question 1
            "c", 
            // question 2 
            "c", 
            // question 3 
            "c", 
            // question 4 
            "b", 
            // question 5 
            "d"
        ]

    ],

    history = [
        questions =[
            //question 1
            "What is a traditional Scottish musical instrument?", 
            //question 2
            "Who wrote the poem Auld Lang Syne?",
            //question 3
            "What was Alexander Graham Bell famous for inventing?",
            //question 4
            "What is the name of the famous Scottish lake said to have a monster?",
            //question 5
            "What is the name of the castle in the centre of Edinburgh?"
        ],
        responsives = [
            // question 1
            "Violin", "Banjo", "Bagpipes", "Trumpet",
            // question 2
            "Walter Scott", "Robert Burns", "William Wallace", "J.K. Rowling", 
            // question 3
            "The steam engine", "The aeroplane", "The telephone", "The television", 
            // question 4
            "Loch Tay", "Loch Lomond", "Loch Ness", "Loch Fyne", 
            // question 5
            "Stirling Castle", "Balmoral Castle", "Inverness Castle", "Edinburgh Castle"
        ],
        answers = [
            // question 1
            "c", 
            // question 2 
            "b", 
            // question 3 
            "c", 
            // question 4 
            "c", 
            // question 5 
            "d"
        ]
    ],

    social = [
        questions =[
            //question 1
            "What should you do if you see someone sitting alone at playtime?", 
            //question 2
            "How can you show empathy to a friend who is feeling sad?",
            //question 3
            "Why is it important to include everyone in group activities?",
            //question 4
            "What is the best way to solve a disagreement with a friend?",
            //question 5
            "What should you do if you see someone being bullied?"
        ],
        responsives = [
            // question 1
            "Invite them to play with you", "Walk away quickly", "AppTell the teacher to ignore themle", "Laugh at them",
            // question 2
            "Ignore them", "Tell them to cheer up", "Listen and say you understand", "Change the subject", 
            // question 3
            "So no one feels left out", "So the game ends quickly", "Because the teacher says so", "To win the game faster", 
            // question 4
            "Shout until they agree", "Walk away forever", "Talk calmly and try to understand each other", "Blame them", 
            // question 5
            "Join in", "Tell an adult or teacher", "Do nothing", "Laugh with others"
        ],
        answers = [
            // question 1
            "a", 
            // question 2 
            "c", 
            // question 3 
            "a", 
            // question 4 
            "c", 
            // question 5 
            "b"
        ]
    ]
];





let currentQuiz = null;
let currentIndex = 0;
let score = 0;

function topic(selectedTopic) {
  currentQuiz = quizes[selectedTopic];
  currentIndex = 0;
  score = 0;
  location.href = "index.html#page3";
  setTimeout(quiz, 200); // Delay to allow page transition
}

function quiz() {
  if (!currentQuiz) return;
  if (currentIndex >= currentQuiz.questions.length) {
    document.querySelector(".question").innerHTML = `Quiz complete!<br>Your score: ${score} / ${currentQuiz.questions.length}`;
    document.querySelectorAll(".answer button").forEach(btn => btn.style.display = "none");
    return;
  }

  const question = currentQuiz.questions[currentIndex];
  const options = currentQuiz.responsives[currentIndex];
  const answerKey = currentQuiz.answers[currentIndex];

  document.querySelector(".question").textContent = `Q${currentIndex + 1}: ${question}`;
  const buttons = ['a', 'b', 'c', 'd'];

  buttons.forEach((btnKey, i) => {
    const btn = document.getElementById(btnKey);
    btn.style.display = "block";
    btn.disabled = false;
    btn.style.backgroundColor = '';
    btn.textContent = options[i];
    btn.onclick = () => {
      const isCorrect = btnKey === answerKey;
      btn.style.backgroundColor = isCorrect ? "lightgreen" : "salmon";
      if (isCorrect) score++;
      buttons.forEach(k => {
        document.getElementById(k).disabled = true;
      });
      setTimeout(() => {
        currentIndex++;
        quiz();
      }, 1000);
    };
  });
}
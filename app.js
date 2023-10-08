// Moveable Titles

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden, .hiddenForSections');
  hiddenElements.forEach((el) => observer.observe(el)); 
  
  //
  
  (function() {
    const myQuestions = [
      {
        question: "1)In which type of solar eclipse can we take off the eclipse glasses for a while and go out with our naked eyes?",
        answers: {
          A: "Total Solar Eclipse",
          B: "Annular Solar Eclipse",
          C: "Partial Solar Eclipse",
          D: "Hybrid Solar Eclipse "

          
         },
        correctAnswer: "A" 
      
      },
      {
        question: "2)How many types of lunar eclipses are there?",
        answers: {
          A: "1",
          B: "4",
          C: "2",
          D: "3"
        },
        correctAnswer: "C"
      },
      {
        question: "3)What is the other name of Mars?",
        answers: {
          A: "Red Planet",
          B: "Blue Planet",
          C: "Green Planet",
          D: "Yellow Planet"
         
        },
        correctAnswer: "A"
      },
      {
        question: "4)During an eclipse, the Moon's shadow races can zoom up to …",
        answers: {
          A: "400 mph",
          B: "15,000 mph",
          C: "168,000 mph",
          D: "2,000 mph"
         
        },
        correctAnswer: "D"
      },
       {
        question: "5)Which type of eclipse will be on 8 April 2024?",
        answers: {
          A: "Partial solar eclipse",
          B: "Partial lunar eclipse",
          C: "Total Solar eclipse",
          D: "Total lunar eclipse"
         
        },
        correctAnswer: "C"
      },
       {
        question: "6)In lunar eclipses … slides right between the … and the …",
        answers: {
          A: "Moon-Sun-Earth",
          B: "Earth- Sun- Moon",
          C: "Sun-Earth-Moon",
          D: "Moon-Earth-Sun"
         
        },
        correctAnswer: "B"
      },
       {
        question: "7)In which solar eclipse is only part of the Sun covered by the Moon?",
        answers: {
          A: "Total Solar Eclipse",
          B: "Annular Solar Eclipse",
          C: "Partial Solar Eclipse",
          D: "Hybrid Solar Eclipse"
         
        },
        correctAnswer: "C"
      },
       {
        question: "8)In which eclipse part of the Moon looks a bit darker compared to the rest?",
        answers: {
          A: "Partial solar eclipse",
          B: "Partial lunar eclipse",
          C: "Total Solar eclipse",
          D: "Total lunar eclipse"
         
        },
        correctAnswer: "B"
      },
       {
        question: "9)Which type of eclipse will be on 2 October 2024 ?",
        answers: {
          A: "Partial solar eclipse",
          B: "Total Solar eclipse",
          C: "Annular Solar Eclipse",
          D: "Partial lunar eclipse"
         
        },
        correctAnswer: "C"
      },
       {
        question: "10)Do you love ECLIPSES?",
        answers: {
          A: "YES!",
          B: "Not Much.",
          C: "No.",
          D: "I am not sure."
         
        },
        correctAnswer: "A"
      },
    ];
  
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
        
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
          
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
    
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "none";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
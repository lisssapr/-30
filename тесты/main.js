//  // 30.1
//  let inputElement = document.getElementById('answerInput');

//  // Добавляем обработчик события keydown к input
//  inputElement.addEventListener('keydown', function(event) {
//      // Проверяем, была ли нажата клавиша Enter (код клавиши 13)
//      if (event.key === 'Enter') {
//          // Вызываем функцию для проверки ответа
//          checkAnswer();
//      }
//  });

//  // Функция для проверки ответа
//  function checkAnswer() {
//      // Получаем значение из input
//      let userAnswer = inputElement.value.trim(); // trim() убирает пробелы в начале и конце строки

//      // Проводим проверку ответа (замените эту часть кода на вашу логику проверки)
//      if (userAnswer.toLowerCase() === 'правильный ответ') {
//          alert('Правильно!');
//      } else {
//          alert('Неправильно. Попробуйте еще раз.');
//      }

//      // Очищаем input после проверки
//      inputElement.value = '';
//  }



// 30.2
//  let inputElement = document.getElementById('answerInput');

//         // Функция для проверки ответа
//         function checkAnswer() {
//             // Получаем значение из input
//             let userAnswer = inputElement.value.trim(); // trim() убирает пробелы в начале и конце строки

//             // Проводим проверку ответа (замените эту часть кода на вашу логику проверки)
//             if (userAnswer.toLowerCase() === 'правильный ответ') {
//                 alert('Правильно!');
//             } else {
//                 alert('Неправильно. Попробуйте еще раз.');
//             }

//             // Очищаем input после проверки
//             inputElement.value = '';
//         }



//31

// let voprosick = ['вопрос 1?', 'вопрос 2?', 'вопрос 3?'];
//   let answers = ['ответ 1', 'ответ 2', 'ответ 3'];

//   let inputick = document.querySelectorAll('#test input');
//   let checkButton = document.querySelector('#button');

//   checkButton.addEventListener('click', function() {
//     inputick.forEach((input, index) => {
//       checkAnswer(input, answers[index]);
//     });
//   });

//   function checkAnswer(input, correctAnswer) {
//     let userAnswer = input.value.trim();

//     if (userAnswer === correctAnswer) {
//       input.classList.remove('wrong');
//       input.classList.add('right');
//     } else {
//       input.classList.remove('right');
//       input.classList.add('wrong');
//     }
//   }

// 32
// let voprosick = ['1 вопрос ?', '2 вопрос ?', '3 вопрос ?'];
// let otvetick = ['ответ 1', 'ответ 2', 'ответ 3'];

// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#button');

// // Создаем дивы с вопросами и инпутами
// voprosick.forEach((question, index) => {
//   let questionDiv = document.createElement('div');
//   questionDiv.innerHTML = `<p>${question}</p><input>`;
//   testContainer.appendChild(questionDiv);
// });

// checkButton.addEventListener('click', function() {
//   let inputick = document.querySelectorAll('#test input');
//   inputick.forEach((input, index) => {
//     checkAnswer(input, otvetick[index]);
//   });
// });

// function checkAnswer(input, correctAnswer) {
//   let userAnswer = input.value.trim();

//   if (userAnswer === correctAnswer) {
//     input.classList.remove('wrong');
//     input.classList.add('right');
//   } else {
//     input.classList.remove('right');
//     input.classList.add('wrong');
//   }
// }

// 33
// let voprosick = {
//   'Вопрос 1?': 'ответ 1',
//   'Вопрос 2?': 'ответ 2',
//   'Вопрос 3?': 'ответ 3',
// };

// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#button');

// for (let question in voprosick) {
//   let questionDiv = document.createElement('div');
//   questionDiv.innerHTML = `<p>${question}</p><input>`;
//   testContainer.appendChild(questionDiv);
// }

// checkButton.addEventListener('click', function() {
//   let inputs = document.querySelectorAll('#test input');
//   inputs.forEach((input, index) => {
//     checkAnswer(input, Object.values(voprosick)[index]);
//   });
// });

// function checkAnswer(input, correctAnswer) {
//   let userAnswer = input.value.trim();

//   if (userAnswer === correctAnswer) {
//     input.classList.remove('wrong');
//     input.classList.add('right');
//   } else {
//     input.classList.remove('right');
//     input.classList.add('wrong');
//   }
// }

// let voprosick = [
//   {
//     text: 'вопрос 1?',
//     right: 'ответ 1',
//   },
//   {
//     text: 'вопрос 2?',
//     right: 'ответ 2',
//   },
//   {
//     text: 'вопрос 3?',
//     right: 'ответ 3',
//   },
// ];

// let voprosick = [
//   {
//     text: 'вопрос 1?',
//     right: 'ответ 1',
//   },
//   {
//     text: 'вопрос 2?',
//     right: 'ответ 2',
//   },
//   {
//     text: 'вопрос 3?',
//     right: 'ответ 3',
//   },
// ];

// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#button');

// voprosick.forEach(question => {
//   let questionDiv = document.createElement('div');
//   questionDiv.innerHTML = `<p>${question.text}</p><input>`;
//   testContainer.appendChild(questionDiv);
// });

// checkButton.addEventListener('click', function() {
//   let inputs = document.querySelectorAll('#test input');
//   inputs.forEach((input, index) => {
//     checkAnswer(input, voprosick[index].right);
//   });
// });

// function checkAnswer(input, correctAnswer) {
//   let userAnswer = input.value.trim();

//   if (userAnswer === correctAnswer) {
//     input.classList.remove('wrong');
//     input.classList.add('right');
//   } else {
//     input.classList.remove('right');
//     input.classList.add('wrong');
//   }
// }

// 34
// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#checkButton');

// testContainer.addEventListener('change', function (event) {
//   let selectedOption = event.target;
//   checkAnswer(selectedOption);
// });

// checkButton.addEventListener('click', function() {
//   let selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
//   selectedOptions.forEach(selectedOption => {
//     checkAnswer(selectedOption);
//   });
// });

// function checkAnswer(selectedOption) {
//   let isRight = selectedOption.hasAttribute('data-right');
  
//   if (isRight) {
//     selectedOption.parentElement.classList.remove('wrong');
//     selectedOption.parentElement.classList.add('right');
//   } else {
//     selectedOption.parentElement.classList.remove('right');
//     selectedOption.parentElement.classList.add('wrong');
//   }
// }

// let testContainer = document.querySelector('#test');

//   testContainer.addEventListener('change', function (event) {
//     let selectedOption = event.target;
//     checkAnswer(selectedOption);
//   });

//   function checkAnswer(selectedOption) {
//     let isRight = selectedOption.hasAttribute('data-right');
    
//     if (isRight) {
//       selectedOption.parentElement.classList.remove('wrong');
//       selectedOption.parentElement.classList.add('right');
//     } else {
//       selectedOption.parentElement.classList.remove('right');
//       selectedOption.parentElement.classList.add('wrong');
//     }
//   }

35
// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#checkButton');
// let answers = [0, 1, 2];

// testContainer.addEventListener('change', function (event) {
//   let selectedOption = event.target;
//   checkAnswer(selectedOption);
// });

// checkButton.addEventListener('click', function() {
//   let selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
//   selectedOptions.forEach(selectedOption => {
//     checkAnswer(selectedOption);
//   });
// });

// function checkAnswer(selectedOption) {
//   let selectedQuestionIndex = parseInt(selectedOption.getAttribute('data-index'));
//   let isRight = answers[selectedQuestionIndex] == selectedOption.parentElement.querySelectorAll('input[type="radio"]').length - 1;
  
//   if (isRight) {
//     selectedOption.parentElement.classList.remove('wrong');
//     selectedOption.parentElement.classList.add('right');
//   } else {
//     selectedOption.parentElement.classList.remove('right');
//     selectedOption.parentElement.classList.add('wrong');
//   }
// }

// 36
// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#checkButton');

// let questions = [
//   {
//     text: 'вопрос 1?',
//     right: 0,
//     variants: [
//       'вариант 1',
//       'вариант 2',
//       'вариант 3'
//     ]
//   },
//   {
//     text: 'вопрос 2?',
//     right: 1,
//     variants: [
//       'вариант 1',
//       'вариант 2',
//       'вариант 3'
//     ]
//   },
//   {
//     text: 'вопрос 3?',
//     right: 2,
//     variants: [
//       'вариант 1',
//       'вариант 2',
//       'вариант 3'
//     ]
//   },
// ];


// questions.forEach((question, index) => {
//   let questionDiv = document.createElement('div');
//   questionDiv.innerHTML = `<p>${question.text}</p>`;

//   question.variants.forEach((variant, variantIndex) => {
//     let label = document.createElement('label');
//     let input = document.createElement('input');
//     input.type = 'radio';
//     input.name = `question${index}`;
//     input.value = variantIndex;
//     label.appendChild(input);
//     label.appendChild(document.createTextNode(` ${variant}`));
//     questionDiv.appendChild(label);
//   });

//   testContainer.appendChild(questionDiv);
// });

// checkButton.addEventListener('click', checkAnswers);

// function checkAnswers() {
//   let questionDivs = document.querySelectorAll('#test > div');
  
//   questionDivs.forEach((questionDiv, questionIndex) => {
//     let selectedOption = questionDiv.querySelector('input[type="radio"]:checked');
//     if (!selectedOption) return; 

//     let isRight = parseInt(selectedOption.value) === questions[questionIndex].right;
//     highlightAnswer(questionDiv, isRight);
//   });
// }

// function highlightAnswer(questionDiv, isRight) {
//   questionDiv.classList.remove('right', 'wrong');
//   questionDiv.classList.add(isRight ? 'right' : 'wrong');
// }

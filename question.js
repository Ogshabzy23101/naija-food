const quesBtn = document.querySelectorAll('.ques-btn')
const questionSec = document.querySelectorAll('.question')
quesBtn.forEach(function (btn) {

 btn.addEventListener('click', function (e) {
  
  const question = e.currentTarget.parentElement.parentElement
  if (!question.classList.contains('show-text')) {
   question.classList.add('show-text')
  } else {
   question.classList.remove('show-text')
  }
  
  questionSec.forEach(function (quest) {
   if (quest !== question) {
    quest.classList.remove('show-text')
   }
  })
  
 })
})
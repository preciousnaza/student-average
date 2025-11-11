let nameone = document.querySelector('.nameone')
let nametwo = document.querySelector('.nametwo')
let emailone = document.querySelector('.emailone')
let submitBtn = document.querySelector('.submit')
let submitted  = document.querySelector('.end-message')
let firstForm = document.querySelector('.form-container')
let scoreBtn = document.querySelector('.score-btn')
let myForm = document.querySelector('.first-form')
let secondForm = document.querySelector('.second-form')
let scoreSubmit = document.querySelector('.score-submit')
let scoreValue = document.querySelectorAll('.scorevalue')
let totalScore = document.querySelector('.total-score')
let lastText = document.querySelector('.display-score')


submitBtn.addEventListener('click',function() {
    let firstname = nameone.value
    let lastname = nametwo.value
    let email = emailone.value
   
    console.log(firstname)
    student = [];
    let list = {Name:firstname + ' ' +  lastname, Email:email}
    student.push(list)

    firstForm.style.display = 'none'
    submitted.style.display = 'flex'
   
 })

 scoreBtn.addEventListener('click', function(){
    myForm.id = 'form'
    secondForm.style.display = 'flex'
 })

//TOTAL SCORE
 scoreSubmit.addEventListener('click', function(){
    let firstname = nameone.value
    let lastname = nametwo.value


      let number = Array.from(scoreValue).map(score =>{
        let trimValue = score.value.trim()   
        var num  =  Number(trimValue) 
        return isNaN(num) ? 0:num
      })
      console.log(number)
      let addedScore = number.reduce(function(acc,current){
         return acc + current
      },0)
      let total = addedScore/number.length

      totalScore.style.display = 'flex'
      secondForm.style.display = 'none'
      lastText.innerHTML ='Dear ' + firstname + ' ' + lastname + ' your total score is ' + total

 })


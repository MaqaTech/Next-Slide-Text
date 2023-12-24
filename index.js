var  historyBtn = document.getElementById("history-tab")

var visionBtn = document.getElementById("vision-tab")

var goalsBtn = document.getElementById("goals-tab")



var vision = document.querySelector(".vision-text")

var goals = document.querySelector(".goals-text")



var historyt = document.querySelector(".history-text")



visionBtn.addEventListener("click" , function(){
goals.style.display = 'none'
historyt.style.display = 'none'
vision.style.display = 'block'
visionBtn.style.border = '2px solid blue'
visionBtn.style.transform = 'scale(1.1)'
visionBtn.style.transition = '0.5s ease'
historyBtn.style.border = '1px solid lightgrey'
historyBtn.style.transform = 'scale(1)'
historyBtn.style.transition = '0.5s ease'
goalsBtn.style.border = '1px solid lightgrey'
goalsBtn.style.transform = 'scale(1)'
goalsBtn.style.transition = '0.5s ease'
})

historyBtn.addEventListener("click" , function(){
goals.style.display = 'none'
historyt.style.display = 'block'
vision.style.display = 'none'
visionBtn.style.transform = 'scale(1)'
visionBtn.style.border = '1px solid lightgrey'
visionBtn.style.transition = '0.5s ease'
historyBtn.style.border = '2px solid blue'
historyBtn.style.transform = 'scale(1.1)'
historyBtn.style.transition = '0.5s ease'
goalsBtn.style.border = '1px solid lightgrey'
goalsBtn.style.transform = 'scale(1)'
goalsBtn.style.transition = '0.5s ease'
})

goalsBtn.addEventListener("click" , function(){
goals.style.display = 'block'
historyt.style.display = 'none'
vision.style.display = 'none'
visionBtn.style.border = '1px solid lightgrey'
visionBtn.style.transform = 'scale(1)'
visionBtn.style.transition = '0.5s ease'
goalsBtn.style.border = '2px solid blue'
goalsBtn.style.transform = 'scale(1.1)'
goalsBtn.style.transition = '0.5s ease'
historyBtn.style.border = '1px solid lightgrey'
historyBtn.style.transform = 'scale(1)'
historyBtn.style.transition = '0.5s ease'
})

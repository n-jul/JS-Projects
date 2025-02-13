const counter = document.getElementById("counter")
document.getElementById("increment").addEventListener('click', function(){
    counter.textContent=parseInt(counter.textContent)+1
})
document.getElementById("decrement").addEventListener('click', function(){
    counter.textContent=parseInt(counter.textContent)-1
})
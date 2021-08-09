window.onload = function() {

    const counter = document.getElementById('counter');
    const decrement = document.querySelector(".decrement");
    const increment = document.querySelector(".increment");
    
    let count = 0;
    
    increment.addEventListener("click", () => {
        count++;
        counter.innerHTML = count;
    });
    decrement.addEventListener("click", () => {
        count = count>0 ? --count : 0;
        counter.innerHTML = count;
        
    });
}


const throttle = (func, limit) => {
    let lastCall = 0 
    return function (...args){
        let now = Date.now();  
        if(now-lastCall >= limit){
            lastCall = now;
            func(...args);
        }
    }
}

const handleThrottledClick = throttle(() => {
    console.log("Throttled Button Clicked!", new Date().toLocaleTimeString());
  }, 5000);
  
document.getElementById('throttleButton').addEventListener('click', handleThrottledClick)


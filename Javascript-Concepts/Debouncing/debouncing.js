// Function that waits until the user stops triggering it
const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };
  

  const onSearch = debounce((query) => {
    console.log("Searching for:", query);
  }, 3000);
  
  document.getElementById("debounceInput").addEventListener("input", (e) => {
    onSearch(e.target.value);
  });
  
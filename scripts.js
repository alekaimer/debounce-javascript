const debounceEvent = (fn, delay = 1000, time) => 
  (...args) =>
    clearTimeout(time, time = setTimeout(()=> fn(...args), delay));

const filterUsers = async (name) => 
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
  .then(response => response.json());

function handleKeyUp(event) {
  event.target.value.trim().length > 0 &&
  filterUsers(event.target.value).then((users) =>
    console.log(users.map(user => user.name))
  );
}

document.querySelector("input").addEventListener("keyup", debounceEvent(handleKeyUp, 2000));

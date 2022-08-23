document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    handleTask(e.target.new-task-description.value)
  })
});

function handleTask(task){
  let p = document.createElement('li');
  let btn =document.createElement('button');
  btn.textContent = 'x';
  p.textContent = task;
  document.querySelector('#tasks').appendChild(p)
}

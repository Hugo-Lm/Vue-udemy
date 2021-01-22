const buttonGoal = document.querySelector('button');
const inputGoal = document.querySelector('input');
const listEL = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputGoal.value;
  const newGoalLine = document.createElement('li');
  newGoalLine.textContent = enteredValue;
  listEL.appendChild(newGoalLine);
  inputGoal.value = '';
};

buttonGoal.addEventListener('click', addGoal);
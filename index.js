// waiting for the page to load
document.addEventListener("DOMContentLoaded", function () {

  // getting the form
  const form = document.getElementById("create-task-form");

  // listening for submit
  form.addEventListener("submit", function (event) {

    // stop page refresh
    event.preventDefault();

    // getting the input field
    const input = document.getElementById("new-task-description");

    // get the value typed
    const task = input.value;

    // if empty, do nothing
    if (task === "") {
      return;
    }

    // creating a new list item
    const li = document.createElement("li");

    // creating a span (IMPORTANT for tests)
    const span = document.createElement("span");
    span.textContent = task;

    // appending span to li
    li.appendChild(span);

    // adding it to the list
    const ul = document.getElementById("tasks");
    ul.appendChild(li);

    // clearing input field
    input.value = "";

  });

});
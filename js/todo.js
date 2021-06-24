/* Declaring Variables */
const TASK_LIST = [];
const NEW_TASK_BTN = document.getElementById("new_task_btn");
const ADD_TASK_BTN = document.getElementById("add_task_btn");
const SEARCH_QUERY = document.getElementById("search_input");

/* Get username from URL */
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");

/* Setting Date and Greting user */
document.getElementById(
  "greeting"
).innerHTML = `<span>Welcome,</span> <br /> <h3>${username}</h3>`;
document.getElementById("date").innerHTML = moment().format("MMMM Do");
document.getElementById("day").innerHTML = moment().format("dddd") + ",";

/* Filtering Results based on user input */
SEARCH_QUERY.onkeyup = () => {
  /* Declaring Variables */
  let query = SEARCH_QUERY.value.toUpperCase();
  let table = document.getElementById("task_list_table");
  let tr = table.getElementsByTagName("tr");

  /* Looping through row elements */
  for (i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let innerText = td.textContent || td.innerText;
      /* HIde or show row elements if they match user input */
      if (innerText.toUpperCase().indexOf(query) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

/* Fired when add task button is clicked */
ADD_TASK_BTN.addEventListener("click", (e) => {
  let newTask = document.getElementById("task_name").value;
  /* Field should not be empty */
  if (newTask === "") {
    alert("Please Fill task Name");
    return;
  } else {
    /* Push to array */
    TASK_LIST.push(newTask);
  }

  /* Creating new task element */
  let newItem = document.createElement("tr");
  newItem.classList.add("slide_in");
  newItem.innerHTML = `
            <td contenteditable="true" class="task_text" >
            ${newTask}
              </td>
            <td class="list_item_options"> 
                <p class="edit_btn"><i class="far fa-edit"></i></p>
                <p class="delete_btn" ><i class="fas fa-times"></i></p>
            </td>
            `;
  modal.style.display = "none";
  /* Appending to task to table */
  document.getElementById("task_list_table").appendChild(newItem);

  let edit_button = document.getElementsByClassName("edit_btn");
  let delete_button = document.getElementsByClassName("delete_btn");

  for (let i = 0; i < edit_button.length; i++) {
    /* Action to edit the task */
    edit_button[i].addEventListener("click", (e) => {
      let td = e.target.closest("td");
      td.parentElement.children[0].focus();
    });

    /* Action to delete task */
    delete_button[i].addEventListener("click", (e) => {
      let table = document.getElementById("task_list_table");
      let tr = e.target.closest("tr");
      TASK_LIST.splice(tr.rowIndex, 1);
      table.removeChild(tr);
    });
  }
});

const modal = document.getElementById("task_input_modal");
/* Show modal on button click  */
NEW_TASK_BTN.onclick = function () {
  modal.style.display = "block";
  document.getElementById("task_name").value = "";
  document.getElementById("task_name").focus();
};
/* Hide Modal */
document.getElementsByClassName("close")[0].onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

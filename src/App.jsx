
import './App.css';
function addText() {
  var inputText = document.getElementById("textInput").value;
  if (inputText.trim() !== '') {
  var displayArea = document.getElementById("displayArea");

  
  var taskBox = document.createElement("div");
  taskBox.textContent = inputText;
  taskBox.className = "taskBox";

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteButton";
  deleteButton.onclick = function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
  };
  taskBox.appendChild(deleteButton);

  displayArea.appendChild(taskBox);

  document.getElementById("textInput").value = "";
} else {
  alert("Please enter a valid task.");
}
}
function App() {
  return (
      <div class="box">
        <h2>TO DO LIST</h2>
        <div class="task">
            <input type="text" id="textInput" placeholder="Type The Task..."/>
            <button onClick={addText} class="button button1">Add</button>
            <h2 class="tas">Added task:</h2>
            <div id="displayArea"></div>
        </div>
    </div>

  )
}

export default App;
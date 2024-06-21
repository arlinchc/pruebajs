const tareas = []; 
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const agregarBtn = document.getElementById('agregar');
const taskList = document.getElementById('taskList');
document.addEventListener('DOMContentLoaded', () => {
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nuevaTarea = taskInput.value.trim();
        if (nuevaTarea !== '') {
            tareas.push(nuevaTarea);
            taskInput.value = '';
            renderTareas();
        }
        else {
            alert("Por favor, agregue una tarea")
        }
    });
    
});
function renderTareas () {
    taskList.innerHTML= "";
    tareas.forEach(function(tarea, index) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${tarea}</td>
            <td>
            <button class="btn btn-danger btn-sm" onclick="borrar(${index})">
                    <i class="fas fa-trash-alt"></i>
                    </button>
            </td>
        `;

        taskList.appendChild(tr);
    })

}
function borrar(index){
    tareas.splice(index, );
    renderTareas();
}

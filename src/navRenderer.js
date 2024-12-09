import { projects } from "./project";
import downArrowPath from "./images/arrow-down.svg";
import rightArrowPath from "./images/arrow-right.svg";

const body = document.querySelector('body');
const treeList = body.querySelector('#tree-list');

function renderProjects(){
    projects.forEach(project => {
        /* Display button for each project with the project's name */
        const projectContainer = document.createElement('div');

        const projectBtn = document.createElement('button');
        projectBtn.textContent = project.name;

        /* Display arrow to unwrap project's todos */
        const unwrapBtn = document.createElement('button');
        const arrow = new Image();
        arrow.src = rightArrowPath;
        arrow.addEventListener('click', (e) => {
            if (arrow.src === rightArrowPath){
                arrow.src = downArrowPath;
                renderTodos(project, projectContainer);
            } else {
                arrow.src = rightArrowPath;
                removeToDos(projectContainer);
            }
        });
        unwrapBtn.append(arrow);
        projectContainer.append(unwrapBtn);
        projectContainer.append(projectBtn);
        treeList.append(projectContainer);
    });
};

function renderTodos(project, parent){
    /* Display a tree like structure for the project's todos */
    const todoList = document.createElement('ul');
    project.toDo.forEach(todo => {
        const li = document.createElement('li');
        const todoBtn = document.createElement('button');
        todoBtn.textContent = todo.title;
        
        li.append(todoBtn);
        todoList.append(li);

        parent.append(todoList);
    });
};

function removeToDos(parent){
    const toDoList = parent.querySelector('ul');
    parent.removeChild(toDoList);
};

function renderTree(){
    renderProjects();
};

export {renderTree};
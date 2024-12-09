import { projects } from "./project";

const body = document.querySelector('body');

function renderProjects(){
    projects.forEach(project => {
        const para = document.createElement('p');
        para.textContent = project.name;
        body.append(para);
    });
}

export {renderProjects};
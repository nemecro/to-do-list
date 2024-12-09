import "./styles.css";
import { ToDo } from "./todo";
import { Project, projects } from "./project";

const task = new ToDo("Hello", "Hello, world", "10.12.2024", "High", "Say something", "not checked");
const project = new Project("Sample");
project.toDo.push(task);
projects.push(project);

console.log(task);
console.log(project);
console.log(projects);
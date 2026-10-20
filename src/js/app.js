import { obtenerTareas, guardarTareas } from './storage.js';

const form = document.querySelector('#task-form');
const lista = document.querySelector('#task-list');

function render() {
  lista.innerHTML = '';
  obtenerTareas().forEach((tarea) => {
    const li = document.createElement('li');
    li.textContent = tarea.txt;
    lista.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#txt');
  const list = obtenerTareas();
  list.push({ id: Date.now(), txt: input.value.trim() });
  guardarTareas(list);
  input.value = '';
  render();
});

render();

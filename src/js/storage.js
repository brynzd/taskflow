const KEY = 'taskflow_tasks';

export function obtenerTareas() {
  const d = localStorage.getItem(KEY);
  return d ? JSON.parse(d) : [];
}

export function guardarTareas(items) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

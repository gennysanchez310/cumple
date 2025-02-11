// Función para cambiar el color de las barras en el visualizador al hacer clic
function changeColor(bar) {
    const colors = ['#FF5733', '#787AE6', '#33FF57', '#FF33A1', '#33A1FF'];
    const currentColor = bar.style.backgroundColor;
    const newColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    bar.style.backgroundColor = newColor;
}

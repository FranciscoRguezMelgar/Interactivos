//ejemplo de uso
//para hacer una función parametrizada, poner <"tipos que quieras"> después del nombre
function bubbleSort(v, c) {
    for (var ii = 0; ii < v.length; ++ii) {
        for (var jj = 0; jj < v.length - 1; jj++) {
            if (c.compare(v[jj], v[jj + 1])) {
                var aux = v[jj + 1];
                v[jj + 1] = v[jj];
                v[jj] = aux;
            }
        }
    }
}
var vector = [9, 5, 1, 2, 3, 4, 7, 7, 9, 5, 4];
//crear un comparator con una función compare creada con la notación más confusa del mundo
var c = { compare: function (one, other) { return one < other; } };
bubbleSort(vector, c); //¡¡Infiere tipos!!
console.log(vector); //tal y como está hecho, el vector se cambia, paso por referencia

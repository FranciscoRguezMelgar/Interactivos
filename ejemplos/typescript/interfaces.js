//En esta función, usando la interfaz nos aseguramos de que se pueda acceder a name
function sayName(thing) {
    console.log(thing.name);
}
//ejemplo de uso
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
var c = {
    compare: function (one, other) {
        return one < other;
    }
};
bubbleSort(vector, c);
console.log(vector);

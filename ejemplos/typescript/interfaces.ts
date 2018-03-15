//Esta interfaz define un tipo, al usar este tipo como argumento de una función se dice:
//"el objeto debe contener un campo de nombre name y tipo String"
interface named{
	name:String;
}
//En esta función, usando la interfaz nos aseguramos de que se pueda acceder a name
function sayName(thing: named){
	console.log(thing.name)
}

//sayName({p:"hola"}); -> ERROR, no hay argumento name
//sayName({name:20}); -> ERROR, no es de tipo string
//sayName({name:"Antonio"}); -> FUNCIONA

//Para exigir una función en una interfaz
interface comparator{
	//esta función recibe dos números y devuelve un booleano
	compare(one:number, other:number) : boolean;
}
//ejemplo de uso
function bubbleSort(v:Array<number>, c:comparator){
	for(let ii = 0; ii < v.length; ++ii){	
		for(let jj = 0; jj < v.length-1; jj++){
			if(c.compare(v[jj], v[jj+1])){
				let aux:number = v[jj+1]
				v[jj+1] = v[jj]
				v[jj] = aux
			}
		}
	}
}

let vector: Array<number> = [9,5,1,2,3,4,7,7,9,5,4]


let c:comparator = {
	compare:(one: number, other:number) =>{
		return one < other
	}
};
bubbleSort(vector, c)
console.log(vector)//=> result: [ 9, 9, 7, 7, 5, 5, 4, 4, 3, 2, 1 ]
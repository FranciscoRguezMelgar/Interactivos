//rehacemos el ejemplo de "interfaces.ts" con tipos genéricos
interface comparator<T>{
	compare(one:T, other:T): boolean;
}

//ejemplo de uso
//para hacer una función parametrizada, poner <"tipos que quieras"> después del nombre
function bubbleSort<T> (v:Array<T>, c:comparator<T>): void{
	for(let ii = 0; ii < v.length; ++ii){	
		for(let jj = 0; jj < v.length-1; jj++){
			if(c.compare(v[jj], v[jj+1])){
				let aux:T = v[jj+1]
				v[jj+1] = v[jj]
				v[jj] = aux
			}
		}
	}
}
let vector: Array<number> = [9,5,1,2,3,4,7,7,9,5,4];
//crear un comparator con una función compare creada con la notación más confusa del mundo
let c:comparator<number> = {compare:(one:number, other:number)=>{return one < other;}};
bubbleSort(vector, c);	//¡¡Infiere tipos!!
console.log(vector)	//tal y como está hecho, el vector se cambia, paso por referencia
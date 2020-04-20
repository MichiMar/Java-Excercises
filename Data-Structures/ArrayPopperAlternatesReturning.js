// [1,2,3,4,5]
// // lo que quiero es que saque el ultimo y el primero consecutvamente
// 1
// 5
// 2
// 4
// 3

class ArrayPopper {
  constructor(arr) {
    this.arr = arr;
    this.atBeginning = true;
  }

  togglePopper() {
    this.atBeginning = !this.atBeginning;
    return this.atBeginning ? this.arr.pop() : this.arr.shift();
  }
}

const ap = new ArrayPopper([1, 2, 3, 4, 5]);

// ap.togglePopper()//? esta funcion le permite a jordan recibir respuesta de las funciones de js hechas en visual code

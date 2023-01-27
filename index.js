//Stack class definition
class Stack {
  constructor(){
    this.array = [];
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //Get the highest index value of the array
  peek() {
    return this.top;
  }

  //Push a new value to the array and update the length, top & bottom members
  push(value){

    this.array.push(value);
    this._updateMem();
    console.log(this);
  }

  //Remove the last value of the array and update the length, top & bottom members
  pop(){
    this.array.pop();
    this._updateMem();
    console.log(this);
  }

  //Check if the array is empty
  isEmpty(){
    console.log(this.array.length === 0);
  }

  //Internal function to update the object members; length, top and bottom
  _updateMem(){
    this.length = this.array.length;
    this.top = this.array[this.length - 1];
    this.bottom = this.array [0];
  }
}


//Call code starts from here...
const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');

myStack.peek();

myStack.isEmpty();

myStack.pop();
myStack.pop();
myStack.pop();

myStack.isEmpty();
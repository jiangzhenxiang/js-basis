// 数据结构中的栈
// 栈是一组数据的存放方式,特点是先进后出，后进先出

/**
 * push()	添加新元素到栈顶
 * pop()	移除栈顶的元素，同时返回被移除的元素
 */
class Stack {
  private items: number[] = [];
  // 添加元素到栈顶，也就是栈的末尾
  push(element: number) {
    this.items.push(element);
  }
  // 栈的后进先出原则，从栈顶出栈
  pop(): number {
    return this.items.pop();
  }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());



//  在浏览器里执行，可以看到函数的一层层调用
function one() {
  function two() {
    function three() {
      console.log('three');
    }
    three();
  }
  two();
}
debugger;
one();

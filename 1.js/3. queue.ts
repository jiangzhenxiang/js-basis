/**
 * 队列是一种操作受限制的线性表
特殊之处在于它只允许在表的前端进行删除操作，而在表的后端进行插入操作
进行插入操作的端称为队尾，进行删除操作的端称为队头
因为队列只允许在一端插入,在另一端删除，所以只有最早进入队列的元素才能最先从队列中删除,故队列又称为先进先出线性表
 * 
 */

class Queue {
  private items: number[] = [];
  enqueue(element: number) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  print() {
    console.log(this.items.toString());
  }
}
let queue = new Queue();
queue.enqueue(1);
queue.print();
queue.enqueue(2);
queue.print();
queue.enqueue(3);
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();

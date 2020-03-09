/**
 * 在JS里任务队列 
 * 分成两个队列 微任务队列（小）  宏任务队列（大）
 * 紧急的尽快处理的，关联比较紧密的，放在微任务。 
 * 假如执行栈里面有多个异步任务， 将异步任务分别放到对应的任务队列。
 * 当执行栈执行完毕后，先执行微任务里面的，所有微任务执行完后，再执行宏任务里面的 
 * 
 */
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
})
async1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')


// promise函数立刻执行，然后执行then，然后执行settimeout
let p1 = new Promise(function (resolve) {
    resolve(1);
}).then(result => console.log(result));
// then为微任务，因为跟promise关系紧密
setTimeout(() => {
    console.log(2);
});

/**
 * 二维数组中的查找
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 示例
// 现有矩阵 matrix 如下，   给定 target = 5，返回 true。给定 target = 20，返回 false。
var matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]

/**
 * 解法一
 * @param {*} matrix 
 * @param {*} target 
 */
var findNumberIn2DArray1 = function (matrix, target) {
    let length = matrix.length;
    for (let i = 0; i < length; i++) {
        if (matrix[i].indexOf(target) > -1) {
            return true;
        }
    }
    return false;
};
console.log(findNumberIn2DArray1(matrix, 5))
console.log(findNumberIn2DArray1(matrix, 20))

/**
 * 解法二：利用Array.some api
 * @param {*} matrix 
 * @param {*} target 
 */
var findNumberIn2DArray2 = function (matrix, target) {
    return matrix.some(arr => arr.some(e => e === target))
};

console.log(findNumberIn2DArray2(matrix, 5))
console.log(findNumberIn2DArray2(matrix, 20))


/**
 * 解法三：先转换成字符串，在分割为一维数组，在使用includes查找target
 * @param {*} matrix 
 * @param {*} target 
 */
var findNumberIn2DArray3 = function (matrix, target) {
    return matrix.toString().split(',').includes(target.toString())
};

console.log(findNumberIn2DArray3(matrix, 5))
console.log(findNumberIn2DArray3(matrix, 20))

// var matrix = [
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
// ]
/**
 * 解法四：线性查找
 * 矩阵是有序的，从左下角来看，向上数字递减，向右数字递增。
 * 因此从左下角开始查找，当要查找数字比左下角数字大时。右移
 * 要查找数字比左下角数字小时，上移
 * @param {*} matrix 
 * @param {*} target 
 */
var findNumberIn2DArray4 = function (matrix, target) {
    let lenX = matrix.length;
    let lenY = matrix[0] ? matrix[0].length : 0;
    // 以示例矩阵为例，左下角的位置为matrix[4][0]。
    for (let i = lenX - 1, j = 0; i >= 0 && j < lenY;) {
        if (target == matrix[i][j]) {
            return true
        }
        // 查找数字比左下角数字大时。右移
        if (target > matrix[i][j]) {
            j++;
        }
        //  查找数字比左下角数字小时，上移
        if (target < matrix[i][j]) {
            i--;
        }
    }
    return false;
};

/**
 * 两数之和（easy）
 * 
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/two-sum
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
var nums = [2, 7, 11, 15];
var target = 9;

/**
 * 方法一：
 * 时间复杂度：O(n^2)
 * 暴力法：2次循环
 * @param {*} nums 
 * @param {*} target 
 */
var twoSum1 = function (nums, target) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                arr = [i, j]
            }
        }
    }

    return arr;
};
// console.log(twoSum1(nums, target))

/**
 * 方法二：
 * 时间复杂度：O(n)。
 * 边存边比较，减少查询时间
 * 每遍历到一个元素就计算该元素与 target 之间的差值 dif，然后以 dif 为下标到数组temp中寻找。
 * 如果 temp[dif] 有值，则返回两个元素在数组 nums 的下标。否则将当前元素存入temp中。
 * @param {*} nums 
 * @param {*} target 
 */
var twoSum2 = function (nums, target) {
    let temp = {};
    for (let index = 0; index < nums.length; index++) {

        let dif = target - nums[index];
        if (temp[dif] != undefined) {
            return [temp[dif], index]
        } else {
            temp[nums[index]] = index;
        }
    }
}

console.log(twoSum2(nums, target))

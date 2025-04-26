/**
 * 数组对象是指一组数据的集合，其中的每个数据被称作元素
 * js的数组可以存放任意类型的元素，例如字符串，数字，布尔值等
 * 数组的字面量是方括号 [ ]
 */


/**
 * 返回数组中的最大值
 * @param {number[]} arr - 数字数组
 * @returns {number}
 */
function getMax(arr) {
    // 用户实现
}


/**
 * 返回去重后的数组
 * @param {any[]} arr - 任意类型数组
 * @returns {any[]}
 */
function unique(arr) {
    // 用户实现
}


/**
 * 将嵌套数组扁平化（支持任意层数）
 * @param {any[]} arr - 可能包含嵌套的数组
 * @returns {any[]}
 */
function flatten(arr) {
    // 用户实现
}


/**
* 按条件分组并统计数量
* @param {any[]} arr - 数组
* @param {(item: any) => string} groupFn - 分组函数
* @returns {Record<string, number>} - 分组结果（如 { 'A': 2, 'B': 1 }）
*/
function groupByCount(arr, groupFn) {
    // 用户实现
}


/**
 * 将数组按指定大小分块
 * @param {any[]} arr - 数组
 * @param {number} size - 每块大小
 * @returns {any[][]} - 分块后的二维数组
 */
function chunk(arr, size) {
    // 用户实现
}

/**
 * 模拟数组的 map 方法
 * @param {any[]} arr - 原数组
 * @param {(item: any, index: number) => any} fn - 映射函数
 * @returns {any[]} - 新数组
 */
function myMap(arr, fn) {
    // 用户实现（不能用 arr.map）
}


/**
 * 模拟数组的 filter 方法
 * @param {any[]} arr - 原数组
 * @param {(item: any, index: number) => boolean} fn - 过滤函数
 * @returns {any[]} - 过滤后的数组
 */
function myFilter(arr, fn) {
    // 用户实现（不能用 arr.filter）
}


/**
* 模拟数组的 reduce 方法
* @param {any[]} arr - 原数组
* @param {(acc: any, item: any, index: number) => any} fn - 累加函数
* @param {any} initialValue - 初始值
* @returns {any} - 累加结果
*/
function myReduce(arr, fn, initialValue) {
    // 用户实现（不能用 arr.reduce）
}


/**
* 模拟数组的 find 方法
* @param {any[]} arr - 原数组
* @param {(item: any, index: number) => boolean} fn - 查找函数
* @returns {any | undefined} - 找到的元素或 undefined
*/
function myFind(arr, fn) {
    // 用户实现（不能用 arr.find）
}


/**
* 模拟数组的 some 方法
* @param {any[]} arr - 原数组
* @param {(item: any, index: number) => boolean} fn - 条件函数
* @returns {boolean} - 是否至少有一个元素满足条件
*/
function mySome(arr, fn) {
    // 用户实现（不能用 arr.some）
}


/**
* 模拟数组的 every 方法
* @param {any[]} arr - 原数组
* @param {(item: any, index: number) => boolean} fn - 条件函数
* @returns {boolean} - 是否所有元素都满足条件
*/
function myEvery(arr, fn) {
    // 用户实现（不能用 arr.every）
}


/**
* 模拟数组的 flat 方法（只展开一层）
* @param {any[]} arr - 原数组
* @returns {any[]} - 展开后的数组
*/
function myFlat(arr) {
    // 用户实现（不能用 arr.flat）
}


module.exports = {
    getMax,
    unique,
    flatten,
    groupByCount,
    chunk
}
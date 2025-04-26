const {
    getMax,
    unique,
    flatten,
    groupByCount,
    chunk
} = require("../built-in-objects/Array")


describe("数组函数测试", () => {
    // 任务 1：求最大值
    describe("getMax", () => {
        it("应返回数组最大值", () => {
            expect(getMax([1, 2, 3])).toBe(3);
            expect(getMax([-1, -5, 0])).toBe(0);
        });
        it("空数组应返回 undefined", () => {
            expect(getMax([])).toBeUndefined();
        });
    });

    // 任务 2：去重
    describe("unique", () => {
        it("应去除重复元素", () => {
            expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
            expect(unique(["a", "b", "a"])).toEqual(["a", "b"]);
        });
        it("应处理混合类型", () => {
            expect(unique([1, "1", true, true])).toEqual([1, "1", true]);
        });
    });

    // 任务 3：扁平化
    describe("flatten", () => {
        it("应扁平化嵌套数组", () => {
            expect(flatten([1, [2, [3]]])).toEqual([1, 2, 3]);
            expect(flatten([[1], [], [2, [3]]])).toEqual([1, 2, 3]);
        });
    });

    // 任务 4：分组统计
    describe("groupByCount", () => {
        it("应按规则分组并计数", () => {
            const arr = ["apple", "banana", "apple"];
            const result = groupByCount(arr, (item) => item);
            expect(result).toEqual({ apple: 2, banana: 1 });
        });
    });

    // 任务 5：分块
    describe("chunk", () => {
        it("应按大小分块", () => {
            expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
            expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
        });
        it("应处理不足大小的块", () => {
            expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
        });
    });
});


describe("数组基础方法模拟实现", () => {
    // 任务 1: map
    describe("myMap", () => {
        it("应正确映射数组", () => {
            const arr = [1, 2, 3];
            const result = myMap(arr, (x) => x * 2);
            expect(result).toEqual([2, 4, 6]);
        });
        it("应传递索引参数", () => {
            const arr = ["a", "b"];
            const result = myMap(arr, (x, i) => `${x}${i}`);
            expect(result).toEqual(["a0", "b1"]);
        });
    });

    // 任务 2: filter
    describe("myFilter", () => {
        it("应过滤符合条件的元素", () => {
            const arr = [1, 2, 3, 4];
            const result = myFilter(arr, (x) => x % 2 === 0);
            expect(result).toEqual([2, 4]);
        });
    });

    // 任务 3: reduce
    describe("myReduce", () => {
        it("应正确累加数组", () => {
            const arr = [1, 2, 3];
            const result = myReduce(arr, (sum, x) => sum + x, 0);
            expect(result).toBe(6);
        });
        it("无初始值时使用第一个元素作为初始值", () => {
            const arr = [1, 2, 3];
            const result = myReduce(arr, (sum, x) => sum + x);
            expect(result).toBe(6);
        });
    });

    // 任务 4: find
    describe("myFind", () => {
        it("应返回第一个匹配的元素", () => {
            const arr = [1, 2, 3];
            const result = myFind(arr, (x) => x > 1);
            expect(result).toBe(2);
        });
        it("未找到时返回 undefined", () => {
            const arr = [1, 2, 3];
            const result = myFind(arr, (x) => x > 3);
            expect(result).toBeUndefined();
        });
    });

    // 任务 5: some
    describe("mySome", () => {
        it("应返回 true（至少一个元素满足条件）", () => {
            const arr = [1, 2, 3];
            const result = mySome(arr, (x) => x % 2 === 0);
            expect(result).toBe(true);
        });
        it("应返回 false（无元素满足条件）", () => {
            const arr = [1, 3, 5];
            const result = mySome(arr, (x) => x % 2 === 0);
            expect(result).toBe(false);
        });
    });

    // 任务 6: every
    describe("myEvery", () => {
        it("应返回 true（所有元素满足条件）", () => {
            const arr = [2, 4, 6];
            const result = myEvery(arr, (x) => x % 2 === 0);
            expect(result).toBe(true);
        });
        it("应返回 false（至少一个元素不满足条件）", () => {
            const arr = [2, 4, 5];
            const result = myEvery(arr, (x) => x % 2 === 0);
            expect(result).toBe(false);
        });
    });

    // 任务 7: flat
    describe("myFlat", () => {
        it("应展开一层嵌套数组", () => {
            const arr = [1, [2, 3], [4]];
            const result = myFlat(arr);
            expect(result).toEqual([1, 2, 3, 4]);
        });
    });
});
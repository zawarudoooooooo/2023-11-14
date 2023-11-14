let arr = [1,"str",false,undefined,null,"",[1,2,3],{name:"多多普洱",type:"茶的魔手",money:40},{name:"多多綠茶",type:"麻古",detail:["三分糖","少冰","五十塊"]}] ;

console.log(arr)
console.log(arr[7])
console.log(arr[8].detail)

let arr2 = ["Today", "is", "a", "good", "day!!!"]
console.log(arr2)
//加東西(從尾開始)
arr2.push("OhYeah")
console.log(arr2)
//刪東西(從尾開始)
arr2.pop()
// console.log(arr2.pop())
console.log(arr2)
//加東西(從頭開始)
arr2.unshift("GOD!")
console.log(arr2)
//刪東西(從頭開始)
arr2.shift()
//console.log(arr2.shift())
console.log(arr2)

let arr3 = ["Today", "is", "a", "good", "day!!!"]
//從自選地方增刪
//splice(要操作索引位置,索引值開始要操作的元素數量,要添加的內容(沒有則是刪除))
//找到陣列索引位置[1]並替換成"are"
arr3.splice(1,1,"are")
console.log(arr3)
//找到陣列索引位置[1]並刪除
arr3.splice(1,1)
console.log(arr3)
//找到索引位置[1]並在此新增元素
arr3.splice(1,0,"cool","weather")
console.log(arr3)
//判斷陣列是否包含條件字串
console.log(arr3.includes("Today"))
//陣列組成字串
console.log(arr3.join(" "))

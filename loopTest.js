let teaArr = ["紅茶","綠茶","青茶","普洱茶","麥茶"]
console.log(teaArr)

// 陣列反轉
// teaArr.reverse()
// console.log(teaArr)

let reArr = []
for(i=teaArr.length-1 ; i>=0 ; i--){
    reArr.push(teaArr[i])
}
console.log(reArr)

for(let i = 0 ; i < teaArr.length ; i++){
    let text = ""
    for(let j = 0 ; j<i ; j++){
        text = teaArr[i]
        teaArr[i] = teaArr[j]
        teaArr[j] = text
    }
}
console.log(teaArr)

//100以內的奇數
let arr = []
for(i=1 ; i<=100 ; i+=2){
    arr.push(i)
}
console.log(arr)

//100以內的偶數
let arr1 = []
for(i=2 ; i<=100 ; i+=2){
    arr1.push(i)
}
console.log(arr1)
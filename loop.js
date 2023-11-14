//for loop
for(let i = 0 ; i < 10 ; i++){
    console.log(i)
}

for(let i = 10 ; i >0 ; i--){
    console.log(i)
}

//while loop
let i = 10 ;
while(i>0){
    console.log(i)
    i--
}

//巢狀迴圈
for(let i = 0 ; i<3 ; i++){
    for(let j = 0 ; j<3 ; j++){
        console.log(j+i)
    }
}

//for each ， 對陣列內進行遍歷
let arr = [11,22,33,44,55]
// arr.forEach(function(item){
//item 給每個元素取的變數
    arr.forEach(item=>{
        console.log(item)
    })

//arr.forEach(function(item,index){
//index 每個元素索引值
arr.forEach((item,index)=>{
    console.log(index)
})

//reduce 精簡
//arr.reduce(function(){})
//全元素加總後，精簡成一個值
let arr2 = [1,2,3,4,5]
let newArr2 = arr2.reduce((total,item)=>{
    console.log(total)
    return total+item;
})
console.log(newArr2)

//filter 過濾
//會改變陣列長度
let filterArr = arr2.filter(item=>{
    //過濾出大於3的元素，並且回傳新陣列
    return item >3
})
console.log(filterArr)

//map 映射
//陣列長度不改變
//加入條件，讓對照條件較不同
let mapArr = arr2.map(item =>{
    return item + "杯珍奶"
})
console.log(mapArr)
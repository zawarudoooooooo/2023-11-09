let x = 5 ;
const xx = 4 ;
let y = "str";
let boo1 = true;
let arr = [ ];
let obj = {
    name : "Jo",
    age : 18 ,
    sex : "men"
};

//type of 使用
console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(boo1))
console.log(typeof(arr))
console.log(typeof(obj))

//印出變數
console.log(x)
console.log(y)
console.log(boo1)
console.log(arr)
console.log(obj)

//查看物件中的屬性
console.log(obj.name)
console.log(obj.age)
console.log(obj.sex)

//運算子
console.log(x+xx)

//轉型-字串轉整數
let str = "43"
// let str = "43a"
// let str = "0123"
// let str = "123.456"
// let str = null
// let str = ""
// let str = ''

console.log("parseInt"+typeof(parseInt(str)))
console.log(parseInt(str))
console.log("Number"+typeof(Number(str)))
console.log(Number(str))

const spanText = document.getElementById("text");

//查看標籤屬性
console.dir(spanText)
//innertext只能插入文字
spanText.innerText = "xxx";
spanText.innerHTML

const aTest = document.getElementById("aTest");
aTest.innerHTML = "<a href=https://www.pinterest.com/>Pinterest</a>"


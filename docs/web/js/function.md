---
description: js常用函数
---

# js常用函数

1、split() 方法用于把一个字符串分割成字符串数组。 如：
```javascript
var str="how are you doing today?"
console.log(str.split(" "));     //["how", "are", "you", "doing", "today?"]
console.log(str.split(" ",3));   //["how", "are", "you"]
```

2、join() 方法用于把数组中的所有元素放入一个字符串。如：
```javascript
var arr = ["George","John","Thomas"];
console.log(arr.join());         //"George,John,Thomas"
console.log(arr.join("."));      //"George.John.Thomas"
```

3、concat() 方法用于连接两个或多个数组。如：
```javascript
var a = [1,2,3], b=[4,5,6]
console.log(a.concat(4,5));  //[1, 2, 3, 4, 5]
console.log(a.concat(b));    //[1, 2, 3, 4, 5, 6]
```

4、pop() 方法用于删除并返回数组的最后一个元素。如：
```javascript
var arr = ["George","John","Thomas"];
console.log(arr.pop());     //"Thomas"
console.log(arr);           //["George", "John"]
```

5、push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。如：
```javascript
var arr = ["George","John","Thomas"];
console.log(arr.push("tom"));   //4
console.log(arr);               //["George", "John", "Thomas", "tom"]
```

6、reverse() 方法用于颠倒数组中元素的顺序。如：
```javascript
var arr = ["George","John","Thomas"];
console.log(arr.reverse());     //["tom", "Thomas", "John", "George"]
```

7、shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。(如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值。请注意，该方法不创建新数组，而是直接修改原有的 arrayObject)如：
```javascript
var arr = ["George","John","Thomas"];
console.log(arr.shift());       //"tom"
```

8、slice() 方法可从已有的数组中返回选定的元素。语法：arrayObject.slice(start,end)
start	必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。<br>
end	可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
```javascript
var arr = ["George","John","Thomas"];
console.log(arr.slice(1));   //["John", "George"]
console.log(arr.slice(0,2)); //["Thomas", "John"]
```

9、sort() 方法用于对数组的元素进行排序。（对数组元素首字母或首数字排序）如：
```javascript
var arr=["George","John","Thomas","James","Adrew","Martin"];
console.log(arr.sort());  //["Adrew", "George", "James", "John", "Martin", "Thomas"]
```

```javascript
对数字进行排序需借助函数
var arr=[10,5,40,25,1000,1];
function sortNumber(a,b){
  return a - b
}
console.log(arr.sort(sortNumber));   //[1, 5, 10, 25, 40, 1000]
```

10、splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。如：
```javascript
var arr=["George","John","Thomas","James","Adrew","Martin"];
//删除从 index 2 ("Thomas") 开始的三个元素，并添加一个新元素 ("William") 来替代被删除的元素
console.log(arr.splice(2,3,"William"));  //["Thomas", "James", "Adrew"]
console.log(arr);    //["George", "John", "William", "Martin"]
```

11、toString() 方法可把数组转换为字符串，并返回结果。如：
```javascript
var arr=["George","John","Thomas","James","Adrew","Martin"];
console.log(arr.toString());   //"George,John,Thomas,James,Adrew,Martin"
```

12、toLocaleString() 把数组转换为本地字符串。如：
```javascript
var arr=["George","John","Thomas","James","Adrew","Martin"];
console.log(arr.toLocaleString());   //"George,John,Thomas,James,Adrew,Martin"
```

13、unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。（注：unshift() 方法无法在 Internet Explorer 中正确地工作！）如：
```javascript
var arr=["George","John","Thomas"];
console.log(arr.unshift("William"));    //4
console.log(arr);                       //["William", "George", "John", "Thomas"]
```

14、valueOf() 方法返回 Array 对象的原始值。如：
```javascript
var arr=["George","John","Thomas"];
console.log(arr.valueOf());  //["George","John","Thomas"]
```

15、js数据类型
`字符串、数字、布尔、数组、对象、Null、Undefined`


### JS Math 对象
具体的可查看：http://www.w3school.com.cn/jsref/jsref_obj_math.asp  ,下面列举几个主要的<br><br>
1、Math.abs(x) 方法可返回数的绝对值。如：
```javascript
document.write(Math.abs(7.25))             //7.25
document.write(Math.abs(-7.25))            //7.25
document.write(Math.abs(7.25-10))          //2.75
```

2、Math.ceil(x) 方法可对一个数进行上舍入。如：
```javascript
document.write(Math.ceil(0.60))         // 1
document.write(Math.ceil(5.1))          // 6
document.write(Math.ceil(-5.1))         // -5
document.write(Math.ceil(-5.9))         //-5
```

3、Math.floor(x) 方法可对一个数进行下舍入。如：
```javascript
document.write(Math.floor(0.60))         //0
document.write(Math.floor(0.40))         //0
document.write(Math.floor(5))            //5
document.write(Math.floor(-5.9))         //-6
```

4、Math.max(x,y) 方法可返回两个指定的数中带有较大的值的那个数。如：
```javascript
document.write(Math.max(5,7))            //7
document.write(Math.max(-3,5))           //5
document.write(Math.max(-3,-5))          //-3
```

5、Math.min(x,y) 方法可返回指定的数字中带有最低值的数字。如：
```javascript
document.write(Math.max(5,7))            //5
document.write(Math.max(-3,5))           //-3
document.write(Math.max(-3,-5))          //-5
```

6、Math.random() 方法可返回介于 0 ~ 1 之间的一个随机数。如：
`document.write(Math.random())     //0.17967150011099875`
7、Math.round(x) 方法可把一个数字舍入为最接近的整数。如：
```javascript
document.write(Math.round(0.60))        //1
document.write(Math.round(0.50))        //1
document.write(Math.round(0.49))        //0
document.write(Math.round(-4.40))       //-4
document.write(Math.round(-4.60))       //-5
```

8、object.toSource() 方法返回表示对象源代码的字符串。如：
```javascript
function employee(name,job,born){
  this.name=name;
  this.job=job;
  this.born=born;
}
var bill=new employee("Bill Gates","Engineer",1985);
document.write(bill.toSource());      //({name:"Bill Gates", job:"Engineer", born:1985}) 
```

9、valueOf() 方法可返回 Boolean 对象的原始值。如：
```javascript
对象	     返回值
Array	    数组实例对象。
Boolean	  布尔值。
Date	     以毫秒数存储的时间值，从 UTC 1970 年 1 月 1 日午夜开始计算。
Function	 函数本身。
Number	   数字值。
Object	   对象本身。这是默认设置。
String	   字符串值。

// Array：返回数组对象本身
var array = ["CodePlayer", true, 12, -5];
document.writeln( array.valueOf() === array ); // true

// Date：当前时间距1970年1月1日午夜的毫秒数
var date = new Date(2013, 7, 18, 23, 11, 59, 230);
document.writeln( date.valueOf() ); // 1376838719230

// Number：返回数字值
var num =  15.26540;
document.writeln( num.valueOf() ); // 15.2654

// 布尔：返回布尔值true或false
var bool = true;
document.writeln( bool.valueOf() === bool ); // true
// new一个Boolean对象
var newBool = new Boolean(true);
// valueOf()返回的是true，两者的值相等
document.writeln( newBool.valueOf() == newBool ); // true
// 但是不全等，两者类型不相等，前者是boolean类型，后者是object类型
document.writeln( newBool.valueOf() === newBool ); // false

// Function：返回函数本身
function foo(){ 
}
document.writeln( foo.valueOf() === foo ); // true
var foo2 =  new Function("x", "y", "return x + y;");
document.writeln( foo2.valueOf() === foo2 ); // true

// Object：返回对象本身
var obj = {name: "张三", age: 18};
document.writeln( obj.valueOf() === obj ); // true

// String：返回字符串值
var str = "http://www.365mini.com";
document.writeln( str.valueOf() === str ); // true
// new一个字符串对象
var str2 = new String("http://www.365mini.com");
// 两者的值相等，但不全等，因为类型不同，前者为string类型，后者为object类型
document.writeln( str2.valueOf() === str2 ); // false
```
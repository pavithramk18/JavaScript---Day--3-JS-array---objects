console.log(JavaScript - Day -3: JS Array & objects);

//Q1:How to compare 2 JSON having same property without order
//a.let object1={name:"person1",age:5}
//b..let object2={age:5,name:"person1"}

// Solution:

let object1={name:"person1",age:5};
let object2={age:5,name:"person1"};
var result = true;

if(Object.keys(object1).length)==(Object.keys(Object2).length)
{
    for(var key in object1)
    {
        if(object1(key)==object2(key))
        {
            continue;
        }
        else{
            result=false;
            break;
        }
    }

}
else
{
    result=false;
    break;
}
console.log(result);







       //Spead Operator

sri1={
    name :'dgvfh'
}
srri2={
    ...sri1,
    email:'anu@gmail.com'
    

}
console.log(srri2);

sets1=[1,2,3,4]
setts2=[...sets1,5,6,7,8,9]
console.log(setts2)


           // Rest Oparetors

const array = (...arr) => console.log(arr);
array(1,2,3,4,3,2,1) 


const array1 = (a,b,...arr) => console.log(arr);
array1(1,2,3,4,3,2,1) 


            //Destructuring Assignment

values = [10,20,30,40];
[a,b,c,d] = values;
console .log(a,b,c,d);
console.log(a,d);

values1 = {
    email:"abcd@gmail.com",
    age:27,
    name:"srilakshmi"
}
const {email,age,name} = values1;
console.log(email);
console.log(values1.name)



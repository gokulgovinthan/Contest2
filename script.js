let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  
arr.forEach(function(e){if(e["profession"]==["developer"]){
  console.log(e)
}})
}

function addData() {
  const newEmployee=[{id:4, name:"susan", age:"20", profession:"intern"}]
   arr.push(newEmployee)
   console.log(arr)
}

function removeAdmin() {
  arr.splice(2,1)
  console.log(arr)
}

function concatenateArray() {
  let arr2=[
    {id:5,name:'malkiya',age:22, profession:'publisher'},
    {id: 6,name:'Govinthan',age:22, profession:'full stack developer'},
    {id :7,name:'vishnu',age:23, profession:'Team Lead'},
  ]
  let narr=arr.concat(arr2)
  console.log(narr)
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}

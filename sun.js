const arr=[
  {'name':'henok','age':12},
  {'name':'senay','age':32},
  {'name':'abel','age':22}
]

function* loop(arr) {
console.log('start');
  for(var person of arr){
    yield person;
  }
  console.log('end');
}
const trigger=loop(arr);
console.log(trigger.next());

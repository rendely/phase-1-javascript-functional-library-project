function iterable(collection) {
  const new_collection = typeof collection === 'object' ? Object.values(collection) : collection;
  return new_collection;
}

function myEach(collection, callback) {
  for (const c of iterable(collection)) {
    callback(c)
  }
  return collection;
}

function myMap(collection, callback) {
  const new_array = [];
  for (const c of iterable(collection)) {
    new_array.push(callback(c))
  }
  return new_array;
}

function myReduce(collection, callback, acc) {
  for (const c of iterable(collection)) {
    if (acc === undefined) {
      acc = c;
    } else {
      acc = callback(acc, c, collection);
    }
  }
  return acc;
}

function myFind(collection, predicate){
  for (const c of iterable(collection)){
    if (predicate(c)) return c;
  }
  return undefined;
}

function myFilter(collection, predicate){
  const resultArray = [];
  for (const c of iterable(collection)){
    if (predicate(c)) resultArray.push(c);
  }
  return resultArray;
}

function mySize(collection){
  return iterable(collection).length;
}

function myFirst(array, n=1){
  if (n === 1) return array[0];
  return array.slice(0,n)
}

function myLast(array, n=1){
  if (n === 1) return array.slice(-1)[0];
  return array.slice(-n)
}

function myKeys(obj){
  const keys = [];
  for (const k in obj){
    keys.push(k)
  }
  return keys;
}

function myValues(obj){
  const keys = [];
  for (const k of iterable(obj)){
    keys.push(k)
  }
  return keys;
}
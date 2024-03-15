var cars = 'subaru';
//test 1: Equality comparison (true)
console.log("Is car== 'subaru'? I predict True.");
console.log(cars == 'subaru'); //true
//test 2:  strict Equality comparison (true)
console.log("Is car === 'subaru'? I predict True.");
console.log(cars === 'subaru'); //true
//test 3: inequality comparison (false)
console.log("Is car != 'subaru'? I predict False.");
console.log(cars != 'subaru'); //false
//test 4: strict inequality comparison (false)
console.log("Is car !== 'subaru'? I predict False.");
console.log(cars !== 'subaru'); //false
//test 5: less then  comparison (false)
console.log("Is car < 'subaru'? I predict False.");
console.log(cars < 'subaru'); //false (lexicographic comprison)
//test 6: greater then  comparison (false)
console.log("Is car > 'subaru'? I predict False.");
console.log(cars > 'subaru'); //false (lexicographic comprison)
//test 7: less then or equal comparison (true)
console.log("Is car <= 'subaru'? I predict true.");
console.log(cars <= 'subaru'); //true
//test 8: greater then or equal comparison (true)
console.log("Is car >= 'subaru'? I predict true.");
console.log(cars >= 'subaru'); //true
//test 9: checking truthness (true)
console.log("Is car? I predict true.");
console.log(cars); //true (non -empty string is truthy)
//test 10: checking falsehness (true)
console.log("Is !car? I predict true.");
console.log(!cars); //true (non -empty string is truthy)

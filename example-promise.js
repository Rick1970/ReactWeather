// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback("City not found.");
//
// };
//
// getTempCallback('Seattle', function(err, temp) {
//   if(err) {
//     console.log('Error', err);
//   }else {
//     console.log('Success', temp)
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found.');
//     }, 1000);
//   });
// }
//
// getTempPromise('Seattle').then (function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// })

// Challenge area;


function addPromise(a, b){
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    } else {
      reject('One of your entries is not a number');
    }
  });
}

addPromise(7, 25).then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
})

addPromise(7, '25').then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
})

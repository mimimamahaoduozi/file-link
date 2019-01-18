// const glob = require('glob');
// function getEntry() {
//     let entry = {};
//     glob.sync(__dirname + "/node_modules/*.js").forEach(function (file) {
//         let name = file.match(/([^/]+?)\.main\.js/)[1];
//         entry[name] = __dirname + "/app/js/" + name + ".main.js";
//     });
//     return entry;
// }
//
// glob.sync(__dirname + "/node_modules/*.js").forEach(function (file) {
//     let name = file.match(/([^/]+?)\.js/)[0];
//     console.log(name);
// });
// const actions = new Map([
//     [1, ['processing','IndexPage']],
//     [2, ['fail','FailPage']],
//     [3, ['fail','FailPage']],
//     [4, ['success','SuccessPage']],
//     [5, ['cancel','CancelPage']],
//     ['default', ['other','Index']]
// ])
//
//
// console.log(actions.get(0));

// function clearArr(arr) {
//     let arrlength=arr.length;
//     for (let i=0;  i<arrlength; i++) {
//         arr.pop()
//     }
//     return arr;
// }
// let a=[1,2,3]
// let a2=a;
// clearArr(a2);
// console.assert(a.length === 0);
// // console.log(a);

//
// function clone(obj) {
//     let _obj = JSON.stringify(obj),
//         objClone = JSON.parse(_obj);
//     return objClone
// }
// const arr=['1',{'1':1,'2':2,3:{3:'3',5:['5',8]}},[3,4,5]]
// const copy_arr=clone(arr);
//
// copy_arr[1][3][5]['5']='8'
// // console.log(arr[1][3][5]['5']);
// // console.log(arr[1][3][5]['5']);
// console.log(arr[1][3][5]['5']);
// // console.assert(copy_arr[1][3][5]['5'] !== arr[1][3][5]['5']);


let str = 'safadsfdsagvdfvfsv'
const strChar=str =>{
    let string=[...str],maxValue='';
    let fres={}
    string.forEach(value => {
        var char = value
        if (!fres[char]) {
            fres[char] = 0;
        }

        fres[char]++;
        if (maxValue == '' || fres[char] > fres[maxValue]) {
            maxValue = char;
        }
    })
    return maxValue;
}
console.log(strChar(str));
// var s="aaaabbbbssssssss";
// var fres={};  //用来记录所有的字符的出现频次
// var mostFreqChar=''; //用来记录最大频次的字符
// for(var i=0;i<s.length;i++){
//     var char=s[i];
//     if(!fres[char]){
//         fres[char]=0;
//     }
//
//     fres[char]++;
//     if(mostFreqChar==''||fres[char]>fres[mostFreqChar]){
//         mostFreqChar=char;
//     }
//
// }
// console.log(mostFreqChar);
// console.log(fres[mostFreqChar]);

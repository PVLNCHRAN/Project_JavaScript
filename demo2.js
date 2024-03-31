// // 33333
// // 32223
// // 32123
// // 32223
// // 33333
// let a = '',value = 3;
// function patternNumber(){
//      for(let i=1;i<6;i++){
//         for(let j=1;j<6;j++){
//             if((i==1) || (i==5)){
//                 a += value+'\t';            }
//             else if((i==2) || (i==4)){
//                 if((j==1) || (j==5)){
//                     a += value+'\t';   
//                 }
//                 else{
//                     a += value-1+'\t';
//                 }
//             }
//             else if((i==3) || (i==3)){
//                 if((j==1) || (j==5)){
//                     a += value+'\t';   
//                 }
//                 else if((j==2) ||(j==4)){
//                     a += value-1+'\t';
//                 }
//                 else{
//                     a +=value-2+'\t';
//                 }
//             }
//         }        
//         console.log(a);
//         a = '';
//     }
// }
// patternNumber();


// /* 
// 3       3       3       3       3
// 3       2       2       2       3
// 3       2       1       2       3
// 3       2       2       2       3
// 3       3       3       3       3
// */












// 1
// 3 5 7
// 9 11 13 15 17 19 

// let a = '';
// function numberOdd(){
//     for(let i = 0; i<3; i++){
//         for(let j = 0; j < i; j++){
//             for(let k=1; k<i+1; k++){
//                 if(k%2 != 0){
//                     a += k+'';
//                 console.log(a);
//             }
//           }
//         }
//         // console.log(a);
//         // console.log("\n");
//     }
// }

// numberOdd();
let a = '';
function oddNumeber(){
    for(let i=1; i<20; i++){
        if(i % 2 == 1){
           switch(i){
            case 1:
                a += i + '\n';
                break;
            case 3:
                a += i + '\t';
                break;
            case 5:
                a += i + '\t';
                break;
            case 7:
                a += i + '\n';
                break;
            case 9:
                a += i + '\t';
                break;
            case 11:
                a += i + '\t';
                break;
            case 13:
                a += i + '\t';
                break;
            case 15:
                a += i + '\t';
                break;
            case 17:
                a += i + '\t';
                break;
            case 19:
                a += i + '\n';
                break;
                       
           }
        }
        
    }
}
oddNumeber();
console.log(a);


/* 
1
3       5       7
9       11      13      15      17      19
*/











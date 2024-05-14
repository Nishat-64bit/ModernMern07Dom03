

// take all item using queryselectorALl

//const item = document.querySelectorAll(".item")

//console.log(item); array return korcilo tar mane
// tar mane call back fucn use kore protita item array theke pabar jonno use forEach(item)=>{
   // console.log(item);
//}
// callback func :  
// foreach func solid array + nodelisted array je kono array ke loop korte pare
// item.forEach((item)=>{
//     console.log(item.innerHTML);
// })
// map func solid array loop kore kintu nodelisted array  loop korte pare na

// item.map((item2)=>{  
//     console.log(item2); // type error dicce , karon map sudu matro loop kore solid array ke 
//     // kono manipulate node list ke loop korte pare na 
// })

/// ==========================================

// 1000 mane 1000ms = 1s
// lets make a counter function that can update existing value
// setinterval function : ekta niddsito somoy por por kaj toko kore dei , manually counter() call korar cea


//revise
// const item = document.querySelectorAll(".item")
// const newItem = Array.from(item)

// newItem.map((item)=>{
//     let count = 0;


//     const counterUp = ()=>{
//         count = count+1;
//         item.innerHTML= count // dekben body te show hocce
//         //console.log(count);
//         if(count>=10){
//             clearInterval(stop)
//         }
//     }
//     const stop = setInterval(()=>{
//         counterUp()
//     },1000)

// })

// revise 2.0

// const item = document.querySelectorAll(".item")
// const newItem = Array.from(item)

// newItem.map((item)=>{

// let count = 0
// const counterUp = ()=>{
//     count +=1;
//     item.innerHTML=count
//     if(count>=10){
//         clearInterval(stop)
//     }
// }
// const stop = setInterval(()=>{
//     counterUp()
// },100)
// })

/// oke lets make indivual increment 

// const items = document.querySelectorAll(".item")

// items.forEach((item)=>{
// const increment = parseInt(item.dataset.increment)
// let count = parseInt(item.textContent) ;

// const counterUp = ()=>{
//     count +=increment;
//     item.textContent= count

//     if(count>=10 && increment == 10){ // 100
//         clearInterval(stop)
//     }else if (count>=100 && increment == 3) { // 200
//         clearInterval(stop)
//     }else if (count >= 70 && increment == 7){ // 300
//         clearInterval(stop)
//     }else if (count>=90 && increment == 9){ // 400
//         clearInterval(stop) 
//     }
// }

// const stop = setInterval(()=>{
//     counterUp()
// },1000)
// })
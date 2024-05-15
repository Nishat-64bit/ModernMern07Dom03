/// Make to do list 

// 1. first of all we ami kicu liksi ta add e click korle nice show hobe 

// // call input and btn and box 
// const input = document.querySelector("#input")
// const button = document.querySelector(".btn")
// const box = document.querySelector(".box")

// // make some tag

// const ul = document.createElement("ul")
// // append 
// box.appendChild(ul)

// // event listener 
// button.addEventListener("click", function(){
//         const liitem = `<li class="box_item"><span class="boxitemSpan">${input.value}</span></li>`
//         ul.innerHTML+=liitem // ul.innerHTML=ul.innerhtml + liitem
//         input.value = '' // text lekar por add e click korle chole jabe
//         console.log(liitem); // aekon deken por por console li asce jotobar new text diccen
// })
// // console.log(input,button);

// revise 2.0 == to do list add 

const input = document.querySelector("#input")
const button = document.querySelector(".btn")
const box = document.querySelector(".box")


// make some tag
const ul = document.createElement('ul')

// append 
box.appendChild(ul)

// make eventlistener

button.addEventListener("click",function(){
   const liitem = `<li class="box_item"><span class = "boxitemSpan">${input.value}</span></li>`
   ul.innerHTML += liitem // por por change er jonno 
   input.value = `` // text lekar por add btn e clik korle chole jabe.
   console.log(liitem);
})
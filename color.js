
// // catch all variable

// const Gbtn = document.querySelector(".Gbtn")
// const Cbtn = document.querySelector(".Cbtn")
// const outputBox = document.querySelector(".outputBox")
// const colorCode = document.querySelector(".colorCode")


// // Gbuttton click korle color generate hobe

// Gbtn.addEventListener("click",function(){
//     const ourRandomColor = GenerateColor() // retun kora rgb generatecolor er varibleBox ourrandom e save hocce
//     colorCode.value = ourRandomColor // colorcode means input e kicu likle se jonno colorcode.value likte hobe
//     outputBox.style.backgroundColor=ourRandomColor // output box bg color hobe OurRandomColor

// // ctbn er eventlistener 

// Cbtn.addEventListener("click",function(){
//     navigator.clipboard.writeText(ourRandomColor)
//     Cbtn.innerHTML = "Copied"
    
// })
// })

// function GenerateColor() {
//     // rgb maximum 255 , 255 , 255 
//     // rgb minimum 0 , 0 , 0
//     const red   = Math.round(Math.random() * 255); //dosomik er pore value onek tai use math.round((math.random())
//     const green = Math.round(Math.random() * 255);
//     const blue = Math.round(Math.random() * 255);
//     // rgb format = rgb(255,25,0) // ae format e ready korte hobe 
//     const rgb = `rgb(${red},${green},${blue})`
//     // console.log(rgb); // 3ta color code dicce   // aeta ke ekon ber korte hobe
//     console.log(rgb)
//     return rgb
    
// }

//revise 2.0 ====== color code generator 

// cath all the variable 
const Gbtn = document.querySelector(".Gbtn")
const Cbtn = document.querySelector(".Cbtn")
const outputBox = document.querySelector(".outputBox")
const colorCode = document.querySelector(".colorCode")

// gbtn er add event 
Gbtn.addEventListener("click",function(){
    const RandomColor = generatorColor()
    outputBox.style.backgroundColor = RandomColor
    colorCode.value = RandomColor

// cbtn er add event 
Cbtn.addEventListener("click",function(){
    navigator.clipboard.writeText(RandomColor)
    Cbtn.innerHTML= "Copied"
})
})

// generatorcolor function
function generatorColor() {
    const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255) ;
    const blue = Math.round(Math.random()*255);

    // rgb format rgb(255,25,24)
    const rgb = `RGB(${red},${green},${blue})`
    // console.log(rgb);
    return rgb
}

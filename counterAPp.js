// ///

// const countdown = ()=>{

//  const counter = new Date('june 14, 2024  0:00:00').getTime() // [je day te apnar occation ase suppose 30 day por  theke 30 din aagie dorlam] // get time mile second e prokas kore 
//     const now = new Date().getTime() // May 14 aj 2024

//     const gap = counter - now

//     //How this time work we know 

//     const second = 1000; // 1000ms 
//     const minute = second*60
//     const hour = minute*60
//     const day = hour*24;

//     // calculate it
//     const textDay = Math.floor(gap/day) // now 30din 
//     // console.log(textDay);
//     const textHour = Math.floor((gap % day)/hour)
//     // console.log(textHour);
//     const textMinute = Math.floor((gap % hour)/ minute)
//     // console.log(textMinute); // 15min
//     const textSecond = Math.floor((gap%minute)/second)
//     // console.log(textSecond); // 54


//     // call html
//     document.querySelector(".day").innerHTML = textDay
//     document.querySelector(".hour").innerHTML = textHour
//     document.querySelector(".minute").innerHTML = textMinute
//     document.querySelector(".second").innerHTML = textSecond

// }
// countdown() // ekane ami ekbar call korci deke se static hoe ase 

// setInterval(countdown,1000)

// console.log(18 % 2) jodi perfectly bag jai taile modulas / reminder 0
// console.log(17 % 2)  ekon baag jacce na , tar manne modulad 8 * 2  = 16  bagses 1  modulas 1

//========================== for digital dropout schol 

// const countdown = ()=>{
//     const counter = new Date("May 16 , 2024 0:00:00").getTime() // getTime give milisecond value : 1715796000000 
    
//     const now = new Date().getTime() // may 14 aj
//     // console.log(now); // 1715702791345

//     const gap = counter - now ;
//     // console.log(gap);

//     // now think how time work from second to day ? 

//     const second = 1000;
//     const minute = second*60;
//     const hour = minute*60;
//     const day = hour*24

//     // now make actual real time date

//     const textDay = Math.floor(gap/day);
//     const texthour = Math.floor((gap % day)/hour);
//     const textMinute = Math.floor((gap % hour)/minute);
//     const textSecond = Math.floor((gap % minute)/second);
    

//     // call html 

//     document.querySelector(".day").innerHTML=textDay
//     document.querySelector(".hour").innerHTML=texthour
//     document.querySelector(".minute").innerHTML=textMinute
//     document.querySelector(".second").innerHTML=textSecond
   
// }
// setInterval(countdown,1000)
// // countdown()

/// revise 3.0 

const countdown = ()=>{
    // create your desire date 
    const counter = new Date("16 May , 2024 0:00:00").getTime()
    // create current date
    const now  = new Date().getTime()

    // use variable gap 
    const gap = counter - now

    // now make time variable day , hour , minute , sec
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24

    // now make real textday , texthour , textminute and second 

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day ) / hour)
    const textminute = Math.floor((gap % hour ) / minute)
    const textSecond = Math.floor((gap % minute ) / second)
    
    // now call(document.) html to accecss the text

    document.querySelector(".day").innerHTML=textDay
    document.querySelector(".hour").innerHTML=textHour
    document.querySelector(".minute").innerHTML=textminute
    document.querySelector(".second").innerHTML=textSecond
}
// now we dont need to use countdown() again and again 
// so use setinterval()
setInterval(countdown,1000)
// countdown() // we call in once thats why static
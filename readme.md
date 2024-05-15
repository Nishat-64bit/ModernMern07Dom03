    ------------------------------------------------------------------    
                know about js Dom 03 with Project  <Start>
    -------------------------------------------------------------------
    // know about basic counter App
    

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




        /// counter App  // MAin 

    const countdown = ()=>{

    const counter = new Date('june 14, 2024  0:00:00').getTime() // [je day te apnar occation ase suppose 30 day por  theke 30 din aagie dorlam] // get time mile second e prokas kore 
    const now = new Date().getTime() // May 14 aj 2024

    const gap = counter - now

    //How this time work we know 

    const second = 1000; // 1000ms 
    const minute = second*60
    const hour = minute*60
    const day = hour*24;

    // calculate it
    const textDay = Math.floor(gap/day) // now 30din 
    // console.log(textDay);
    const textHour = Math.floor((gap % day)/hour)
    // console.log(textHour);
    const textMinute = Math.floor((gap % hour)/ minute)
    // console.log(textMinute); // 15min
    const textSecond = Math.floor((gap%minute)/second)
    // console.log(textSecond); // 54


    // call html
    document.querySelector(".day").innerHTML = textDay
    document.querySelector(".hour").innerHTML = textHour
    document.querySelector(".minute").innerHTML = textMinute
    document.querySelector(".second").innerHTML = textSecond

}
     // countdown() // ekane ami ekbar call korci deke se static hoe ase 

     setInterval(countdown,1000)
     
     // console.log(18 % 2) jodi perfectly bag jai taile modulas / reminder 0
     // console.log(17 % 2)  ekon baag jacce na , tar manne modulad 8 * 2  = 16  bagses 1  modulas 1

     //========================== for digital dropout schol 

     const countdown = ()=>{
         const counter = new Date("May 16 , 2024 0:00:00").getTime() // getTime give milisecond value :      1715796000000 
    
    const now = new Date().getTime() // may 14 aj
    // console.log(now); // 1715702791345

    const gap = counter - now ;
    // console.log(gap);

    // now think how time work from second to day ? 

    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24

    // now make actual real time date

    const textDay = Math.floor(gap/day);
    const texthour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    

    // call html 

    document.querySelector(".day").innerHTML=textDay
    document.querySelector(".hour").innerHTML=texthour
    document.querySelector(".minute").innerHTML=textMinute
    document.querySelector(".second").innerHTML=textSecond


    }
       setInterval(countdown,1000)
     // countdown()
    ------------------------------------------------------------------    
                know about js Dom 03 with Project <End>
    -------------------------------------------------------------------
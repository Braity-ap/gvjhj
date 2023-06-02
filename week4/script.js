// function print5(){
//     for (let index = 0; index < 5; index++) {
//         alert(index)
        
//     }
// }

// print5()
// print5()


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// }

// print5()

// week4

// function myFunction() {
// var braity = document.getElementById("Myname");
// braity.firstChild.nodeValue = "Braity ";


// var para = document.getElementById("MyFunctions");
// para.firstChild.nodeValue="ttttttthhhhhhhhhhhhhhh";

// }
// document.addEventListener("click",myFunction);




// week5 exercise6

// function update1() {
//     var braity = document.getElementById("Myname");
//     braity.firstChild.nodeValue = "Braity ";
//     }
    
// function update2() {
//     var braity = document.getElementById("MyFunctions");
//     braity.firstChild.nodeValue ="Ambali Parambil";
//     }

//     function NewFunction(){
//         var braity = document.getElementById("MyFunctions");
//         braity.addEventListener('click',update2)

//         var braity = document.getElementById("Myname");
//         braity.addEventListener('click',update1)

//     }
// document.addEventListener("DOMContentLoaded",NewFunction);




    // week5 excercise7


    // function clickfunction(){
    //     var element = document.getElementById("myinput")
    //     alert(element.value);
    // }

    // function btnfunction(){
    //     var element= document.getElementById("mybtn")
    //     element.addEventListener('click',clickfunction);
    // }

    // document.addEventListener("DOMContentLoaded",btnfunction);


//  week5 exercise7b

    function clickfunction(){
        var element = document.getElementById("myinput")
        var div = document.getElementById("rslt")
        div.firstChild.nodeValue = element.value
    }

    function btnfunction(){
        var element= document.getElementById("mybtn")
        element.addEventListener('keyup',clickfunction);
    }

    document.addEventListener("DOMContentLoaded",btnfunction);

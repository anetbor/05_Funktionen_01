"use strict";

/***** Funktionen 01 *****/

function test()
{
console.log("Hallo!");
}

// test();

//***************************** */

// ausgabeNamen();  //call
function ausgabeNamen() { //Funktion
    let firstName = " Anna"
    console.log("Hallo" +  firstName + "!");
    console.log("Hallo John!");
    console.log("Hallo Mark!");  
}
// ************************************************
// function ausgabeNamenParam() {
//     let firstName = " Anna"
//     console.log("Hallo" +  firstName + "!");
    // oder
// 

// function ausgabeNamenParam(firstName) {
        
//     const cond1 = (firstName == "");

//     if (prompt("Name") == "" > ausgabeNamenParam =="") {
//         firstName = "Nobody";
        
        
//     } else {
// ;
//     }
//     console.log("Hallo " +  firstName + "!");   
// }
// ausgabeNamenParam("Max"); //Argument
// ausgabeNamenParam("John"); //Argument
// ausgabeNamenParam(); //Argument
// ausgabeNamenParam(prompt("Name")); //Argument


//******************************************** */

// function ausgabeNamenParam(firstName) {
        
//     const cond1 = (firstName == "");
//     const cond2 = (firstName == undefined);

//     if (cond1 ||cond2) {
//         firstName = "Nobody";
        
        
//     } 
//     console.log("Hallo " +  firstName + "!");   
// }
// ausgabeNamenParam("Max"); //Argument
// ausgabeNamenParam("John"); //Argument
// ausgabeNamenParam(); //Argument
// ausgabeNamenParam(prompt("Name")); //Argument



// function ausgabeNamenParam(firstName) {
        
//     // const cond1 = (firstName == "");
//     // const cond2 = (firstName == undefined);

//     if (firstName) {    
//     } else {
//             firstName = "Nobody";        
//     }
//     console.log("Hallo " +  firstName + "!");   
// }
// ausgabeNamenParam(prompt("Name")); //Argument

//************************************** */

// function ausgabeNamenParam(firstName) {
    // if (firstName) {  
  
    // } else {
    //         firstName = "Nobody";        
    // }
    // console.log("Hallo " +  firstName + "!");   
// }
// ausgabeNamenParam(prompt("Name")); //Argument

//************************************ */
// function ausgabeNamenParams(firstName,familyName) {
//     console.log("Hallo " +  firstName + " " + familyName + "!");}   

// //   ausgabeNamenParams("Max","Mütze"); //Argument
//   ausgabeNamenParams(prompt("Vorname"),prompt("Nachname")); //Argument

//************************************** */
  function ausgabeNamenParams2(firstName,familyName) {

    //1. Funktionalität: string composing
    const gap = " ";
    const outputStr = "Hallo " + gap +  firstName + gap+ familyName + "!"
     
   //2. Funktionalität: data autput
    console.log(outputStr);
}   
//   ausgabeNamenParams2("Max","Mütze");



    ////1. Funktionalität: string composing
    output(getString("Max","Mütze"));
    function getString(firstName,familyName){
        const gap = " ";
        const outputStr = "Hallo " + gap +  firstName + gap+ familyName + "!"
        return outputStr;

   ////2. Funktionalität: data autput
//    ausgabe("Hallo");
   function output(outputData) {
        console.log(outputData);
}


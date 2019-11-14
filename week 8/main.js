document.addEventListener("DOMContentLoaded", run)


function run () {

    /*var name = 'Tyla';
    var location = 'Southampton';
    var age ="18";
    var plus ="10";
    var myList = [];
    var ageInTenYears = parsInt(age) + parsInt(plus);

    console.log(ageInTenYears);*/

 
   document.querySelector('.button').addEventListener ('clicked', buttonClicked)


}

function buttonClicked(e) {

    e.preventDefult();
    console.log ("buttom clicked")
    let name = document.querySelector("input").value;

    if (name == " "){
        alert('duuuurr enter a name');

    }
   
 document.querySelector("#result").innerHTML = "Hello" + name;

}

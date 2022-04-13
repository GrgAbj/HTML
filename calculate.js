function CalculateDays(){
    var d1 = document.getElementById("d1").value;
    var d2 = document.getElementById("d2").value;
 
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const today = new Date();
if(dateTwo>=dateOne && dateOne>=today){

    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/(1000*60*60*24));
    

    document.getElementById("output").innerHTML= "you have entered " + days + " Days";
    if(days<3)
    var cost = Math.ceil(days*10.23);
    else
    var cost = Math.ceil(days*8.69);
    document.getElementById("output1").innerHTML= "A total of "+ cost + "$ must be paid.";
 }
    else {
 alert ("Begin have beem greater than enddate")
 alert("Begin have beem greater than today")
     }
}


function setCookie(cookieName, cookieValue, expireDays){

    const date = new Date();

    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    
    document.cookie = `${cookieName} = ${encodeURIComponent(cookieValue)}; expires${date.toUTCString()}; path=/ `;
}



function getCookie(cookieName){
    
    const cookies = document.cookie.split(";");

    for(let i = 0; i < cookies.length; i++){
        
        const cookie = cookies[i].trim();

        if(cookie.indexOf(cookieName + "=") === 0 ){

            return decodeURIComponent(cookie.substring( cookieName.length + 1 ));

        }
    }

    return "";

}





document.getElementById("signupform").addEventListener("submit", function(event) {
    console.log("event listor (submit) triggered")
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("Email").value;

    console.log("event listor (submit) : varables set")
    
    setCookie("userName", name , 7 );
    setCookie("userEmail", email , 7 );
    console.log("event listor (submit) cookie set")
    
    document.location.href = "index.html#page2"

})

//&& document.querySelector(".value")
if(document.querySelector(".name") ){
    window.onload = function(){
        const name = getCookie("userName");
        const email = getCookie("userEmail");

        if(email && name){
            document.querySelector(".name").textContent = "Name: " + name;
            
        }
        else{
            document.querySelector(".name").textContent = "no name cookie found";
            document.querySelector(".value").textContent = "no email cookie found";
        }

    }
}
// saw this call on a stack overflow page forgot to link 
$(document).on('pageshow', '#index', function() {
    date = new Date();

    //pad start creates a target lengh of a string so it turns 5(may) into 05 to maintain dd/mm/yyyy
    day = String(date.getDate()).padStart(2, '0');
    // why do arrys have to start at 0 i worked on this that when i got the soltion form chat gpt i quit for the day
    month = String(date.getMonth() + 1).padStart(2, '0'); 
    year = date.getFullYear();

    fullDate = day + "/" + month + "/" + year;
    console.log(fullDate);

    hour = String(date.getHours()).padStart(2, '0');
    console.log(hour);
    minutes = String(date.getMinutes()).padStart(2, '0');
    console.log(minutes);
    fullTime = hour + ":" + minutes;
    console.log(fullTime);

    document.getElementById('date').innerHTML = "Date: " + fullDate;
    document.getElementById('time').innerHTML = "Time: " + fullTime;

});
$(document).on('pageshow', '#page2', function() {
    date = new Date();

    
    day = String(date.getDate()).padStart(2, '0');
    month = String(date.getMonth() + 1).padStart(2, '0'); 
    year = date.getFullYear();

    fullDate = day + "/" + month + "/" + year;
    console.log(fullDate);

    hour = String(date.getHours()).padStart(2, '0');
    console.log(hour);
    minutes = String(date.getMinutes()).padStart(2, '0');
    console.log(minutes);
    fullTime = hour + ":" + minutes;
    console.log(fullTime);

    document.getElementById('date2').innerHTML = "Date: " + fullDate;
    document.getElementById('time2').innerHTML = "Time: " + fullTime;

});
$(document).on('pageshow', '#page3', function() {
    date = new Date();

    
    day = String(date.getDate()).padStart(2, '0');
    month = String(date.getMonth() + 1).padStart(2, '0'); 
    year = date.getFullYear();

    hour = String(date.getHours()).padStart(2, '0');
    console.log(hour);
    minutes = String(date.getMinutes()).padStart(2, "0");
    console.log(minutes);
    fullTime = hour + ":" + minutes;

    console.log(fullTime);

    const name = getCookie("userName");

    fullDate = day + "/" + month + "/" + year;
    console.log(fullDate);

    document.getElementById('date3').innerHTML = "Date: " + fullDate;
    document.getElementById('time3').innerHTML = "Time: " + fullTime;
    document.getElementById('name3').innerHTML = name

});

function back(){
    document.location.href = "index.html#page2"
}
  
// function time(){
//     console.log("time() triggered")
//     const date = new Date();
    
//     console.log(date.getDate())
//     document.getElementById('date').innerHTML = date.getDate();
// }
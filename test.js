

alert("test!!!");

function multAlert() {
    alert("1");
    alert("2");
}

// multAlert();

var you = true;

if (you) {
    document.write("here is good you");
} else if (!you) {  

} else {
    document.write("here is wrong");
} 

var links = document.getElementsByTagName("a");

/*for (i=1; i<links.length; i++) {
    console.log("this is link" + i);
}
document.write("all done " + links.length);
*/

function getAverage(a,b) {
    var average = (a+b)/2;
    console.log(average);
    return average;
}

var avg = getAverage(2,3);

// console.log("the average is " + avg);

function setupEvt() {
    alert("jkkk");
    var mymessage = document.getElementsByClassName("kitt");

function showPic() {
    mymessage.className = "show";
}

setTimeout(showPic, 3000);

var colourChanger = document.getElementById("color-changer");

var colors = ["blue", "green", "yellow", "black", "pink"];

var counter = 0;

function changeCo() {
    counter = counter % 5;
    colourChanger.style.background = colors[counter];
    counter++;
}

var mytimer = setInterval(changeCo, 1000);

colourChanger.onclick = function() {
    clearInterval(mytimer);
    colourChanger.textContent = "Timer stopped";
};

}

window.onload = function() {

    setupEvt();

};




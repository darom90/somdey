


var timer = () => {
    let day = new Date();
    let hour = day.getHours();
    let minuth = day.getMinutes();
    let second = day.getSeconds();
    let result = document.getElementById("timer");
    if(hour<12){
        result.innerHTML = hour + ":" + minuth + ":" + second + "AM";
    }else{
        result.innerHTML = hour + ":" + minuth + ":" + second + "PM";
    }
    
}
    setInterval(timer,1000);


    var color = () => document.body.style.background=document.body.style.background== "red" ? "teal" : "red";
    
    setInterval(color,1000);




   var changeColor = () => {
        let red = document.getElementById("red");
        let teal = document.getElementById("teal");
        let blue = document.getElementById("blue");
        let green = document.getElementById("green");

        if(red.checked){
            document.body.style.background = red.value;
        }else if(teal.checked){
            document.body.style.background = teal.value;
        }else if(blue.checked){
            document.body.style.background = blue.value;
        }else if(green.checked){
            document.body.style.background = green.value;
        }
    }

    document.addEventListener('change',changeColor);
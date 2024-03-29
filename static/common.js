var myVar = setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
};

function showCurrentValue(event)
{  
    const value = event.target.value;
    let addr = document.querySelector("#addr").value;
    connection.send(addr + ":cmd:setnick:" + value);
};

function log(message)
{
    console.log(message);
    var loggdiv = document.getElementById("logger");
    loggdiv.innerHTML = loggdiv.innerHTML + "\n" + message;
    loggdiv.scrollTop = loggdiv.scrollHeight;
}


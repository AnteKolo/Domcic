var p1 = document.getElementById("demo1");
document.getElementById("demo2").innerHTML = p1.innerHTML;

function funkcija() {
    document.getElementById("ids").src = "2.jpg";
}

function prBoje() {
    document.getElementById("demo1").style.color="blue";
}
function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById("ig").innerHTML = "Necu batoncic!"
    } else {
        x.style.display = 'none';
        document.getElementById("ig").innerHTML = "Ocu batoncic!"
    }
}


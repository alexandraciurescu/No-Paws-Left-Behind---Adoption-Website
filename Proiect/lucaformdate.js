
window.onload = function () {
    'use strict';
    var dad1 = document.getElementsByTagName("p"), dad = dad1[0], el1, el2, el3, el4, el5, el6, elt;
    el1 = create("p", "Pet name: " + localStorage.getItem("pet_name"));
    dad.appendChild(el1);
    el2 = create("p", "Pet type: " + localStorage.getItem("pet_type"));
    dad.appendChild(el2);
    el3 = create("p", "Client's name: " + localStorage.getItem("client_name"));
    dad.appendChild(el3);
    el4 = create("p", "Client's email: " + localStorage.getItem("client_email"));
    dad.appendChild(el4);
    el5 = create("p", "Client's birthday: " + (localStorage.getItem("client_birth_day")));
    dad.appendChild(el5);
    el6 = create("p", "Reason for adopting: " + localStorage.getItem("client_motiv"));
    dad.appendChild(el6);
    elt = create("h1", "Your data");
    elt.style.color = "#2B547E";
    elt.style.fontFamily = "Cartoon";
    elt.style.fontSize = "4em";
    document.body.insertBefore(elt,dad); 
    //asociere handler la click button Back
    var b = document.getElementById("bt_back");
    b.addEventListener("click", function () {window.history.go(-2);}, false)  
    //asociere handler la click button Clear
    var b = document.getElementById("bt_clear");
    b.addEventListener("click", fnclear, false);
    var bcls = document.getElementsByClassName("buton");
    for(let i=0; i<2; i++) bcls[i].style.color = "white";
}
    function create(tag, text) {
        var elnou = document.createElement(tag);
        var textnou = document.createTextNode(text);
        elnou.appendChild(textnou);
        return elnou;
}

    function fnclear(){
    var btc = document.getElementById("bt_clear");
    if ((btc.innerText) === "Clear") {
	btc.innerText = "Refresh";
        var par = document.getElementById("date_ad");
        par.removeChild(par.firstChild); 
        par.removeChild(par.firstChild);
        par.removeChild(par.firstChild); 
        par.removeChild(par.firstChild); 
        par.removeChild(par.firstChild); 
        par.removeChild(par.firstChild);  
        par.removeChild(par.firstChild); 
        localStorage.removeItem("pet_name");
        localStorage.removeItem("pet_type");
        localStorage.removeItem("pet_type"); 
	localStorage.removeItem("client_name");
	localStorage.removeItem("client_email");
	localStorage.removeItem("client_birth_day"); 
	localStorage.removeItem("client_motiv");
     }
    else {
	btc.innerText = "Clear";
        window.location.reload(); 
    }

}


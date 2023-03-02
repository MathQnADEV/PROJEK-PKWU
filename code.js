function myFunction(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}


let pertama = document.getElementById("dashboard");
let kedua = document.getElementById("statistic");
let ketiga = document.getElementById("transfer");
let keempat = document.getElementById("E-wallet");
let kelima = document.getElementById("settings");

pertama.style.display = "";
kedua.style.display = "none";
ketiga.style.display = "none";
keempat.style.display = "none";
kelima.style.display = "none";


function contentpertama(){
    pertama.style.display = "";
    kedua.style.display = "none";
    ketiga.style.display = "none";
    keempat.style.display = "none";
    kelima.style.display = "none";
}

function contentkedua(){
    pertama.style.display = "none";
    kedua.style.display = "";
    ketiga.style.display = "none";
    keempat.style.display = "none";
    kelima.style.display = "none";
}

function contentketiga(){
    pertama.style.display = "none";
    kedua.style.display = "none";
    ketiga.style.display = "";
    keempat.style.display = "none";
    kelima.style.display = "none";
}

function contentkeempat(){
    pertama.style.display = "none";
    kedua.style.display = "none";
    ketiga.style.display = "none";
    keempat.style.display = "";
    kelima.style.display = "none";
}
function contentkelima(){
    pertama.style.display = "none";
    kedua.style.display = "none";
    ketiga.style.display = "none";
    keempat.style.display = "none";
    kelima.style.display = "";
}

function search(){
    let filter = document.getElementById("find").value.toUpperCase();

    let item = document.querySelectorAll(".contact");
    let itemprofile= document.querySelectorAll(".profile");

    let l = document.getElementsByTagName("h3");
    let ll = document.getElementsByTagName("h1");

    
    for (let i = 0; i <= l.length, ll.length; i++) {
        let a = item[i].getElementsByTagName("h3")[0];
        let b = itemprofile[i].getElementsByTagName("h1")[0];

        let value = a.innerHTML || a.innerText || a.textContent;
        let value2 = b.innerHTML || b.innerText || b.textContent;

        if(value.toUpperCase().indexOf(filter) > -1 || value2.toUpperCase().indexOf(filter) > -1){
            item[i].style.display = "";
        } else{
            item[i].style.display = "none";
        }
        
    }

}



let statisticdashboard = document.getElementById("statistic-dashboard");
statisticdashboard.onclick = () => {
    pertama.style.display = "none";
    kedua.style.display = "";
}

let selectbank = document.getElementById("selectbank");
let transfercancel = document.getElementById("transfercancel");

selectbank.style.display = "none";

function newtransfer(){
    selectbank.style.display = "";
}

transfercancel.onclick = () => {
    selectbank.style.display = "none";
}

let nominaltransfer = document.getElementById("nominaltransfer");
let transferback = document.getElementById("transferback");

nominaltransfer.style.display = "none";

function transfernext(){
    nominaltransfer.style.display = "";
}

transferback.onclick = () => {
    selectbank.style.display = "";
    nominaltransfer.style.display = "none";
}


let verifikasi = document.getElementById("confirm");

verifikasi.style.display = "none";

function lanjutverifikasi(){
    verifikasi.style.display = "";
}

let success = document.getElementById("succes");

success.style.display = "none";

function konfirmasi(){
    success.style.display = "";
    nominaltransfer.style.display = "none";
    verifikasi.style.display = "none";
    selectbank.style.display = "none";
}

function selesai(){
    success.style.display = "none";
}

let selected = document.getElementById("selected");
let selecttext = document.getElementById("selecttext");
let options = document.getElementsByClassName("option");
let list = document.getElementById("opsipilihbank");

selected.onclick = () => {
    list.classList.toggle("hide");
}

list.onclick = () => {
    list.classList.toggle("hide");
}

for(option of options){
    option.onclick = function(){
        selecttext.innerHTML = this.textContent;
    }
}
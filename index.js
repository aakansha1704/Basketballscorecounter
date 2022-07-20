let count = 0;
let countt = 0;
upd= document.getElementById("c1");
upd2= document.getElementById("c2");

function homecount(){
    count+=1;
    upd.innerText=count;
}

function homec2(){
    count+=2;
    upd.innerText=count;
}

function homec3(){
    count+=3;
    upd.innerText=count;
}

function gc(){
    countt+=1;
    upd2.innerText=countt;
}

function gc2(){
    countt+=2;
    upd2.innerText=countt;
}

function gc3(){
    countt+=3;
    upd2.innerText=countt;
}

function res(){
    count=0;
    upd.innerText=count;
    countt=0;
    upd2.innerText=countt;
}

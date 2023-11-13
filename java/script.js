let btn = document.querySelector('[data-con]');
let celcius = document.getElementById('cel').value;
let farienheit = document.getElementById('far').value;


btn.addEventListener('click',function(){
    let celcius = document.getElementById('cel').value;
    let farienheit = document.getElementById('far').value;
    if (celcius !== "") {
        far(parseFloat(celcius));
    } else if (farienheit !== "") {
        cel(parseFloat(farienheit));
    }
});


function cel(f) {
 let cel = (f - 32) * 5/9;
return document.getElementById('cel').value = cel;
}

function far(c) {
  let far = (c * 9/5) + 32;
 return document.getElementById('far').value = far;  
}

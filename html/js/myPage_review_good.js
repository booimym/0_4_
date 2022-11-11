

//document.getElementById("mainGood").style.display = 'none';
document.getElementById("mainBad").style.display = 'none';

document.getElementById("side2").addEventListener("click",function(){

    document.getElementById("mainGood").style.display = 'none';
    document.getElementById("mainBad").style.display = 'block';

})

document.getElementById("side1").addEventListener("click",function(){

    document.getElementById("mainBad").style.display = 'none';
    document.getElementById("mainGood").style.display = 'block';

})
const inner = document.getElementById("lightbulb_inner");
inner.style.display = 'none';
document.getElementById("lightbulb").addEventListener("click",function(){
    if(inner.style.display == 'none'){
        inner.style.display = 'block';
    } else {
        inner.style.display = 'none';
    }

})

document.getElementsByName
//팝업 띄우기
function openPop() {
    document.getElementById("popup_layer").style.display = "block";

}

//팝업 닫기
function closePop() {
    document.getElementById("popup_layer").style.display = "none";
}

//////////////////////////////////////////////////////////////////////////////

//팝업 띄우기 
function openPop2() {
    document.getElementById("popup_layer2").style.display = "block";
    

}

//팝업 닫기
function closePop2() {
    document.getElementById("popup_layer2").style.display = "none";
    const popopen = document.getElementById("popopen");

    // popopen.innerText= "<div class='testcolor2'>보낸 후기 보기</div>";
    popopen.innerText = "보낸 후기 보기"
    popopen.classList.add("testcolor2");

    popopen.setAttribute("href", "#");
    
}

document.getElementById("submitButton").addEventListener("click",function(){

    document.getElementById("popup_layer2").style.display = "block";
    document.getElementById("popup_layer").style.display = "none";

})






// document.getElementById("anotherPop").style.display="none";
// document.getElementById("dot").addEventListener("click", function(){

//     document.getElementById("anotherPop").style.display = "block";

// })


const dotList = document.getElementsByClassName("dot");

for(let dot of dotList){
    dot.addEventListener("click", function(e){


        // .anotherPop 있는지 검사
        const anotherPop = document.getElementsByClassName("anotherPop")[0];

        if(anotherPop != undefined){ // 기존에 열린게 있으면 지워라
            anotherPop.remove();
        }

        const container = document.createElement("div");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        
        container.classList.add("anotherPop");

        div1.classList.add("anotherPop1" , "babo");
        div1.innerText = "글 수정하기";
        div1.addEventListener("click", function(){
            location.href = "http://192.168.10.76:5500/html/myPage_review_good.html";
        })

        div2.classList.add("anotherPop1" , "babo");
        div2.innerText = "글 삭제하기";
        div2.addEventListener("click", function(){
            
        })

        div3.classList.add("anotherPop1" , );
        div3.innerText = "끌어올리기";
        div3.addEventListener("click", function(){
            
        })

        container.append(div1, div2, div3);

        dot.after(container);


    });
}


// 화면 어디를 클릭하든
document.addEventListener("click",function(e){

    
    if(e.target.classList.contains("dot")){
        return;
    }
    

    // .anotherPop 있는지 검사
    const anotherPop = document.getElementsByClassName("anotherPop")[0];

    if( anotherPop != undefined){ // 기존에 열린게 있으면 지워라
        // anotherPop.remove();

        const temp = document.querySelectorAll(".anotherPop, .anotherPop > *");

        for(let t of temp){
            if(t == e.target){
                return;
            }
        }

        anotherPop.remove();
    }



})
const intro = document.getElementById("p_intro");
document.getElementById("pen_intro").addEventListener("click",function(){

    const introChangeForm = document.createElement("form");



})



/*
document.getElementById("fourth-category").addEventListener("click",function(){
    alert("안녕");
    // document.getElementById("popup_layer2").style.display = "block";
    console.log(document.getElementById("myBanana-sellList"));
    document.getElementById("myBanana-sellList").style.display = "none";
    document.getElementById("reviewsss").style.display = "block";
})
*/
// document.getElementById("first-category").addEventListener("click",function(){
//     alert("안녕");
//     // document.getElementById("popup_layer2").style.display = "block";
//     console.log(document.getElementById("myBanana-sellList"));
//     document.getElementById("myBanana-sellList").style.display = "block";
//     document.getElementById("reviewsss").style.display = "none";
// })



const rw = document.getElementById("reviewsss");
const ms = document.getElementById("myBanana-sellList");


document.getElementById("fourth-category").addEventListener("click",function(){
    alert("안녕");
    console.log(document.getElementById("myBanana-sellList"));


    // ms.style.display = "none";
    // rw.style.display = "block"; 

    if(ms.style.display== "block"){
        alert("if문 확인")
        rw.style.display = "block"; 

    }else{
        alert("else문 확인")
        rw.style.display = "none"; 

    }
})




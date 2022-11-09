
const conB = document.getElementById("badsection");
const conG = document.getElementById("goodsection");
conB.style.display = 'none';
document.getElementById("badchoice").addEventListener("click",function(){
        if(conB.style.display=='none'){ 		
    	conB.style.display = 'block';
        conG.style.display = 'none'; 	
    }else{ 		
    	conB.style.display = 'none';
         	
    }

})

const xButton = document.getElementById("fa-x");
xButton.addEventListener("click",function(){
    conB.style.display = 'none';
    conG.style.display = 'none';
})

// document.getElementById("goodchoice").addEventListener("change",function(){
//     var con = document.getElementById("goodsection");
//         if(con.style.display=='none'){ 		
//     	con.style.display = 'block'; 	
//     }else{ 		
//     	con.style.display = 'none'; 	
//     }

// })


conG.style.display = 'none';
document.getElementById("goodchoice").addEventListener("change",function(){
        if(conG.style.display=='none'){ 		
    	conG.style.display = 'block';
        conB.style.display = 'none'; 	
    }else{ 		
    	conG.style.display = 'none';

    }

})

//////////////////////////////////////////////////////////////////
// function doDisplay(){ 	
//     var con = document.getElementById("myDIV"); 	
//     if(con.style.display=='none'){ 		
//     	con.style.display = 'block'; 	
//     }else{ 		
//     	con.style.display = 'none'; 	
//     } 
// }


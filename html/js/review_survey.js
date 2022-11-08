
const conB = document.getElementById("badsection");
conB.style.display = 'none';
document.getElementById("badchoice").addEventListener("change",function(){
        if(conB.style.display=='none'){ 		
    	conB.style.display = 'block';
        conG.style.display = 'none'; 	
    }else{ 		
    	conB.style.display = 'none';
         	
    }

})

// document.getElementById("goodchoice").addEventListener("change",function(){
//     var con = document.getElementById("goodsection");
//         if(con.style.display=='none'){ 		
//     	con.style.display = 'block'; 	
//     }else{ 		
//     	con.style.display = 'none'; 	
//     }

// })

const conG = document.getElementById("goodsection");
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


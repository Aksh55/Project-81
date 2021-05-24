canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d") ;

ctx.beginPath() ;
ctx.strokeStyle = "grey" ;
ctx.linewidth = 10 ;
ctx.rect(150 , 150 , 530 , 300 ) ;
ctx.stroke() ;

ctx.beginPath() ;
ctx.strokeStyle = "blue" ;
ctx.linewidth = 10 ;
ctx.arc(275 , 270 , 65 , 0 , 2 * Math.PI) ;
ctx.stroke() ;

ctx.beginPath() ;
ctx.strokeStyle = "black" ;
ctx.linewidth = 10 ;
ctx.arc(425 , 270 , 65 , 0 , 2 * Math.PI) ;
ctx.stroke() ;

ctx.beginPath() ;
ctx.strokeStyle = "red" ;
ctx.linewidth = 10 ;
ctx.arc(575 , 270 , 65 , 0 , 2 * Math.PI) ;
ctx.stroke() ;

ctx.beginPath() ;
ctx.strokeStyle = "yellow" ;
ctx.linewidth = 10 ;
ctx.arc(350 , 340 , 65 , 0 , 2 * Math.PI) ;
ctx.stroke() ;

ctx.beginPath() ;
ctx.strokeStyle = "green" ;
ctx.linewidth = 10 ;
ctx.arc(500 , 340 , 65 , 0 , 2 * Math.PI) ;
ctx.stroke() ;
var esfera = new Image();
var mariposa = new Image();
var ctx = document.getElementById('micanvas').getContext('2d');
var i=0;


function init(){
  
  esfera.src = "png/esfera.png";
  mariposa.src = "png/mariposa.png";
  window.requestAnimationFrame(draw);
}

function draw() {
  
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,800,600); // limpiar canvas
  ctx.save();
  ctx.translate(250,250); 

  //Rotaci�n de la esfera  
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(50,0);
  ctx.drawImage(esfera,-12,-12,90,90);
  ctx.restore();

  // Mariposa
  ctx.save();
  i=i+1;
  if (i==600){i--;}
  ctx.translate(i,40*Math.sin((i*Math.PI)/60));
  ctx.drawImage(mariposa,-3.5,-3.5);
  ctx.restore();

  


  //mariposa est�tica 
  ctx.drawImage(mariposa,150, 150, 90, 90);
   
  window.requestAnimationFrame(draw);
}

init();
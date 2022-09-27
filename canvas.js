function dibujarCanvas(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5"; //Definir color de fondo
    tablero.strokeStyle = "#0A3871";
    
    tablero.fillRect(0,0,canvas.width,canvas.height); //Dibujar rectangulo
    tablero.beginPath();
    tablero.moveTo(canvas.width/3, canvas.height/2);
    tablero.lineTo((canvas.width/3)*2, canvas.height/2);    
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    let centrado = ((canvas.width)-(canvas.width*0.75))/2;
    let anchura = (canvas.width*0.75)/palabraSecreta.length;
    let linea = (anchura/4); 

    for(let i = 0; i < palabraSecreta.length; i++){
       
        tablero.moveTo((centrado + linea + (anchura*i)), (canvas.height/3)*2);
        tablero.lineTo((centrado + linea + (linea*2) + (anchura*i)), (canvas.height/3)*2);        
                
    }
    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index){
    tablero.font = 'bold 60px Inter';
    tablero.fillStyle = "#0A3871";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    

    let centrado = ((canvas.width)-(canvas.width*0.75))/2;
    let anchura = (canvas.width*0.75)/palabraSecreta.length;
    let linea = (anchura/3);   
    
    tablero.fillText(palabraSecreta[index], (centrado + linea + (anchura*index)), ((canvas.height/3)*2)-10);
    tablero.stroke();
}

function escribirGanador(){
    tablero.font = 'bold 60px Inter';
    tablero.fillStyle = "#0A3871";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    

    let centrado = ((canvas.width)-(canvas.width*0.75))/2;
    let anchura = (canvas.width*0.75)/palabraSecreta.length;
    let linea = (anchura/3);   
    
    tablero.fillText("Has Ganado!", (canvas.width/8)*3, canvas.height/8);
    tablero.stroke();
}

function escribirLetraIncorrecta(letra, errorLeft){
    tablero.font = 'italic 40px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    let centrado = ((canvas.width)-(canvas.width*0.75))/2;
    let anchura = (canvas.width*0.75)/8;
    let linea = (anchura/3);

    tablero.fillText(letra, (centrado + linea + (anchura*errorLeft)), (canvas.height/24)*19);

    switch(errorLeft){
        case 0:
            tablero.moveTo(canvas.width/2, canvas.height/2);
            tablero.lineTo((canvas.width/2), canvas.height/4);
        break;

        case 1:
            tablero.lineTo((canvas.width/8)*5, canvas.height/4);
            tablero.lineTo((canvas.width/8)*5, (canvas.height/16)*5);            
        break;

        case 2:
            //Cabeza
            tablero.beginPath();
            tablero.arc((canvas.width/8)*5, (canvas.height/16)*5, 20, 0, 2 * Math.PI);
            tablero.fill();                                    
        break;

        case 3:
            //Torso
            tablero.moveTo((canvas.width/8)*5, (canvas.height/16)*5);
            tablero.lineTo((canvas.width/8)*5, (canvas.height/80)*33);                        
        break;

        case 4:
            //Pierna izq
            tablero.lineTo((canvas.width/80)*47, (canvas.height/20)*9);                        
        break;

        case 5:
            //Pierna derecha
            tablero.moveTo((canvas.width/8)*5, (canvas.height/80)*33);
            tablero.lineTo((canvas.width/80)*53, (canvas.height/20)*9);            
        break;

        case 6:
            //Brazo izq
            tablero.moveTo((canvas.width/8)*5, (canvas.height/8)*3);
            tablero.lineTo((canvas.width/80)*47, (canvas.height/8)*3);                        
        break;

        case 7:
            //Brazo derecho
            tablero.lineTo((canvas.width/80)*53, (canvas.height/8)*3);
            tablero.fillText("Has Perdido!", (canvas.width/8)*3, canvas.height/8);                        
        break;

    }

    tablero.stroke();
}
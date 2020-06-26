window.alert("Bienvendido al Grupo 'Rollings");
var apodo = window.prompt("Dale un lindo Apodo a Kanchita");
var apodoAire = 100;
var apodoEgo = 15;
var cachetada = 40;
var patada = 55;
var golpe = [" la nariz ", " el diente ", " el brazo ", " la oreja " , " el ojo "];

    var fight = function(golpe) {
        // repeat and execute as long as the enemy robot is alive 
        
        while(apodoAire > 0) {
            window.alert("pasan 0.5 min " + apodo + " en su maximo apojeo empieza a escribir: Bla, bla, Bla y se infla su ego en 15 puntos");
            apodoAire = apodoAire + apodoEgo;
            window.alert( apodo + " se infló y ahora tiene " +  apodoAire + " puntos de aire");
            promptFight = window.prompt("escoge entre 'A' para una triple cachetada ó 'B' para una patada voladora, que hará que desinfle el ego de " + apodo);
            if (promptFight === "a" || promptFight === "A") {
                apodoAire = apodoAire - cachetada;
                
                
                window.alert("le rompiste " + golpe  + " y ahora tiene " + apodoAire + " de aire."); 
                
                
                    if (apodoAire <= 0) {
                        window.alert(apodo + " es un 'Cholo Terco' no se quiere callar");
                        break;
                    } 
                    else if (apodoAire > 200){
                        window.alert(apodo + " QUEMO CEREBRO Y EXPLOTA");
                        break;
                    }
                    else {
                        window.alert(apodo + " tiene ganas de seguir jodiendo.");
                        
                   
                           
                        }
                           
            }
            else if (promptFight === "b" || promptFight === "B") {
                
                apodoAire = apodoAire - patada;
                
               console.log(golpe);
                window.alert("le rompiste " + golpe  + " y ahora tiene " + apodoAire + " de aire."); 
               
                
                    if (apodoAire <= 0) {
                        window.alert(apodo + " es un 'Cholo Terco' no se quiere callar");
                        break;
                    } 
                    else if (apodoAire > 200){
                        window.alert(apodo + " QUEMA CEREBRO Y EXPLOTA");
                        break;
                    }
                    else {
                        window.alert(apodo + " tiene ganas de seguir jodiendo.");
                        golpe;
                   
                           
                        }
                          
            }
            else {
                window.alert("es 'A' o 'B'" );
                break;
            }
           
        }
    }
        
    for( var i = 0; i < golpe.length; i++){
        debugger;
           fight(golpe[i]);
        }
        
window.alert("Bienvendido al Grupo 'Rollings");
var apodo = window.prompt("Dale un lindo Apodo a Kanchita");
var apodoAire = 100;
var apodoEgo = 50;
var cachetada = 75;
var patada = 85;
var golpe = [" la nariz ", " el diente ", " el brazo ", " la oreja ", " el ojo ", " el cuello ", " el poto ", " los guevos ", " la boca " , " la rodilla "];

    var fight = function(golpe) {
        // repeat and execute as long as the enemy robot is alive 
        
        while(apodoAire > 0 && apodoAire < 200) {
            
            if (apodoAire <= 0) {
                window.alert(apodo + " es un 'Cholo Terco' y no se quiere callar :sad:");
                
            } 
            else if (apodoAire > 200){
                window.alert(apodo + " QUEMO CEREBRO Y EXPLOTA");
                
            }
            else {
                // window.alert(apodo + " tiene ganas de seguir jodiendo.");
                
           
                   
                
            window.alert("pasan 0.5 min " + apodo + " en su maximo apojeo empieza a escribir: Bla, bla, Bla y se infla su ego en " + apodoEgo +" puntos");
            apodoAire = apodoAire + apodoEgo;
            window.alert( apodo + " se infló y ahora tiene " +  apodoAire + " puntos de aire");
            promptFight = window.prompt("escoge entre 'A' para una triple cachetada ó 'B' para una patada voladora, que hará que desinfle el ego de " + apodo);
            if (promptFight === "a" || promptFight === "A") {
                apodoAire = apodoAire - cachetada;
                
                
                window.alert("le rompiste " + golpe  + " y ahora tiene " + apodoAire + " de aire."); 
                
                
                       
            }
            else if (promptFight === "b" || promptFight === "B") {
                
                apodoAire = apodoAire - patada;
                
               console.log(golpe);
                window.alert("le rompiste " + golpe  + " y ahora tiene " + apodoAire + " de aire."); 
               
                
                    if (apodoAire <= 0) {
                        window.alert(apodo + " es un 'Cholo Terco' no se quiere callar");
                        
                    } 
                    else if (apodoAire > 200){
                        window.alert(apodo + " QUEMA CEREBRO Y EXPLOTA");
                        
                    }
                    else {
                        window.alert(apodo + " tiene ganas de seguir jodiendo.");
                        golpe;
                   
                           
                        }
                        break;          
            }
            else {
                window.alert("es 'A' o 'B'" );
                if (apodoAire > 200){
                    window.alert(apodo + " QUEMA CEREBRO Y EXPLOTA");
                    
                }
                fight(golpe);
                
            }
        }
        break;   
        }
        
    }
        
    for( var i = 0; i < golpe.length; i++){
        // debugger;
           fight(golpe[i]);
        }

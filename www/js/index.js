function verificarPrimo(){
         
    var num = document.getElementById("num").value;
    var count = 0;

        if (num != null){
                    for(i=2; i < num; i++){
                        var resto = num % i;
                        if(resto == 0){
                            document.getElementById("result").innerHTML = "O número "+num+" não é primo!";
                            break;
                        }else {
                    count+=1;
                        }
        
                    }    
            if(count == (num-2)){
                document.getElementById("result").innerHTML = "O número "+num+" é primo!";
            }
        }
} 
 

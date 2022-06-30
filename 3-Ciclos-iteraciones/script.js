let i, output,int

const Intput = prompt("Ingresa un numero para multiplicarlo")

int = parseInt(Intput)

if(int !== 0){
    while(int>0){
        for(i = 0; i <=100; i++){
            output = int * i
        
            alert(`${int}x${i}=${output}`)
        }
        break;
    }
}else{
    alert("No puedes multiplicar 0!")
}


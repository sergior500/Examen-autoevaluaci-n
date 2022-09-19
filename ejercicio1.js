function inicializar(){
    let array = []
    let nombre = prompt("Escribe un nombre")
    array.push(nombre)
    for (let i=0; i<5; i++){
        let nombre = prompt("Escribe un nombre")
        if(array[i] != nombre){
            array.push(nombre)
        }else{
            alert("El nombre introducido ya existe intentelo de nuevo.")
            i = i-1
        }
        
    }
    array.sort()
    for (let i=0; i<array.length; i++){
        console.log(array[i].charAt(0).toUpperCase())
    }
}
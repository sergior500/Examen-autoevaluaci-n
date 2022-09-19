function anadir(){
    let numero = prompt("Introduzca numero")
    let dni = prompt("Introduzca DNI")
    let nombre = prompt("Introduzca nombre")
    let apellidos = prompt("Introduzca apellidos")

    let bandera = false

    dniLista = document.getElementsByName("dni")

    for (let dnis of dniLista){
        if (dnis.textContent == dni){
            bandera = true
        }
    }

    if (bandera == false){
        tabla = document.getElementById("table")
        fila = document.createElement("tr")
        
        colum0 = document.createElement("td")
        colum = document.createElement("td")
        colum1 = document.createElement("td")
        colum2 = document.createElement("td")

        atr1 = document.createAttribute("name")
        atr1.value = "dni"

        texto = document.createTextNode(dni)
        texto1 = document.createTextNode(nombre)
        texto2 = document.createTextNode(apellidos)
        texto3 = document.createTextNode(numero)

        colum.setAttributeNode(atr1)
        
        colum0.appendChild(texto3)
        colum.appendChild(texto)
        colum1.appendChild(texto1)
        colum2.appendChild(texto2)

        fila.appendChild(colum0)
        fila.appendChild(colum)
        fila.appendChild(colum1)
        fila.appendChild(colum2)

        tabla.appendChild(fila)
    }else{
        alert("El dni introducido ya existe")
    }
    
}

function borrar(){

    let dni = prompt("Introduzca DNI")
    let bandera = false

    tabla = document.getElementById("table")
    dniLista = document.getElementsByName("dni")

    let contador = 0
    let contadorReal = 0

    for (let dnis of dniLista){
        console.log(dnis.textContent)
        contador++
        if (dnis.textContent == dni){
            contadorReal = contador
            bandera = true
        }
    }

    if(bandera == false){
        alert("El dni no existe")
    }else{
        tabla.deleteRow(contadorReal)
        }
}
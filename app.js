

letraDNI = (numerosDNI) => {
    const resto = numerosDNI % 23
    let letra
    console.log(resto)
    if (resto == 0) {
        letra = "T"
        
    }
    
    if (resto == 1) {
        letra = "R"
        
    }
    
    if (resto == 2) {
        letra = "W"
        
    }
    
    if (resto == 3) {
        letra = "A"
        
    }
    
    if (resto == 4) {
        letra = "G"
        
    }
    
    if (resto == 5) {
        letra = "M"
        
    }
    
    if (resto == 6) {
        letra = "Y"
        
    }
    
    if (resto == 7) {
        letra = "F"
        
    }
    
    if (resto == 8) {
        letra = "P"
        
    }
    
    if (resto == 9) {
        letra = "D"
        
    }
    
    if (resto == 10) {
        letra = "X"
        
    }
    
    if (resto == 11) {
        letra = "B"
        
    }
    
    if (resto == 12) {
        letra = "N"
        
    }
    
    if (resto == 13) {
        letra = "J"
        
    }
    
    if (resto == 14) {
        letra = "Z"
        
    }
    
    if (resto == 15) {
        letra = "S"
        
    }
    
    if (resto == 16) {
        letra = "Q"
        
    }
    
    if (resto == 17) {
        letra = "V"
        
    }
    
    if (resto == 18) {
        letra = "H"
        
    }
    
    if (resto == 19) {
        letra = "L"
        
    }
    
    if (resto == 20) {
        letra = "C"
        
    }
    
    if (resto == 21) {
        letra = "K"
        
    }
    
    if (resto == 22) {
        letra = "E"
        
    }

    console.log(letra)
    console.log(resto);
}

letraDNI(47739142)

module.exports = { letraDNI }

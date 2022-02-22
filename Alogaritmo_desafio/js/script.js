console.log('Alogaritmos')

let contador = 0
let palabra  = ''

while ( palabra != 'pajaro') {
    palabra = prompt('Adivina que animal vuela')
    contador++
    if  (contador == 3) {
        alert('No perdiste')
        break;
    }
    
}

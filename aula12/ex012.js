var hora = 20
console.group(`São exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
}else if (hora > 12 &&  hora < 18) {

        console.log('Boa tarde!')
    } else if (hora > 18) {
        console.log('Boa noite!')
    }


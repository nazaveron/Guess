function lectura() {
    const num = document.getElementById('numeroEntrada').value;
    const respuesta = 22;
    const miArray = ['Casi lo tienes!', 'No adivinaste :(', 'Yo sé que puedes adivinar! Intenta de nuevo'];
    const formula = Math.floor(Math.random()*miArray.length);
    const tryAgain = miArray[formula];
    const adivinaAdivinador = (parseInt(num)) == respuesta ? "¡Adivinaste!" : tryAgain;
    document.getElementById('mensaje').innerHTML = adivinaAdivinador;
}


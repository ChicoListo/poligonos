function dibujarPoligono() {
    const canvas = document.getElementById('canvas');
    if (!canvas.getContext) return;

    const lados = parseInt(document.getElementById('lados').value);
    const ctx = canvas.getContext('2d');
    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;
    const radio = 150;
    const angulo = (2 * Math.PI) / lados;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(centroX + radio * Math.cos(0), centroY + radio * Math.sin(0));

    let angulosInternos = '';
    for (let i = 1; i <= lados; i++) {
        const x = centroX + radio * Math.cos(i * angulo);
        const y = centroY + radio * Math.sin(i * angulo);
        ctx.lineTo(x, y);

        // Calcular y mostrar ángulos internos
        const anguloInterno = ((lados - 2) * 180) / lados;
        angulosInternos += `Ángulo ${i}: ${anguloInterno.toFixed(2)}°\n`;
    }
    ctx.closePath();
    ctx.stroke();

    document.getElementById('angulos').innerText = angulosInternos;
}

function dibujarRectaHorizontal() {
    const canvas = document.getElementById('canvas');
    if (!canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const longitud = canvas.width * 0.4;  // 40% de la anchura del canvas
    const startX = (canvas.width - longitud) / 2;
    const endX = startX + longitud;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(startX, canvas.height / 2);
    ctx.lineTo(endX, canvas.height / 2);
    ctx.stroke();
}

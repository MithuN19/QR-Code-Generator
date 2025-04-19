let qr; // global QR code instance

function generateQR() {
    const text = document.getElementById("text").value;
    const qrCodeDiv = document.getElementById("qrcode");

    // Clear previous QR
    qrCodeDiv.innerHTML = "";

    // Generate QR
    qr = new QRCode(qrCodeDiv, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000",
        colorLight: "#fff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function downloadQR() {
    const qrCanvas = document.querySelector('#qrcode canvas');

    if (!qrCanvas) {
        alert("Please generate a QR code first!");
        return;
    }

    const imgData = qrCanvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = imgData;
    link.download = "qrcode.png";
    link.click();
}

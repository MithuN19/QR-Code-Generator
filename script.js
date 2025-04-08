function generateQR() {
    let text = document.getElementById("text").value;
    let qrCodeDiv = document.getElementById("qrcode");
    qrCodeDiv.innerHTML = "";  // Clear previous QR code
    new QRCode(qrCodeDiv, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000",
        colorLight: "#fff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

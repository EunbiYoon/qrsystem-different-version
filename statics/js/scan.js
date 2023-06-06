var html5QrcodeScanner=new html5QrcodeScanner("reader",{
    fps:10,
    qrbox:250
});
function onScanSuccess(qrCodeMessage){
    document.getElementById("qrData").value=qrCodeMessage;
}
html5QrcodeScanner(onScanSuccess);
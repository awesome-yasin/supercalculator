
var sideSize = 150;
var settings = {text:'', width: sideSize, height: sideSize};
var qrcode = new QRCode(document.getElementById("qrcode"), settings);

function triggerCreateQRCode() {
  qrcode.clear();
  createQRCode(document.getElementById('input').value);
}

function createQRCode(input) {
  qrcode.makeCode(input);
}








//docReady(function() {
//	hljs.initHighlightingOnLoad();
//	var results = document.getElementById('scanned-result');
//	var lastMessage;
//	var codesFound = 0;
//	function onScanSuccess(qrCodeMessage) {
//		if (lastMessage !== qrCodeMessage) {
//			lastMessage = qrCodeMessage;
//			++codesFound;
//			results.innerHTML += `<div>[${codesFound}] - ${qrCodeMessage}</div>`;
//		}
//	}
//	var html5QrcodeScanner = new Html5QrcodeScanner(
//		"reader", { fps: 10, qrbox: 250 }, /* verbose= */ true);
//	html5QrcodeScanner.render(onScanSuccess, _ => { /** ignore error */ });
//});
//
//var results = document.getElementById('scanned-result');
//
//function onScanSuccess(qrCodeMessage) {
//  // handle on success condition with the decoded message
//  
//  document.write(qrCodeMessage)
//}
//
//var html5QrcodeScanner = new Html5QrcodeScanner(
//	"reader", { fps: 10, qrbox: 150 });
//html5QrcodeScanner.render(onScanSuccess);
//
//var html5QrcodeScanner = new Html5QrcodeScanner(
//  "reader", { fps: 10, qrbox: 250 });
//      
//function onScanSuccess(qrCodeMessage) {
//  // handle on success condition with the decoded message
//  html5QrcodeScanner.clear();
//  // ^ this will stop the scanner (video feed) and clear the scan area.
//}
//
//html5QrcodeScanner.render(onScanSuccess);
var results = document.getElementById('scanned-result');

function onScanSuccess(qrCodeMessage) {
	// handle the scanned code as you like
  //document.write(`QR matched = ${qrMessage}`);
  results.innerHTML += "Your scanned code says:" + " " + `${qrCodeMessage}` + "<br>";
  
}

function onScanFailure(error) {
	// handle scan failure, usually better to ignore and keep scanning
	console.warn(`QR error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 250 }, /* verbose= */ true);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
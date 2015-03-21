#pragma strict

var controlCanvas : Canvas;
var settingsCanvas : Canvas;
var networkCanvas : Canvas;
var IPAddress : String = "0.0.0.0";
var PortNum : String = "0000";

function switchToNetworkCanvas () {
	
	networkCanvas.enabled = true;
	settingsCanvas.enabled = false;
}

function switchToSettingsCanvas () {
	
	networkCanvas.enabled = false;
	controlCanvas.enabled = false;
	settingsCanvas.enabled = true;
}

function switchToControlCanvas () {
	controlCanvas.enabled = true;
	settingsCanvas.enabled = false;
}

function updateIPAddress (theNewNum) {
	IPAddress = theNewNum;
}

function updatePort (theNewNum) {
	PortNum = theNewNum;
}

function ConnectToServer () {
	Network.Connect(IPAddress, parseInt(PortNum));
}
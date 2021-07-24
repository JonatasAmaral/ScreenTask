var refreshInterval = 500;

var timer = setInterval(function () {
	var ImagePreview = document.getElementById("imgPrev");
	ImagePreview.src = "ScreenTask.jpg?rand=" + Math.random();
}, refreshInterval);

var btn = document.getElementById("btnStartStop");

btn.onclick = function () {
	if (btn.getAttribute("data-state") == "stop") {
		btnShort.setAttribute("data-state", "start");
		btn.setAttribute("data-state", "start");
		btn.className = "btn btn-lg btn-success";
		btn.innerHTML = "Start Watching!";
		clearInterval(timer);
		timer = null;
	} else {
		btnShort.setAttribute("data-state", "stop");
		btn.setAttribute("data-state", "stop");
		btn.className = "btn btn-lg btn-danger";
		btn.innerHTML = "Stop Watching!";
		timer = setInterval(function () {
			var ImagePreview = document.getElementById("imgPrev");
			ImagePreview.src = "ScreenTask.jpg?rand=" + Math.random();
		}, refreshInterval);
	}
};

var btnShort = document.getElementById("startStopShortcut");
btnShort.onclick = function() {
  btn.click();
}

var btnSetTimer = document.getElementById("btnSetTimer");

btnSetTimer.onclick = function () {
	var txtInterval = document.getElementById("txtInterval");
	refreshInterval = txtInterval.value;
};

var lnkAbout = document.getElementById("lnkAbout");
var msgAbout = document.getElementById("msgAbout");
var closeAbout = document.getElementById("closeAbout");
lnkAbout.onclick = function () {
	msgAbout.className = "alert alert-info alert-dismissable";
};
closeAbout.onclick = function () {
	msgAbout.className = "alert alert-info alert-dismissable hidden";
};

function requestFullScreen(element) {
	// Supports most browsers and their versions.
	var requestMethod =
		element.requestFullScreen ||
		element.webkitRequestFullScreen ||
		element.mozRequestFullScreen ||
		element.msRequestFullScreen;

	if (requestMethod) {
		// Native full screen.
		requestMethod.call(element);
	} else if (typeof window.ActiveXObject !== "undefined") {
		// Older IE.
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
			wscript.SendKeys("{F11}");
		}
	}
}

var btnFullscreen = document.getElementById("btnFullscreen");
btnFullscreen.onclick = function () {
	var viewer = document.getElementById("Viewer");
	requestFullScreen(viewer);
};

var btnFullscreenShort = document.getElementById("fullscreenShortcut");
btnFullscreenShort.onclick = function() {
	btnFullscreen.click();
}


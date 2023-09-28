function displayWindowSize() {
    var w = window.outerWidth; var h = window.outerHeight; var txt = "Window size: width=" + w + ", height=" + h;document.getElementById("result").innerHTML = txt; 
    } 
window.onresize = displayWindowSize;
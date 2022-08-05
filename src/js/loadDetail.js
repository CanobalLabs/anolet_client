module.exports = function (detail, reshow) {
    document.getElementById("load-detail").innerText = detail;
    if (reshow == true) {
        document.getElementById("loading").style.opacity = "1";
        document.getElementById("load-status").innerHTML = '<div class="refresh" onclick="window.location.reload()">Refresh</div>';
        document.getElementById("loading").style.display = "block"
    }
}
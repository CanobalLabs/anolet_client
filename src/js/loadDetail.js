module.exports = function (detail, reshow) {
  document.getElementById("load-detail").innerText = detail;
  if (reshow == true) {
    document.getElementById("loading").style.opacity = "1";
    document.getElementById("load-status").innerHTML =
      '<div class="refresh" onclick="window.location.reload()">Refresh</div><div style="margin-left: 10px;" class="refresh" onclick="window.closeSelf()">Exit Client</div>';
    document.getElementById("loading").style.display = "block";
  }
};

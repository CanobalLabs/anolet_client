module.exports = function (msg) {
  document.getElementById("player-" + msg.plrid).style.opacity = "0";
  document.getElementById("listusr-" + msg.plrid).remove();
  setTimeout(function () {
    document.getElementById("player-" + msg.plrid).remove();
  }, 500);
};

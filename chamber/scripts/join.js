joinTime = document.getElementById("join-time");



joinTime.value = Date.now();

document.getElementById("join").addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "thankyou.html";
});

let resizeTimeout;

window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        location.reload();
    }, 50);  // Đặt thời gian chờ để tránh reload nhiều lần liên tiếp
});
console.log(123)


$(document).ready(function () {
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".pay").addEventListener("click", function () {
            var userPoints = 100000;  // 사용자의 현재 포인트 (예제 값)
            var totalAmount = 3000; // 결제 금액

            if (userPoints < totalAmount) {
                alert("포인트 부족으로 결제가 실패되었습니다.");
            } else {
                alert("포인트 결제로 결제가 진행되었습니다.");
                window.location.href = "order_success.html"; // 주문완료 페이지로 이동
            }
        });
    });
});
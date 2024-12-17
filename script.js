// script.js
document.addEventListener("DOMContentLoaded", function() {
    const dots = document.querySelectorAll(".dot");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const closeBtn = document.getElementById("close-btn");
  
    // 도트를 클릭했을 때
    dots.forEach(dot => {
      dot.addEventListener("click", function() {
        const content = this.getAttribute("data-content");
        popupContent.textContent = content; // 작업물 내용 표시
        popup.style.display = "block"; // 팝업 보이기
      });
    });
  
    // 팝업 닫기 버튼 클릭
    closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    // 도트를 랜덤 위치에 배치
    dots.forEach(dot => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
    });
  });

  
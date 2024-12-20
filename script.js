// script.js
document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const closeBtn = document.getElementById("close-btn");
  
    // 랜덤 위치 배치
    dots.forEach(dot => {
      if (!dot.classList.contains("fixed-dot")) { // 고정된 도트는 제외
        dot.style.left = Math.random() * (window.innerWidth - 40) + "px";
        dot.style.top = Math.random() * (window.innerHeight - 40) + "px";
      }
  
      // 도트 클릭 이벤트
      dot.addEventListener("click", () => {
        const content = dot.getAttribute("data-content");
        const url = dot.getAttribute("data-url");
  
        popupContent.innerHTML = `
          <p>${content}</p>
          ${url ? `<a href="${url}" target="_blank">더 보기</a>` : ""}
        `;
        popup.style.display = "block";
      });
    });
  
    // 팝업 닫기
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    // 팝업 외부 클릭 시 닫기
    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  
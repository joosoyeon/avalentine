// JavaScript 코드 (script.js)
document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  const popup = document.getElementById("popup");
  const popupContent = document.getElementById("popup-content");
  const popupLink = document.getElementById("popup-link");
  const closeBtn = document.getElementById("close-btn");

  // 도트 클릭 이벤트
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const content = dot.getAttribute("data-content");
      const url = dot.getAttribute("data-url");

      popupContent.textContent = content; // 팝업에 콘텐츠 삽입
      if (url) {
        popupLink.href = url;
        popupLink.style.display = "inline-block"; // 링크 버튼 표시
      } else {
        popupLink.style.display = "none"; // 링크 버튼 숨김
      }
      popup.style.display = "flex"; // 팝업 표시
    });
  });

  // 팝업 닫기 버튼
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none"; // 팝업 숨김
  });

  // 팝업 외부 클릭 시 닫기
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});

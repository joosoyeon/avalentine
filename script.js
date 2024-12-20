// script.js
document.addEventListener("DOMContentLoaded", () => {
    const dotsContainer = document.getElementById("dots-container");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const closeBtn = document.getElementById("close-btn");
  
    // 데이터 콘텐츠 배열
    const dataContents = [
      "깝히", "생크림", "계란찜", "제육볶음", "양배추 샐러드", "초밥", "방어", "숭어",
      "매운탕", "꿔바로우마니두개더", "푸딩", "코코넛깝히", "우동", "칼국수", "수제비",
      "국밥", "수육전골", "스키야끼", "초코소라빵", "참이슬"
    ];
  
    // 초록색 도트 20개 생성
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot", "small-dot");
      dot.dataset.content1 = dataContents[i];
      dot.dataset.content2 = `두 번째 클릭: ${dataContents[i]}`;
      dot.style.left = Math.random() * (window.innerWidth - 40) + "px";
      dot.style.top = Math.random() * (window.innerHeight - 40) + "px";
  
      // 클릭 이벤트 추가
      let clickCount = 0;
      dot.addEventListener("click", (e) => {
        clickCount++;
        const content =
          clickCount === 1
            ? dot.dataset.content1
            : clickCount === 2
            ? dot.dataset.content2
            : "이미 모든 내용을 확인했습니다.";
        popupContent.textContent = content;
        popup.style.display = "block";
        e.stopPropagation(); // 팝업 외부 클릭 방지
      });
  
      dotsContainer.appendChild(dot);
    }
  
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
  
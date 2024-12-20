document.addEventListener("DOMContentLoaded", () => {
  const dotsContainer = document.getElementById("dots-container");
  const contentDisplay = document.getElementById("content-display");

  // 데이터 콘텐츠 배열
  const dataContents = [
    "깝히", "생크림", "계란찜", "제육볶음", "양배추 샐러드", "초밥", "방어", "숭어",
    "매운탕", "꿔바로우마니두개더", "푸딩", "코코넛깝히", "우동", "칼국수", "수제비",
    "국밥", "수육전골", "스키야끼", "초코소라빵", "참이슬"
  ];

  // 초록색 도트 20개 생성
  const dots = []; // 도트들을 저장할 배열 생성

  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("div"); // 새로운 div 요소 생성
    dot.classList.add("dot"); // 생성된 div에 'dot' 클래스 추가

    // 도트의 초기 위치를 랜덤으로 설정
    dot.style.left = Math.random() * (window.innerWidth - 40) + "px"; // 화면 너비 내에서 랜덤 위치
    dot.style.top = Math.random() * (window.innerHeight - 40) + "px"; // 화면 높이 내에서 랜덤 위치

    // 각 도트에 데이터 콘텐츠 연결
    dot.dataset.content = dataContents[i % dataContents.length];

    // 클릭 이벤트 추가
    dot.addEventListener("click", () => {
      // 콘텐츠 표시 영역에 데이터 콘텐츠 표시
      contentDisplay.textContent = dot.dataset.content;
      contentDisplay.style.display = "block";

      // 3초 후 콘텐츠 숨기기
      setTimeout(() => {
        contentDisplay.style.display = "none";
      }, 3000);
    });

    dotsContainer.appendChild(dot); // 생성된 도트를 화면에 추가
    dots.push(dot); // 생성된 도트를 배열에 저장
  }

  // 도트 이동 함수
  function moveDotsRandomly() {
    dots.forEach((dot) => {
      // 새로운 랜덤 위치 계산
      const newLeft = Math.random() * (window.innerWidth - 40); // 화면 너비 내에서 랜덤 위치
      const newTop = Math.random() * (window.innerHeight - 40); // 화면 높이 내에서 랜덤 위치

      // CSS transition을 사용해 부드럽게 이동
      dot.style.transition = "all 5s ease"; // 5초 동안 부드럽게 이동
      dot.style.left = newLeft + "px";
      dot.style.top = newTop + "px";
    });

    // 5초마다 반복적으로 이동
    setTimeout(moveDotsRandomly, 5000);
  }

  // 도트 이동 시작
  moveDotsRandomly();
});

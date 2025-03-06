onload = () => {
  document.addEventListener(
    "click",
    function () {
      let audio = document.getElementById("myAudio");
      audio.play();
    },
    { once: true }
  );
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  let text = ` 
    <span class='highlight'>W</span>-wonderful,<br>
    <span class='highlight'>O</span>-outstanding,<br>
    <span class='highlight'>M</span>-marvellous,<br>
    <span class='highlight'>A</span>-amazing,<br>
    <span class='highlight'>N</span>-nice!<br>
    Wishing you a day that’s just like you – really special!
  `;

  let index = 0;
  let speed = 70; // Tốc độ gõ

  function typeEffect() {
    if (index < text.length) {
      let textContainer = document.getElementById("text");
      let currentChar = text[index];

      if (currentChar === "<") {
        let endIndex = text.indexOf(">", index); // Tìm dấu '>'
        if (endIndex !== -1) {
          let htmlTag = text.substring(index, endIndex + 1);
          textContainer.insertAdjacentHTML("beforeend", htmlTag); // Chèn HTML mà vẫn giữ nguyên định dạng
          index = endIndex; // Nhảy đến cuối thẻ HTML
        }
      } else {
        textContainer.insertAdjacentText("beforeend", currentChar); // Chèn ký tự bình thường
      }

      index++;
      setTimeout(typeEffect, speed);
    }
  }

  setTimeout(() => {
    typeEffect();
  }, 5000);
};

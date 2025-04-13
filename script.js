const tileYakuMap = {
  "1m": ["pinfu", "riichi"],
  "2m": ["", ""],
  "3m": ["", ""],
  "4m": ["", ""],
  "5m": ["", ""],
  "6m": ["", ""],
  "7m": ["", ""],
  "8m": ["", ""],
  "9m": ["", ""],
  "10m": ["", ""],
  "11m": ["", ""],
  "12m": ["", ""],
  "13m": ["", ""],
  "14m": ["", ""],
  "15m": ["", ""],
  "16m": ["", ""],
  "17m": ["", ""],
  "18m": ["", ""],
  "19m": ["", ""],
  "20m": ["", ""],
  "21m": ["", ""],
  "22m": ["", ""],
  "23m": ["", ""],
  "24m": ["", ""],
  "25m": ["", ""],
  "26m": ["", ""],
  "27m": ["", ""],
  "28m": ["tuiso", ""],
  "29m": ["tuiso", ""],
  "30m": ["tuiso", ""],
  "31m": ["tuiso", ""],
  "32m": ["tuiso", ""],
  "33m": ["tuiso", ""],
  "34m": ["tuiso", ""],
};

const tiles = document.querySelectorAll(".tile");
const yakuList = document.getElementById("yaku-list");

tiles.forEach(tile => {
  tile.addEventListener("click", () => {
    const tileValue = tile.getAttribute("data-tile");
    const yakus = tileYakuMap[tileValue] || [];

    yakuList.innerHTML = "";
    
    if (yakus.length === 0) {
      const li = document.createElement("li");
      li.textContent = "対応する役はありません。";
      yakuList.appendChild(li);
      return;
    }

    yakus.forEach(yaku => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = `yaku_images/${yaku}.png`; // ← ここに画像を入れる
      img.alt = yaku;
      img.style.height = "60px"; // 表示サイズ調整
      img.style.margin = "5px";
      li.appendChild(img);
      yakuList.appendChild(li);
    });
  });
});

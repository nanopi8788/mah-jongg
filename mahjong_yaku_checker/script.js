const tileYakuMap = {
  "1m": ["タンヤオ不可", "リャンメン待ち"],
  "2m": ["タンヤオ", "チートイツに使える"],
  "3m": ["タンヤオ", "イーペーコーの可能性"]
};

const tiles = document.querySelectorAll(".tile");
const yakuList = document.getElementById("yaku-list");

tiles.forEach(tile => {
  tile.addEventListener("click", () => {
    const tileValue = tile.getAttribute("data-tile");
    const yakus = tileYakuMap[tileValue] || [];

    yakuList.innerHTML = "";
    yakus.forEach(yaku => {
      const li = document.createElement("li");
      li.textContent = yaku;
      yakuList.appendChild(li);
    });
  });
});

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
  "28m": ["", ""],
  "29m": ["", ""],
  "30m": ["", ""],
  "31m": ["", ""],
  "32m": ["", ""],
  "33m": ["", ""],
  "34m": ["", ""],
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

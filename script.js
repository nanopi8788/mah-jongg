const tileYakuMap = {
  "1m": ["タンヤオ不可", "リャンメン待ち"],
  "2m": ["タンヤオ", "チートイツに使える"],
  "3m": ["タンヤオ", "イーペーコーの可能性"],
  "4m": ["タンヤオ不可", "リャンメン待ち"],
  "5m": ["タンヤオ", "チートイツに使える"],
  "6m": ["タンヤオ", "イーペーコーの可能性"],
  "7m": ["タンヤオ不可", "リャンメン待ち"],
  "8m": ["タンヤオ", "チートイツに使える"],
  "9m": ["タンヤオ", "イーペーコーの可能性"],
  "10m": ["タンヤオ不可", "リャンメン待ち"],
  "11m": ["タンヤオ", "チートイツに使える"],
  "12m": ["タンヤオ", "イーペーコーの可能性"],
  "13m": ["タンヤオ不可", "リャンメン待ち"],
  "14m": ["タンヤオ", "チートイツに使える"],
  "15m": ["タンヤオ", "イーペーコーの可能性"],
  "16m": ["タンヤオ不可", "リャンメン待ち"],
  "17m": ["タンヤオ", "チートイツに使える"],
  "18m": ["タンヤオ", "イーペーコーの可能性"],
  "19m": ["タンヤオ不可", "リャンメン待ち"],
  "20m": ["タンヤオ", "チートイツに使える"],
  "21m": ["タンヤオ", "イーペーコーの可能性"],
  "22m": ["タンヤオ不可", "リャンメン待ち"],
  "23m": ["タンヤオ", "チートイツに使える"],
  "24m": ["タンヤオ", "イーペーコーの可能性"],
  "25m": ["タンヤオ", "チートイツに使える"],
  "26m": ["タンヤオ", "イーペーコーの可能性"],
  "27m": ["タンヤオ不可", "リャンメン待ち"],
  "28m": ["タンヤオ", "チートイツに使える"],
  "29m": ["タンヤオ", "イーペーコーの可能性"],
  "30m": ["タンヤオ不可", "リャンメン待ち"],
  "31m": ["タンヤオ", "チートイツに使える"],
  "32m": ["タンヤオ", "イーペーコーの可能性"],
  "33m": ["タンヤオ不可", "リャンメン待ち"],
  "34m": ["タンヤオ", "チートイツに使える"],
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

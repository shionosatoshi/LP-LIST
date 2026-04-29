const cropData = {
  tomato: {
    name: "トマト",
    progress: "定植後・育成初期",
    area: "0.45ha",
    harvest: "6月中旬",
    summary: "苗の活着を確認しながら、支柱立てと潅水量の調整を進めています。"
  },
  eggplant: {
    name: "ナス",
    progress: "定植準備中",
    area: "0.32ha",
    harvest: "6月下旬",
    summary: "畝立てと元肥の調整が完了し、気温を見ながら定植タイミングを調整しています。"
  },
  pepper: {
    name: "ピーマン",
    progress: "苗育成中",
    area: "0.28ha",
    harvest: "7月上旬",
    summary: "ハウス内で苗を管理し、葉色と根張りを確認しながら圃場への移植準備を進めています。"
  },
  lettuce: {
    name: "レタス",
    progress: "収穫前チェック",
    area: "0.36ha",
    harvest: "5月上旬",
    summary: "結球の状態が安定してきたため、出荷サイズと収穫順の確認を行っています。"
  },
  onion: {
    name: "玉ねぎ",
    progress: "肥大期",
    area: "0.52ha",
    harvest: "5月下旬",
    summary: "球の肥大が進んでいます。倒伏の兆候と土壌水分を見ながら収穫時期を判断します。"
  },
  snappea: {
    name: "スナップえんどう",
    progress: "収穫中",
    area: "0.18ha",
    harvest: "収穫中",
    summary: "莢の張りを見ながら朝採りを実施しています。体験収穫でも案内しやすい状態です。"
  }
};

const cropButtons = document.querySelectorAll(".crop-chip");
const cropName = document.querySelector("#cropName");
const cropProgress = document.querySelector("#cropProgress");
const cropArea = document.querySelector("#cropArea");
const cropHarvest = document.querySelector("#cropHarvest");
const cropSummary = document.querySelector("#cropSummary");

if (cropButtons.length && cropName && cropProgress && cropArea && cropHarvest && cropSummary) {
  cropButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = cropData[button.dataset.crop];
      if (!selected) return;

      cropButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      cropName.textContent = selected.name;
      cropProgress.textContent = selected.progress;
      cropArea.textContent = selected.area;
      cropHarvest.textContent = selected.harvest;
      cropSummary.textContent = selected.summary;
    });
  });
}

const form = document.querySelector("#reservationForm");
const result = document.querySelector("#formResult");

if (form && result) {
  const dateInput = form.elements.date;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  dateInput.min = formatDate(today);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const booking = Object.fromEntries(data.entries());

    localStorage.setItem("masterFarmLatestBooking", JSON.stringify({
      ...booking,
      submittedAt: new Date().toISOString()
    }));

    result.classList.add("is-visible");
    result.innerHTML = `
      <strong>予約リクエストを受け付けました。</strong><br>
      ${escapeHtml(booking.name)} 様 / ${escapeHtml(booking.date)} ${escapeHtml(booking.time)} / ${escapeHtml(booking.experience)} / ${escapeHtml(booking.guests)}名
    `;
    form.reset();
    dateInput.min = formatDate(today);
  });
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

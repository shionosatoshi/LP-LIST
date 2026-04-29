const catData = {
  mugi: {
    name: "Mugi",
    place: "窓辺の席",
    mood: "そっと近い",
    charm: "丸い寝顔",
    summary: "窓辺のクッションが定位置。眠そうな顔で店内を見渡し、気が向くと足元にすっと座ります。"
  },
  shiro: {
    name: "Shiro",
    place: "本棚の上",
    mood: "気まぐれ",
    charm: "青い瞳",
    summary: "高い場所から店内を見守る白猫。名前を呼ばれるより、静かなページの音に反応します。"
  },
  suzume: {
    name: "Suzume",
    place: "丸椅子の下",
    mood: "慎重派",
    charm: "小さな足音",
    summary: "少し離れた場所から人を観察するのが好き。慣れると椅子のそばで小さく喉を鳴らします。"
  },
  kohaku: {
    name: "Kohaku",
    place: "受付横",
    mood: "人なつこい",
    charm: "しっぽの返事",
    summary: "お客さまの入店をゆっくり確認する案内役。撫でられるより、近くで話を聞くのが得意です。"
  }
};

const catButtons = document.querySelectorAll(".cat-chip");
const catName = document.querySelector("#catName");
const catPlace = document.querySelector("#catPlace");
const catMood = document.querySelector("#catMood");
const catCharm = document.querySelector("#catCharm");
const catSummary = document.querySelector("#catSummary");

if (catButtons.length && catName && catPlace && catMood && catCharm && catSummary) {
  catButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = catData[button.dataset.cat];
      if (!selected) return;

      catButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      catName.textContent = selected.name;
      catPlace.textContent = selected.place;
      catMood.textContent = selected.mood;
      catCharm.textContent = selected.charm;
      catSummary.textContent = selected.summary;
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

    localStorage.setItem("maisonNekoLatestBooking", JSON.stringify({
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

// Definer en liste over dårlige ord og deres tilsvarende gode ord
const curseWords = [
  {
    bad: "var",
    good: "const",
  },
  {
    bad: "float",
    good: "grid",
  },
  {
    bad: "marquee",
    good: "just don´t",
  },
];

// Hent HTML-elementet med id "text"
const textElement = document.querySelector("#text");

// Hent HTML-elementet, der repræsenterer knappen
const btn = document.querySelector("button");

// Lyt efter klikbegivenheder på knappen og udfør replaceWords-funktionen, når den klikkes
btn.addEventListener("click", replaceWords);

// Funktionen, der erstatter de dårlige ord med de gode ord
function replaceWords() {
  // Hent tekstindholdet af det valgte HTML-element ("#text")
  let textContent = textElement.textContent;

  // Tjek om teksten indeholder nogen af de dårlige ord
  const hasBadWords = curseWords.some((item) => textContent.includes(item.bad));

  // Hvis teksten ikke indeholder dårlige ord, vis en dialogboks og stop funktionen
  if (!hasBadWords) {
    document.querySelector("dialog").showModal();
    return;
  }

  // Iterer gennem listen over dårlige ord og erstatter dem med de gode ord
  curseWords.forEach((item) => {
    textContent = textContent.split(item.bad).join(`<span>${item.good}</span>`);
  });

  // Opdater tekstindholdet af HTML-elementet med den ændrede tekst
  textElement.innerHTML = textContent;
}

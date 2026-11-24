// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");
accordeon.querySelectorAll("details").forEach((det) => (det.open = false));

if (accordeon) {
  const detailsList = accordeon.querySelectorAll("details");
  const summaries = accordeon.querySelectorAll("summary");

  summaries.forEach((summary) => {
    summary.addEventListener("click", () => {
      detailsList.forEach((det) => {
        det.open = false;
      });
    });
});
}
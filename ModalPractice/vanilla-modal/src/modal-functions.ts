// showModal for Modal
function openModal() {
  const modal = document.getElementById("home-modal") as HTMLDialogElement;
  modal?.showModal();
}

// show for Non Modal
function openNonModal() {
  const modal = document.getElementById("home-modal") as HTMLDialogElement;
  modal?.show();
}

function closeModal() {
  const modal = document.getElementById("home-modal") as HTMLDialogElement;
  modal?.close();
}

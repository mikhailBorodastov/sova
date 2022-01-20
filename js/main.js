$(document).ready(function () {
  const modalOverlay = $(".modal__overlay");
  const modalDialog = $(".modal__dialog");
  const modalButton = $('[data-toggle="modal"]');
  const closeModalButton = $(".modal__close");

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  modalOverlay.on("click", closeModal);


  function openModal() {
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});

$(".nav-menu__button").on("click", function () {
  $(".nav-menu").toggleClass("nav-menu__mobile-visible");
});

$(".square-burger").on("click", function () {
  $(".square-burger").toggleClass("square-burger--filled");
});

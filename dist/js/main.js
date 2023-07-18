//modal-signUp
var modal = document.querySelector('.modal-signup');
var btn = document.querySelector('.header .nav .right-nav .button');
btn.onclick = function(){
    modal.style.display = "flex";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
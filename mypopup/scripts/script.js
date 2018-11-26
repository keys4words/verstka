// PopUp Form and thank you popup after sending message
var $btnShowPopup = $(".myBtnClass");
var $popOverlay = $(".popup-overlay");
var $popWindow = $(".popWindow");
var $subscribeWindow = $(".subscribe_window");
var $popThankYouWindow = $(".thank_you_window");
var $popClose = $(".close-btn");

$(function() {
	
	// используйте этот код, если нужно появление формы без куки
  $btnShowPopup.on('click', function(){
	setTimeout(function() {
	$popOverlay.fadeIn();
	$subscribeWindow.fadeIn();	
	}, 1000);
  });
	
  // Close Pop-Up after clicking on the button "Close"
  $popClose.on("click", function() {
    $popOverlay.fadeOut();
    $popWindow.fadeOut();
  });
 
  // Close Pop-Up after clicking on the Overlay
  $(document).on("click", function(event) {
    if ($(event.target).closest($popWindow).length) return;
    $popOverlay.fadeOut();
    $popWindow.fadeOut();
    event.stopPropagation();
  });
 
  // Form Subscribe
  $(".subscribe-form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "scripts/mail.php",
      data: th.serialize()
    }).done(function() {
      // после успешной отправки скрываем форму подписки и выводим окно с благодарностью за заполнение формы
      $subscribeWindow.fadeOut();
      $popThankYouWindow.fadeIn();
      // очищаем форму
      setTimeout(function() {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});



$(function () {
  
var timeDisplayEl = $('#currentDay')


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
displayTime();
setInterval(displayTime, 1000);

for (var i = 9; i <= 17; i++) { 
  var timeBlock = $('#hour-' + i);
  var saveInput = localStorage.getItem('hour-' + i);

  if (saveInput !== null) {
    timeBlock.find('textarea').val(saveInput);
  }
}
});

  // $(".savebtn").on('click', function(){
  //   var timeBlockId = $(this).closest(".time-block").attr("id");
  //   var textarea = $(this).siblings(".description");
  //   var userInput = textarea.val();
  //   localStorage.setItem(timeBlockId, userInput);
  


$(function () {
  var currentTime = dayjs().format("HH");
  function colorByHour() {
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id"));
      $(this).removeClass("past present future");

      if (blockTime < currentTime) {
        $(this).addClass("past");
      } else if (blockTime === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  colorByHour();
});

const saveButtons = document.querySelectorAll('.saveBtn');

saveButtons.forEach(saveButton => {
  saveButton.addEventListener("click", function(){
    const timeBlock = this.closest('.time-block');
    const timeBlockId = timeBlock.id.split("")[1];
    const userInput = timeBlock.querySelector('.description').value;
    localStorage.setItem(timeBlockId, userInput);
  });
});

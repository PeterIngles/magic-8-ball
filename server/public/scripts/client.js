// EVENT ---> STATE ---> RENDER
$(document).ready(onReady);

function onReady() {
  console.log("🤑");
  $('.ask-btn').on('click', getFortune)
  // Handlers
  // $( SELECTOR ) .METHOD ( EVENT, CHILD-SELECTOR, DATA, FUNCTION )

} // end onReady

function getFortune(){
  console.log("Clicked on ask-btn")
  // ajax call to server to get tasks
  $.ajax({
    type: 'GET',
    url: '/fortune'
  }).then(function (response) {
    $('.ask-btn').empty();
    let newFortune = $(`
    <div type="button" class="p-4 m-4 btn-outline-light text-white shadow rounded-2 ask-btn">${response[0].fortune}</div>
    `)
    newFortune.attr('id',response.id)
    $('.ask-btn').append(newFortune)
  }).catch(function (error) {
    console.error('Error:', error);
  });
}


// Event Handler Functions
function handle() {
  console.log('In handle ✅')
} // end handle


// Render function updates the DOM
function render() {
  console.log('In render ✅')
} // end render

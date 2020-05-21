// search.js
function submit(e) {
    e.preventDefault();

    document.location.href='/search.html?query='+$('.search-box').val().trim();
}
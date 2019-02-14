const loadPage = link => {
  const data = link.target.getAttribute("data-href");
  console.log(data);
  const url = link.target.href;
  console.log(url);
  $(".content").addClass("animate-out");
  setTimeout(function() {
    requestContent(url);
    history.pushState(data, null, url);
  }, 1000);
};
const requestContent = file => {
  $(".content").load(file + " .content");
};

$(document).on("click", ".nav-link", function(event) {
  event.preventDefault();
  $(".homepage").addClass("selected");
  $(".homepage-img").addClass("homepage-img-animate");
  $(".bar").addClass("selected");
  loadPage(event);
});

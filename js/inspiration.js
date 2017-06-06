var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'js/inspiration.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};
ourRequest.send();
function createHTML(workshopData) {
  var rawTemplate = document.getElementById("workshopTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  console.log(compiledTemplate);
  var ourGeneratedHTML = compiledTemplate(workshopData);
  var workshopContainer = document.getElementById("events");
  workshopContainer.innerHTML = ourGeneratedHTML;
}

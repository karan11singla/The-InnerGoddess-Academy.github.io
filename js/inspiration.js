var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://gist.githubusercontent.com/vishal-parameswaran/908c8339b1d78c2da8bc1ae293e62a53/raw');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    console.log(data);
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
  var ourGeneratedHTML = compiledTemplate(workshopData);
  var petsContainer = document.getElementById("events");
  petsContainer.innerHTML = ourGeneratedHTML;
}

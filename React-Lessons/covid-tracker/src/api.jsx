var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.collectapi.com/corona/countriesData");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey your_token");

xhr.send(data);
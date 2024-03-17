// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let data = {
    name: "",
    url: ""
};

let bgContainerElement = document.getElementById("bgContainer");
let formElement = document.getElementById("bookmarkForm");
let nameElement = document.getElementById("siteNameInput");
let urlElement = document.getElementById("siteUrlInput");
let nameErrElement = document.getElementById("siteNameErrMsg");
let urlErrorElement = document.getElementById("siteUrlErrMsg");
let ulEl = document.getElementById("bookmarksList");

let validateName = function() {
    if (nameElement.value === "") {
        nameErrElement.textContent = "Required*";
    } else {
        nameErrElement.textContent = "";
        data.name = nameElement.value;

    }
};

let validateUrl = function() {
    if (urlElement.value === "") {
        urlErrorElement.textContent = "Required*";
    } else {
        urlErrorElement.textContent = "";
        data.url = urlElement.value;
    }
};

function getData(data) {

    ulEl.textContent = "";

    let liEl = document.createElement("li");
    liEl.classList.add("li-list");
    ulEl.appendChild(liEl);

    let headingEl = document.createElement("h1");
    headingEl.classList.add("link-heading");
    headingEl.textContent = data.name;
    liEl.appendChild(headingEl);

    let linkEl = document.createElement("a");
    linkEl.href = data.url;
    linkEl.target = "__blank";
    linkEl.textContent = data.url;
    liEl.appendChild(linkEl);

}




nameElement.addEventListener('change', validateName);
urlElement.addEventListener('change', validateUrl);
formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    validateName();
    validateUrl();
    getData(data);

});
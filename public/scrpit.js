"use strict";
(function () {
const MY_SERVER_BASEURL = "/jokebook/joke";
window.addEventListener("load", init);
function init() {
    getAllJokes();
function getAllJokes() {
    let table = id("joke-table");
    fetch(MY_SERVER_BASEURL + "/all")
        .then(checkStatus)
        .then((response) => {
        console.log("Response: ", catagorie,joke.response);
        
        let tableRow = table.insertRow();
       
        let catagorie = tableRow.insertCell();
        let joke = tableRow.insertCell();
        let resp = tableRow.insertCell();
       
        div.appendChild(catagorie);
        div.appendChild(joke);
        div.appendChild(resp);

                    
      })
      .catch((error) => {
        console.error("Error: ", error);
      });

    }  
    // Fetch all jokes    
    fetch('http://localhost:3000/jokebook/joke/all')
    .then(response => response.json())
    .then(jokes => {
        
        const jokeContainer = document.getElementById('jokeContainer');
        jokes.forEach(joke => {
            const jokeElement = document.createElement('p');
            jokeElement.textContent = `${joke.joke}: ${joke.response}`;
            jokeContainer.appendChild(jokeElement);
        });
    })
    .catch(error => console.error('Error fetching joke:', error));

//helper function
  function id(idName) {
    return document.getElementById(idName);
  }

  function checkStatus(response) {
    if (!response.ok) {
      throw Error("Error in request: " + response.statusText);
    }
    return response.json();
  }

  let newButton = id("new-product-btn");
  newButton.addEventListener("click", function () {
    id("form-popup").style.display = "block";
  });

  let saveButton = id("save-product");
  saveButton.addEventListener("click", function (e) {
    e.preventDefault();
    submitForm();
  });

  let closeButton = id("cancel-btn");
  closeButton.addEventListener("click", function (e) {
    id("form-container").reset();
    id("form-popup").style.display = "none";
  });

function submitForm() {
    let params = new FormData(id("jokeEntry-container")); // pass in entire form tag
    let jsonBody = JSON.stringify(Object.fromEntries(params)); //make form data json string.
    //let corsUrl = 'http://cors-anywhere.herokuapp.com/' + POST_BASEURL;
    fetch(MY_SERVER_BASEURL + "/new", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: jsonBody,
    })
      .then(checkStatus)
      //.then(console.log)
      .then(refreshForm)
      .catch(alert);
  }

  function refreshForm() {   
    document.querySelectorAll("td").forEach((element) => {
        element.remove();
      });
   
    id("form-popup").style.display = "none";
    id("jokeEntry-container").reset();
    getAllJokes();
  }


}

})();
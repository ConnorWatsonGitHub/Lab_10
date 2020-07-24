
let header = document.querySelector('header');
let main = document.querySelector('main');

// Store JSON URL in a variable

let requestURL = 'https://connorwatsongithub.github.io/lab-8-javascript/products.json';

let request = new XMLHttpRequest();


// open a new request using the open method of XHR object 


request.open('GET', requestURL);

//set up the response type 

request.responseType = 'json';

//send the request 

request.send();

//set up an event handler to listen for onload, so we don't do anything until the data return 

request.onload = function () {
    let weirdProducts = request.response;
    populateHeader(weirdProducts);
    topDeals(weirdProducts);
};


function populateHeader(jsonObj) {
    let headerH1 = document.createElement('h1');
    headerH1.textContent = jsonObj['companyName'];
    header.appendChild(headerH1);
    let headerPara1 = document.createElement('p');
    headerPara1.textContent = jsonObj['headOffice'];
    header.appendChild(headerPara1);
    let headerPara2 = document.createElement('p');
    headerPara2.textContent = 'Est. ' + jsonObj["established"];
    header.appendChild(headerPara2);
}

function topDeals(jsonObj) {

    let topDeals = jsonObj['topDeals'];

    for (let i = 0; i < topDeals.length; i++) {

        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let list = document.createElement('li');

        img.setAttribute('src', 'images/' + topDeals[i].image);
        img.setAttribute('alt', topDeals[i].name);
        h2.textContent = topDeals[i].name;
        p1.textContent ='$' + topDeals[i].price;
        p2.textContent = topDeals[i].description;

        let features = topDeals[i].features;
        for (let j = 0; j < features.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = features[j];
            list.appendChild(listItem);
        }


        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);

        main.appendChild(article);
    }
}
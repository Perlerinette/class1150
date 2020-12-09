
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; 
const key = '6JlvTvXrZBZ4nwArvy0ccmACqtLd0R5R';
let url;

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS SECTION
const section = document.querySelector('section');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

// initialize results components
nav.style.display = 'none';
let pageNumber = 0;
let displayNav = false;

// Add events listeners
// searchForm.addEventListener('submit', fetchResults); 
searchForm.addEventListener('submit', submitSearch); 
nextBtn.addEventListener('click', nextPage); 
previousBtn.addEventListener('click', previousPage);

function submitSearch(e){
    pageNumber = 0;
    fetchResults(e);
}


function nextPage(e){
    pageNumber++; 
   fetchResults(e);  
   console.log("Page number:", pageNumber);
}

function previousPage(e){
    if(pageNumber > 0) { 
        pageNumber--; 
      } else {
        return; 
      }
      fetchResults(e); 
      console.log("Page:", pageNumber);
}


// FETCHRESULTS
// We make the fetch request.
// We pass in the NYT url.
// We create a promise .then that returns a response object called result.
// The promise asynchronously returns a function that converts the result into usable json format - result.json() is that function call.
// We create a second promise that has a function that takes in the json object.
// We log the json object for now.
function fetchResults(e){
    e.preventDefault(); //default nature of a form is to POST and refresh the page..in this case, prevents the refresh
    // assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    
    if(startDate.value !== '') {
        console.log(startDate.value)
      url += '&begin_date=' + startDate.value;
    };
  
    if(endDate.value !== '') {
      url += '&end_date=' + endDate.value;
    };

    fetch(url)
        .then(function(result) {
            return result.json();
        })
        .then(function(json) {
            displayResults(json); 
        })
        .catch(function(err){
            console.log('nope');
            console.log(err);
        });
}


// DISPLAYRESULTS - ARTICLES
// We create a link variable that is going to use the a element, the anchor tag which will allow us to create an 'href' link.
// We create a current variable that holds the data of the current article as we iterate.
// We log the current data so that we can see it in the console.
// Since link is an a element, we need to attach an href property to it. current.web_url grabs the hyperlink for the current article out of the json result. This will set the value for the link.href each time we iterate.
// The text that we'll use in link.textContent is set to the value of current.headline.main, which is part of the json object from the NYT API. 

function displayResults(json) {
    let articles = json.response.docs;

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }



    if(articles.length === 0) {
      console.log("No results");
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');  
            let para = document.createElement('p');  
            let clearfix = document.createElement('div');

            let current = articles[i]; 
            console.log("Current:", current); 

            link.href = current.web_url; 
            link.target ='blank'; //opens a new tab
            link.textContent = current.headline.main; 

            para.textContent = 'Keywords: ';  // #1

            
            for(let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');   
                span.textContent += current.keywords[j].value + ' ';   
                para.appendChild(span); //attach the 'span' to the keywords (see #1 above)
            }

            if(current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
              }

            clearfix.setAttribute('class','clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }

    if(articles.length === 10){
        nav.style.display = 'block';
        previousBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    } else if (articles.length < 10 && pageNumber > 0) {
        nav.style.display = 'block';
        previousBtn.style.display = 'block';
        nextBtn.style.display = 'none';
    } else {
        nav.style.display = "none;"
    }



    // if(articles.length >= 10 && pageNumber == 0) { //more than 1 page of results but on 1st page
    //     nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    //     previousBtn.style.display = 'none';
    //     nextBtn.style.display = 'block'; // shows the nav display if 10 items are in array
    // } else {
    //     nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
    // } 
  }
"use strict"

// Fetch DATA
function getData() {

    fetch("http://kea-alt-del.dk/twitter/api/")
    .then(res=>res.json())
    .then(display)
}

getData();

//Connects data (from json) and our template

function display(stats){

    console.log(stats)
    let twitterTemplate = document.querySelector('.statTemplate').content;

    // IMPORTANT It's an array of objects that why I needed to go 'insise' by addding dot stats.statuses <-
    // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

    stats.statuses.forEach(stat=>{
    console.log(stat)


// CLONE TEMPLATE
let clone = twitterTemplate.cloneNode(true);

//  Show name 'id'
clone.querySelector('.fullName').textContent=`${stat.id}`;

//  Show date 'created_at'
clone.querySelector('.date').textContent=`${stat.created_at}`;

//  Show text 'text'
clone.querySelector('.message').textContent=`${stat.text}`;

//  Show hashtag 'text' <--- still Hashtags Undefined
// clone.querySelector('.hash').textContent=`${stat.entities[0].text}`;
clone.querySelector('.hash').textContent=`${stat.entities.hashtags.text}`;


// Copy to HTML file
document.querySelector("#container").appendChild(clone);

})
}

import $ from 'jquery'
import { searchList } from './searchAPI'

function renderSpaces (listOfItems) {
    for (var count = 0; count < listOfItems.results.length; count++) {
    var resultHtml = `
            <a href="${listOfItems.results[count].url}">
            <div class="eachresult">
              <img src="${listOfItems.results[count].Images[0].url_fullxfull}" alt="itemimage"/>
              <div class="itemname">
              <a href="${listOfItems.results[count].url}">${listOfItems.results[count].title}</a>
              </div>
              <div class="shopnameprice">
                <span class="shopname">${listOfItems.results[count].Shop.shop_name}</span>
                <span class="price">$${listOfItems.results[count].price}</span>
              </div>
            </div>
            </a>`;
              $(".resultbox").append(resultHtml);
    };
};


renderSpaces(searchList);

var addHTML = `
<div class="heartcontainer">
  <a href="#"><img src="images/heart.png" id="heart"alt="heart" /></a>
  <a href="#"><img src="images/hamburger.png" id="burger"alt="burger" /></a>
</div>
              `;

$(".eachresult").append(addHTML);

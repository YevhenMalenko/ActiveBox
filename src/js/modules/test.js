const test = () => {

let featuresItems = document.querySelector('.features__items');

let request = new XMLHttpRequest(),
    url = "assets/database/features.json";

function createItem(src, title, desc) {

  let div = document.createElement('div');
  div.classList.add('features__item');
  let itemContent =
    `
    <img class="features__item-img" src="${src}" alt="feature">
    <h3 class="features__item-title">${title}</h3>
    <div class="features__item-text">${desc}</div>
  `;
  div.insertAdjacentHTML('afterbegin', itemContent);
	return div
}

request.open("GET", url, true);
request.setRequestHeader("content-type", "application/json");
request.onreadystatechange = function() {
	if (request.readyState == 4 && request.status == 200) {
    let featuresArr = JSON.parse(request.responseText);
    console.log(featuresArr);  
		
		featuresArr.forEach(function (item) {
			featuresItems.appendChild(createItem(item.img, item.title, item.description ));
		});

	}
};
request.send();

};

export default test;
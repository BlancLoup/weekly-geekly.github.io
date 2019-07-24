$(function() {
	//Operate with Page Headings menu
	const pageHeadingsButton = document.querySelector('.js-list-of-headings-button');
	const pageHeadingsContainer = document.querySelector('.js-page-headings-container');
	const toolsBarWidth = document.querySelector('.js-tools-bar').offsetWidth;

	pageHeadingsContainer.style.right = Number(toolsBarWidth) + 10 + 'px';

	const HTMLCollectionOfPageHeadings = document.getElementsByTagName('h3');
	const arrayOfPageHeadings = Array.from(HTMLCollectionOfPageHeadings);
	const arrayOfPageHeadingsMenuElements = []

	arrayOfPageHeadings.forEach(function(pageHeadingElement) {
		let anchorLink = window.location.origin + window.location.pathname + '#' + pageHeadingElement.id;
		let outputString = '<li><a href="' + anchorLink + '" data-id="' + pageHeadingElement.id + '" class="js-page-heading-link">' + pageHeadingElement.innerText + '</a></li>';
		arrayOfPageHeadingsMenuElements.push(outputString);
	});

	const pageHeadingsMenuContent = '<p>Jump to part:</p><ul>' + arrayOfPageHeadingsMenuElements.join('') + '</ul>';
	pageHeadingsContainer.innerHTML = pageHeadingsMenuContent;

	pageHeadingsButton.addEventListener('click', function(e) {
		e.preventDefault();

		if (pageHeadingsButton.getAttribute('data-state') === 'closed') {
			//Open Page Headings menu

			pageHeadingsButton.innerText = '❌';
			pageHeadingsButton.setAttribute('data-state', 'opened');
			pageHeadingsContainer.style.display = 'block';
			
		} else {
			//Close Page Headings menu

			pageHeadingsButton.innerText = '📜';
			pageHeadingsButton.setAttribute('data-state', 'closed');
			pageHeadingsContainer.style.display = 'none';

		}
	});

	pageHeadingsContainer.addEventListener('click', function(e) {
		if (e.target.classList.contains('js-page-heading-link')) {
			e.preventDefault();
			let elementIdToScrollTo = e.target.getAttribute('data-id');
			document.getElementById(elementIdToScrollTo).scrollIntoView({behavior: 'smooth', block: 'start'});
		}
	});

  //Hide - it is not fixed yet
  $(pageHeadingsButton).hide();


	//Go to Top button Logic
	$('.js-go-to-top-button').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 800);
	});


	//Go to Bottom button Logic
	$('.js-go-to-bottom-button').on('click', function(e) {
		e.preventDefault();
		//$('html, body').animate({scrollTop: document.querySelector('.js-mediator-article').scrollHeight}, 800);
		document.querySelector('.js-all-articles-navigation-panel').scrollIntoView({'block': 'start', 'behavior': 'smooth'});
	});


	//Generate the list of all articles
	// $.getJSON('https://quick-geek.github.io/allArticles.json', function(data) {
	// 	const $listOfAllArticles = $('.js-list-of-pages').detach();
	// 	console.log(data);

	// 	data.forEach(article => {
	// 		$listOfAllArticles.append('<li><a href="../articles/' + article.id + '/index.html">' + article.title + '</a></li>\n');
	// 	});
		
	// 	$('.js-list-of-articles-container').append($listOfAllArticles);
	// });


	//Get the list of all articles
	//$('.js-list-of-articles-container').load('../../allArticles.html .js-all-articles-list');


	//Set current year to legal info in the footer
	$('.js-page-footer-legal-info-year').text(new Date().getFullYear());


	//Fetch articles for New Articles Previewers
	// $('.js-new-article-preview').each(function(index, element) {
	// 	const link = $('.js-all-articles-list li:nth-child(' + index + 1 +') a').attr('href');
	// 	$(element).load(link + ' .js-mediator-article');
	// });


	//Donate Button
	const $donateButton = $('.donate-btn');

	const getRandomElement = function(array) { 
	  return array[Math.floor(Math.random() * (array.length - 0) + 0)]; 
	};

	const arrayOfDonateButtons = [
		{
			'bgColor': 'orange',
			'textColor': 'blue',
			'text': 'DONATE',
			'link': 'http://bit.ly/2TTe9my'
		},
		{
			'bgColor': 'red',
			'textColor': 'black',
			'text': 'DONATE',
			'link': 'http://bit.ly/2Y4FYYh'
		},
		{
			'bgColor': 'green',
			'textColor': 'blue',
			'text': 'DONATE',
			'link': 'http://bit.ly/2HofpIN'
		},
		{
			'bgColor': 'aqua',
			'textColor': 'blue',
			'text': 'DONATE',
			'link': 'http://bit.ly/2HDrysq'
		},
		{
			'bgColor': '#3a3a3a'/*grey*/,
			'textColor': 'blue',
			'text': 'DONATE',
			'link': 'http://bit.ly/2FhVl8q'
		},
		{
			'bgColor': '#3a3a3a'/*grey*/,
			'textColor': 'white',
			'text': 'DONATE',
			'link': 'http://bit.ly/2FhVl8q'
		},
		{
			'bgColor': '#2196f3'/*lightblue*/,
			'textColor': 'white',
			'text': 'DONATE',
			'link': 'http://bit.ly/2UGBNjs'
		}
	];

	const donateButtonText = 'Plant a 🌴 for 1 💲';
	const donateButtonBgColor = '#2196f3';
	const donateButtonTextColor = 'white';

	$donateButton.html(donateButtonText);
	$donateButton.attr('href', 'http://bit.ly/32oCLF9');
	$donateButton.css({
		'background-color': donateButtonBgColor,
		'color': donateButtonTextColor,
		'top': $donateButton.width() + $('.js-page-header').height()
	});


	//2048 Game
  $('.js-page').after('<div class="game-2048-container"><iframe src="../../24G/index.html" class="game-2048-iframe js-game-2048-iframe"></iframe></div>');

  //Focus on 2048 Game iframe when press arrow keys (up, down, right or left)
  document.addEventListener('keydown', function(e) {
  	if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
  		$('.js-game-2048-iframe').focus();
  	}
  });


  //Add Ads notification
  $('<div class="ad-click-notification js-ad-click-notification">Please click on Ads to support the site</div>').appendTo('body');
  window.setTimeout(function() {
    $('.js-ad-click-notification').slideDown(2000);
  }, 10 * 1000);
});
$(function() {
	const $bodyElement = $('body');

  const getRandomElement = function(array) { 
	  return array[Math.floor(Math.random() * (array.length - 0) + 0)]; 
	};

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

	// const arrayOfDonateButtons = [
	// 	{
	// 		'bgColor': 'orange',
	// 		'textColor': 'blue',
	// 		'text': 'DONATE',
	// 		'link': 'http://bit.ly/2TTe9my'
	// 	},
	// 	{
	// 		'bgColor': 'red',
	// 		'textColor': 'black',
	// 		'text': 'DONATE',
	// 		'link': 'http://bit.ly/2Y4FYYh'
	// 	},
	// 	{
	// 		'bgColor': 'green',
	// 		'textColor': 'blue',
	// 		'text': 'DONATE',
	// 		'link': 'http://bit.ly/2HofpIN'
	// 	},
	// 	{
	// 		'bgColor': 'aqua',
	// 		'textColor': 'blue',
	// 		'text': 'DONATE',
	// 		'link': 'http://bit.ly/2HDrysq'
	// 	},
	// 	{
	// 		'bgColor': '#3a3a3a'/*grey*/,
	// 		'textColor': 'blue',
	// 		'text': 'DONATE',
	// 		'link': 'http://bit.ly/2FhVl8q'
	// 	},
	// 	{
	// 		'bgColor': '#3a3a3a'/*grey*/,
	// 		'textColor': 'white',
	// 		'text': 'DONATE',
	// 		'link': 'http://bit.ly/2FhVl8q'
	// 	},
	// 	{
	// 		'bgColor': '#2196f3'/*lightblue*/,
	// 		'textColor': 'white',
	// 		'text': 'DONATE',
	// 		'link': 'http://bit.ly/2UGBNjs'
	// 	}
	// ];

	// const donateButtonText = 'Plant a 🌴 for 1 💲';
	// const donateButtonBgColor = '#2196f3';
	// const donateButtonTextColor = 'white';

	// $donateButton.html(donateButtonText);
	// $donateButton.attr('href', 'http://bit.ly/32oCLF9');
	// $donateButton.css({
	// 	'background-color': donateButtonBgColor,
	// 	'color': donateButtonTextColor,
	// 	'top': $donateButton.width() + $('.js-page-header').height()
	// });


	//2048 Game
  $('.js-page').after('<div class="game-2048-container"><iframe src="../../24G/index.html" class="game-2048-iframe js-game-2048-iframe"></iframe></div>');

  //Focus on 2048 Game iframe when press arrow keys (up, down, right or left)
  document.addEventListener('keydown', function(e) {
  	if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
  		$('.js-game-2048-iframe').focus();
  	}
  });


  //Add Ads notification
  $('<div class="ad-click-notification js-ad-click-notification">Please click on Ads to support the site</div>').appendTo($bodyElement);
  window.setTimeout(function() {
    $('.js-ad-click-notification').slideDown(2000);
  }, 10 * 1000);


  //Amazon Ads Side Widget
  const arrayOfAmazonIframeSrcs = [
    'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=geeksworld0d-20&marketplace=amazon&region=US&placement=B0029XHGRQ&asins=B0029XHGRQ&linkId=3da0981db657d0cc91c3cc600f358778&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=000dbf&bg_color=ffffff',
    'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=geeksworld0d-20&marketplace=amazon&region=US&placement=032157351X&asins=032157351X&linkId=86582b0f2183cd724ba7a44ada1ed13a&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=000dbf&bg_color=ffffff',
    'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=geeksworld0d-20&marketplace=amazon&region=US&placement=0671530771&asins=0671530771&linkId=daf06e768d9f45248059d5e56f934521&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=000dbf&bg_color=ffffff'
  ];

  const amazonSideWidget = {
  	$self: $('<div class="amazon-side-widget is-closed" />'),
  	$title: $('<div class="amazon-side-widget-title">Books for geeks:</div>'),
  	$iframe: $('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="" />'),
  	$prevBtn: $('<div class="amazon-side-widget-prev-btn amazon-side-widget-nav-btn"><i class="fa fa-chevron-circle-left"></i></div>'),
  	$nextBtn: $('<div class="amazon-side-widget-next-btn amazon-side-widget-nav-btn"><i class="fa fa-chevron-circle-right"></i></div>'),
  	$moreBtn: $('<a class="amazon-side-widget-more-btn" href="https://www.amazon.com/gp/search?ie=UTF8&tag=geeksworld0d-20&linkCode=ur2&linkId=44eac47bbe0d7de17a768bb6a00fcdf2&camp=1789&creative=9325&index=books&keywords=geeks">More Books</a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=geeksworld0d-20&l=ur2&o=1" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />'),
  	$closeBtn: $('<div class="amazon-side-widget-close-btn"><i class="fa fa-angle-double-right"></i></div>')
  }

  amazonSideWidget.$title.appendTo(amazonSideWidget.$self);
  amazonSideWidget.$iframe.appendTo(amazonSideWidget.$self);
  amazonSideWidget.$iframe.attr('src', getRandomElement(arrayOfAmazonIframeSrcs));
  amazonSideWidget.$prevBtn.appendTo(amazonSideWidget.$self);
  amazonSideWidget.$nextBtn.appendTo(amazonSideWidget.$self);
  amazonSideWidget.$moreBtn.appendTo(amazonSideWidget.$self);
  amazonSideWidget.$closeBtn.appendTo(amazonSideWidget.$self);

  amazonSideWidget.$self.appendTo($bodyElement);

  const getAmznIframeSrc = function(direction) {
    const currentIndex = arrayOfAmazonIframeSrcs.indexOf(amazonSideWidget.$iframe.attr('src'));
    const lastIndex = arrayOfAmazonIframeSrcs.length - 1;
    let resultIndex = 0;

    if (direction === 'prev') {
      resultIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    } else {
      resultIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    }

    return resultIndex;
  }

  amazonSideWidget.$prevBtn.on('click', function(e) {
    amazonSideWidget.$iframe.attr('src', arrayOfAmazonIframeSrcs[getAmznIframeSrc('prev')]);
  });

  amazonSideWidget.$nextBtn.on('click', function(e) {
    amazonSideWidget.$iframe.attr('src', arrayOfAmazonIframeSrcs[getAmznIframeSrc('next')]);
  });
  
  amazonSideWidget.$closeBtn.on('click', function(e) {
    amazonSideWidget.$self.toggleClass('is-closed');
    //Change close btn icon
    amazonSideWidget.$closeBtn.find('.fa').toggleClass('fa-angle-double-left').toggleClass('fa-angle-double-right');
  });


  //Affiliate Program Notification
  const apnText = 'This site may contain Advertising and Affiliate Program links. As an Amazon Associate I earn from qualifying purchases.';
  $('.page-footer').before('<div class="apn">' + apnText + '</div>');


  //Amazon Native Shopping Ads
  const $amazonNativeShoppingAdsDiv = $('<div id="amzn-assoc-ad-a902da66-d8a1-4bc0-800f-582318c74da0" />');
  $amazonNativeShoppingAdsDiv.insertAfter('.game-2048-container');
  $.getScript('https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=a902da66-d8a1-4bc0-800f-582318c74da0');
});
$(document).ready(function(){

	// Highlight init
	hljs.initHighlightingOnLoad();

	// Scrollbar function
    $(".main-nav").mCustomScrollbar({
		setTop: "0px"
	});

	// Style all tables - markdown fix
	$('table').addClass('table');
	$('table thead').addClass('thead-light');

	// Show all links on click
    $('#show-all-links').on('click', function(){
    	$('.main-nav').removeClass('d-none');
    	$(this).remove();
    });

    // Add permalink to headings 2 - 6
    $('.main-content-body h2, .main-content-body h3, .main-content-body h4, .main-content-body h5, .main-content-body h6').each(function(){
		var permalink = $(this).attr('id'),
		text = $(this).text();

		$(this).empty();

		if (permalink !== 'undefined') {
			$(this).append('<a href="#' + permalink + '">' + text + '<i class="fa fa-link" aria-hidden="true"></i></a>');
		}
	});

	// Search function
    if($("#search").length != 0) {
    	$.getJSON('/search/search_index.json').done(searchData);

    	function searchData(data) {

    		let container = $("#searchList");
    		let options = {
				shouldSort: true,
				tokenize: true,
				threshold: 0,
				location: 0,
				distance: 100,
				maxPatternLength: 32,
				minMatchCharLength: 1,
				keys: [
			    	"title"
				]
			};

			let fuse = new Fuse(data.docs, options);

			$('#search').on('keyup', function(){
				let result = fuse.search(this.value);
				if(result.length === 0) {
					container.html('');
				} else {
					container.html('');
	    			container.append("<ul><h3>Search results</h3></ul>");
	    		}
				result.forEach(function(value){
					$("#searchList ul").append("<li><a href='../"+ value.location +"'>" + value.title + "</a></li>");
				});
			});
    	}
    }

});

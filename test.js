casper.test.begin('Casper Quick Search Searches for results in text', function suite(test){
	casper.start('http://docs.casperjs.org/en/latest/testing.html', function(){
		test.assertTitle("Testing — CasperJS 1.1.0-DEV documentation", "Casper documentation page renders as expected")
		test.assertExists('form[action="search.html"]', 'quick search form is found');
		this.fill('form[action="search.html"]', {
			q: "casperjs"
		}, true);
	});

	casper.then(function(){
		test.assertTitle("Search — CasperJS 1.1.0-DEV documentation", "Search Result Title is ok");
		test.assertUrlMatch(/q=casperjs/, "search term has been submitted");
	});	
	
	casper.run(function(){
		test.done();
	})
});

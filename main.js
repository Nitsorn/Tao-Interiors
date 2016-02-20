$(document).ready(function(){

	$("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});

	
	var gallery = 
	[
		{
			name: 'MiddleGlen',
			desc: 'Middle',
			count: 6
		},
		{	
			name: '5th & Renfrew',
			desc: 'Renfrew',
			count: 6
		},
		{	
			name: 'West 20th Avenue',
			desc: 'West 20',
			count: 6
		},
		{	
			name: 'East 29th Avenue',
			desc: 'East 29',
			count: 5
		},
		{	
			name: 'Deep Cove',
			desc: 'Cove',
			count: 11
		},
		{	
			name: 'Dunbar Residence',
			desc: 'Dunbar',
			count: 12
		},
		
		{	
			name: 'Maple Road',
			desc: 'Maple',
			count: 11
		},
		{	
			name: 'Ava Restaurant',
			desc: 'Ava',
			count: 6
		},
		{	
			name: 'Lumen Residence',
			desc: 'Lumen',
			count: 1
		},
		{	
			name: 'Corus Entertainment',
			desc: 'Corus',
			count: 3
		},

	]


	var currentPage = $('.scrollable-frame>h3').text();

	$.each(gallery, function(i,project){

		console.log(project['name'])
		console.log(currentPage)

		if (project['name'] == currentPage) {
			imageList = [];
			for (j = 0; j < project['count']; j++) {
				var imageName = '<img src="' +'./assets/gallery/'+project['desc']+'/'+(j+1)+'.jpg"' + '>';
				console.log(imageName)
				imageList.push(imageName);
			}
			console.log(imageList)

			$.each(imageList, function(k,imageUrl){
				var img = imageUrl;
				$('#project-images').append(img)

			})
		} 
	})
})
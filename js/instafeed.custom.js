$(document).ready(function() 
{
    var userFeed = new Instafeed({
        get: 'user',
        userId: 8346501777,
        limit:6,
        resolution: 'standard_resolution',
        accessToken: '8346501777.abcf7a4.549b72a5edcd4c3aa595f6193fe71c3d',
        sortBy:'most-recent',
				
        template:    '<div class="col-30 coloring manucuring">'
                  +  '<a class="fancybox" href="{{image}}" data-fancybox-group="gallery">'
                  +  '<div class="hover">'
                  +  '<img src="{{image}}" alt="Portfolio" class="center-block" height="90%"/>'
                  +  '<div class="mask-img">'
                  +  '<div class="hvrlink">'
                  +  '<h3></h3>'
                  +  '<p>{{caption}}</p>'
                  +  '</div>'
                  +  '</div>'
                  +  '</div>'
                  +  '</a>'
                  +  '</div>',
						});
    userFeed.run();


});

  
var data = {
    reviews: [
        {
            review: "in our image"
        }
        
    ]
};

// Loop through each entry in the reviews object
$.each(data.reviews,function(i,itemData){
    // create a paragraph item and insert the actual review within
    // then assign it to variable "p" so we can work with it
    var p = $('<span>').text(itemData.review);
    
    // if this is the first review, make it active on the rotator. if it isn't,
    // hide it until it's the correct turn.
    if (i == 0) p.addClass('active');
    else p.css({opacity: 0.0});
    
    // now insert the built paragraph in the reviews element
    $('#reviews').append(p);

});

// cycles through the various paragraphs entered in hiding/showing them in sequence
function showNextReview() {
    // grab the current active ite,
    var $active = $('#reviews span.active');

    // if we don't have one, start with the last
    if ( $active.length == 0 ) $active = $('#reviews span:last');

    
    // grab the item after this item. we check length to see if we're at the end of
    // the list and need to go back to the beginning again
    var $next =  $active.next().length ? $active.next() : $('#reviews span:first');

    // now, remove the active class from the current one and begin fading it out
    $active.removeClass('active').animate({opacity: 0.0}, 1000, function(){
        // it's faded, how hide it
        $active.hide();
        
        // now show the new once, and begin fading it in
        $next.show().addClass('active').animate({opacity: 1.0}, 1300);
    });
}

// have the animation look one every 5 seconds
setInterval(showNextReview, 3800 );


var times = ["200px", "300px", "100px", "12px", "20px", "200px", "20px"],
    move = 0,
    div = document.getElementById("placeDiv");

setTimeout(function next() {
    $(div).animate({top: times[move++ % times.length]}, 18500);
    setTimeout(next, 1000)
}, 1000);
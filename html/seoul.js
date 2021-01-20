var pics = [] /* array of pics */
var time_anim = 500 /* anim time */

$(document).ready(function () {
    pics = $("#deck img"); /* find ships */
    shuffle(2); /* wheeee */
});

function shuffle(level) {
    /* do the animation */
    var c = randInt(2, 3)
    cycle(getElements(pics, c))

    if (level > 1) {
        setTimeout(function () {
            shuffle(level - 1)
        }, time_anim)
    }
}

function randInt(min, max) {
    /* get random integer */
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function cycle(items) {
    /* cycle ships in array */
    var pos0 = $(items[0]).position()

    for (i = 1; i < items.length; i++) {
        var sh = items[i];
        var shp = $(sh).position();

        $(items[i - 1]).animate({
            "left": shp.left,
                "top": shp.top
        }, time_anim);
    }

    $(sh).animate({
        "left": pos0.left,
            "top": pos0.top
    }, time_anim);
}

function getElements(arr, n) {
    /* Get n random elements from array */
    var used = []
    var result = []

    while (result.length < n && result.length < arr.length) {
        var i = randInt(0, arr.length - 1)
        if (jQuery.inArray(i, used) !== -1) {
            continue;
        }

        used.push(i)
        result.push(arr[i])
    }

    return result;
}
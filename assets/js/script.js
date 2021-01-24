//Slider

(function () {
    $(".flex-slide").each(function () {
        $(this).hover(function () {
            $(this).find('.flex-title').css({
                transform: 'rotate(0deg)',
                top: '10%'
            });
            $(this).find('.flex-about').css({
                opacity: '1'
            });
        }, function () {
            $(this).find('.flex-title').css({
                transform: 'rotate(90deg)',
                top: '15%'
            });
            $(this).find('.flex-about').css({
                opacity: '0'
            });
        })
    });
})();


// Comments


function submit_comment() {
    var comment = $('.commentar').val();
    el = document.createElement('li');
    el.className = "box_result row";
    el.innerHTML =
        '<div class=\"avatar_comment col-md-1\">' +
        '<img src=\"https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg\" alt=\"avatar\"/>' +
        '</div>' +
        '<div class=\"result_comment col-md-11\">' +
        '<h4>Anonimous</h4>' +
        '<p>' + comment + '</p>' +
        '<div class=\"tools_comment\">' +
        '<a class=\"like\" href=\"#\">Like</a><span aria-hidden=\"true\"> · </span>' +
        '<i class=\"fa fa-thumbs-o-up\"></i> <span class=\"count\">0</span>' +
        '<span aria-hidden=\"true\"> · </span>' +
        '<a class=\"replay\" href=\"#\">Reply</a><span aria-hidden=\"true\"> · </span>' +
        '<span>1m</span>' +
        '</div>' +
        '<ul class="child_replay"></ul>' +
        '</div>';
    document.getElementById('list_comment').prepend(el);
    $('.commentar').val('');
}

$(document).ready(function () {
    $('#list_comment').on('click', '.like', function (e) {
        $current = $(this);
        var x = $current.closest('div').find('.like').text().trim();
        var y = parseInt($current.closest('div').find('.count').text().trim());

        if (x === "Like") {
            $current.closest('div').find('.like').text('Unlike');
            $current.closest('div').find('.count').text(y + 1);
        } else if (x === "Unlike") {
            $current.closest('div').find('.like').text('Like');
            $current.closest('div').find('.count').text(y - 1);
        } else {
            var replay = $current.closest('div').find('.like').text('Like');
            $current.closest('div').find('.count').text(y - 1);
        }
    });

    $('#list_comment').on('click', '.replay', function (e) {
        cancel_reply();
        $current = $(this);
        el = document.createElement('li');
        el.className = "box_reply row";
        el.innerHTML =
            '<div class=\"col-md-12 reply_comment\">' +
            '<div class=\"row\">' +
            '<div class=\"avatar_comment col-md-1\">' +
            '<img src=\"https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg\" alt=\"avatar\"/>' +
            '</div>' +
            '<div class=\"box_comment col-md-10\">' +
            '<textarea class=\"comment_replay\" placeholder=\"Add a comment...\"></textarea>' +
            '<div class=\"box_post\">' +
            '<div class=\"pull-right\">' +
            '<span>' +
            '<img src=\"https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg\" alt=\"avatar\" />' +
            '<i class=\"fa fa-caret-down\"></i>' +
            '</span>' +
            '<button class=\"cancel\" onclick=\"cancel_reply()\" type=\"button\">Cancel</button>' +
            '<button onclick=\"submit_reply()\" type=\"button\" value=\"1\">Reply</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        $current.closest('li').find('.child_replay').prepend(el);
    });
});

function submit_reply() {
    var comment_replay = $('.comment_replay').val();
    el = document.createElement('li');
    el.className = "box_reply row";
    el.innerHTML =
        '<div class=\"avatar_comment col-md-1\">' +
        '<img src=\"https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg\" alt=\"avatar\"/>' +
        '</div>' +
        '<div class=\"result_comment col-md-11\">' +
        '<h4>Anonimous</h4>' +
        '<p>' + comment_replay + '</p>' +
        '<div class=\"tools_comment\">' +
        '<a class=\"like\" href=\"#\">Like</a><span aria-hidden=\"true\"> · </span>' +
        '<i class=\"fa fa-thumbs-o-up\"></i> <span class=\"count\">0</span>' +
        '<span aria-hidden=\"true\"> · </span>' +
        '<a class=\"replay\" href=\"#\">Reply</a><span aria-hidden=\"true\"> · </span>' +
        '<span>1m</span>' +
        '</div>' +
        '<ul class="child_replay"></ul>' +
        '</div>';
    $current.closest('li').find('.child_replay').prepend(el);
    $('.comment_replay').val('');
    cancel_reply();
}

function cancel_reply() {
    $('.reply_comment').remove();
}

//To top Button

jQuery(document).ready(function () {
    var btn = $('#buttontotop');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 1200 }, '1500');
    });
});


//Timer

var countDownDate = new Date().getTime() + 100000000;


var x = setInterval(function () {


    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "EXPIRED";
    }
}, 1000);


window.onload = function () {
    jQuery("#user-country").text(ymaps.geolocation.city);
}

jQuery(document).ready(function () {
    var orderbtn = $('#orderbtn');
    orderbtn.on('click', function (e) {
        alertify.success('Thanks for your order, the manager will contact you soon');
    });
});




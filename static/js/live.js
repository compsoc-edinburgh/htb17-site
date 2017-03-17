var timer;
function checkMouseMove() {
    if (timer) {
        clearTimeout(timer);
        timer = 0;
    }

    $('nav').fadeIn();

    if (window.location.hash == "#stream") {
        timer = setTimeout(function() {
            $('nav').fadeOut()
        }, 3000)
    }
}

var deadline;
function getTimeRemaining(){
    var t = Date.parse(deadline) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function updateClock(clock){
    var t = getTimeRemaining();

    if (t.total >= 0) {
        var hours = clock.find('#countdown-hours');
        var minutes = clock.find('#countdown-minutes');
        var seconds = clock.find('#countdown-seconds');
        hours.text(('0' + t.hours).slice(-2));
        minutes.text(('0' + t.minutes).slice(-2));
        seconds.text(('0' + t.seconds).slice(-2));
    } else {
        $("#countdown").html("&nbsp;")
        $("#countdown-name").html("&nbsp;")
    }
}

function updateDeadline(d, t) {
    deadline = d;
    $("#countdown").html('<span id="countdown-hours"></span>:<span id="countdown-minutes"></span>:<span id="countdown-seconds"></span>');
    $("#countdown-name").text(t)
    updateClock($("#countdown"))
}

$(document).ready(function(){
    $('.tabs').tabs({
        onShow: function(tab) {
            window.location.hash = '#' + tab.attr('id');
            $("body").scrollTop(0);
        }
    });
    $('.tabs').tabs('select_tab', window.location.hash);

    particleground(document.getElementById('particles'), {
        dotColor: '#5cbdaa',
        lineColor: '#5cbdaa',
        maxSpeedX: .4,
        maxSpeedY: .4,
        parallaxMultiplier: 15,
    });

    $(document).mousemove(checkMouseMove);
    checkMouseMove();

    var clock = $('#countdown');
    updateDeadline('March 18 2017 11:00:00 GMT+0000');
    updateClock(clock); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock,1000, clock)
});
var owl = $('#recommendations-slider');
owl.owlCarousel({
    loop: true,
    margin: 15,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    dots: false,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        992: {
            items: 3
        },
        1025: {
            items: 4
        }
    }
})


/************* trending school************/
var owl = $('#trending-school');
owl.owlCarousel({
    loop: true,
    margin: 15,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    dots: true,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        992: {
            items: 2
        },
        1025: {
            items: 3
        }
    }
})

/************* trending slider************/
var owl = $('#trending-slider');
owl.owlCarousel({
    loop: true,
    margin: 15,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    dots: true,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        992: {
            items: 3
        },
        1025: {
            items: 6
        }
    }
})


/**********trending-podcasts-slider*********/
var owl = $('#trending-podcasts-slider');
owl.owlCarousel({
        loop: true,
        margin: 15,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 2
            },
            1025: {
                items: 3
            }
        }
    })
    /**********trending-news-slider*********/
var owl = $('#trending-news-slider');
owl.owlCarousel({
    loop: true,
    margin: 15,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    dots: true,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        992: {
            items: 2
        },
        1025: {
            items: 3
        }
    }
})

/**********name_of_super_leader*********/
var owl = $('#name_of_super_leader');
owl.owlCarousel({
    loop: true,
    margin: 15,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    dots: false,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 1
        },
        1025: {
            items: 1
        }
    }
})



/*****************range*************/
function init() {
    const sliders = document.getElementsByClassName("tick-slider-input");

    for (let slider of sliders) {
        slider.oninput = onSliderInput;

        updateValue(slider);
        updateValuePosition(slider);
        updateLabels(slider);
        updateProgress(slider);

        setTicks(slider);
    }
}

function onSliderInput(event) {
    updateValue(event.target);
    updateValuePosition(event.target);
    updateLabels(event.target);
    updateProgress(event.target);
}

function updateValue(slider) {
    let value = document.getElementById(slider.dataset.valueId);

    value.innerHTML = "<div>" + slider.value + "</div>";
}

function updateValuePosition(slider) {
    let value = document.getElementById(slider.dataset.valueId);

    const percent = getSliderPercent(slider);

    const sliderWidth = slider.getBoundingClientRect().width;
    const valueWidth = value.getBoundingClientRect().width;
    const handleSize = slider.dataset.handleSize;

    let left = percent * (sliderWidth - handleSize) + handleSize / 2 - valueWidth / 2;

    left = Math.min(left, sliderWidth - valueWidth);
    left = slider.value === slider.min ? 0 : left;

    value.style.left = left + "px";
}

function updateLabels(slider) {
    const value = document.getElementById(slider.dataset.valueId);
    const minLabel = document.getElementById(slider.dataset.minLabelId);
    const maxLabel = document.getElementById(slider.dataset.maxLabelId);

    const valueRect = value.getBoundingClientRect();
    const minLabelRect = minLabel.getBoundingClientRect();
    const maxLabelRect = maxLabel.getBoundingClientRect();

    const minLabelDelta = valueRect.left - (minLabelRect.left);
    const maxLabelDelta = maxLabelRect.left - valueRect.left;

    const deltaThreshold = 32;

    if (minLabelDelta < deltaThreshold) minLabel.classList.add("hidden");
    else minLabel.classList.remove("hidden");

    if (maxLabelDelta < deltaThreshold) maxLabel.classList.add("hidden");
    else maxLabel.classList.remove("hidden");
}

function updateProgress(slider) {
    let progress = document.getElementById(slider.dataset.progressId);
    const percent = getSliderPercent(slider);

    progress.style.width = percent * 100 + "%";
}

function getSliderPercent(slider) {
    const range = slider.max - slider.min;
    const absValue = slider.value - slider.min;

    return absValue / range;
}

function setTicks(slider) {
    let container = document.getElementById(slider.dataset.tickId);
    const spacing = parseFloat(slider.dataset.tickStep);
    const sliderRange = slider.max - slider.min;
    const tickCount = sliderRange / spacing + 1; // +1 to account for 0

    for (let ii = 0; ii < tickCount; ii++) {
        let tick = document.createElement("span");

        tick.className = "tick-slider-tick";

        container.appendChild(tick);
    }
}

function onResize() {
    const sliders = document.getElementsByClassName("tick-slider-input");

    for (let slider of sliders) {
        updateValuePosition(slider);
    }
}

window.onload = init;
window.addEventListener("resize", onResize);


/*****************tooltip****************** */
$(document).ready(function() {
    $('.ss_hover_box_display').click(function(e) { /*--- Content div id and class you want to be toggle ---*/
        e.stopPropagation();
    });
    $('.dropbtn').click(function(e) { /*--- That div(Button) id and class you want to click to toggle div ---*/
        e.preventDefault();
        e.stopPropagation();
        $('.ss_hover_box_display').fadeToggle(); /*--- Content div id and class you want to be toggle ---*/
    });
});
$(document).click(function() {
    $('.ss_hover_box_display').hide(); /*--- Content div id and class you want to be toggle ---*/
});

/*****************tooltip****************** */
$(document).ready(function() {
    $('.ss_hover_box_display1').click(function(e) { /*--- Content div id and class you want to be toggle ---*/
        e.stopPropagation();
    });
    $('.dropbtn1').click(function(e) { /*--- That div(Button) id and class you want to click to toggle div ---*/
        e.preventDefault();
        e.stopPropagation();
        $('.ss_hover_box_display1').fadeToggle(); /*--- Content div id and class you want to be toggle ---*/
    });
});
$(document).click(function() {
    $('.ss_hover_box_display1').hide(); /*--- Content div id and class you want to be toggle ---*/
});


/*******************form*****************/
$(document).ready(function() {
    var base_color = "rgb(230,230,230)";



    var child = 1;
    var length = $("section").length - 1;
    $("#prev").addClass("disabled");
    $("#submit").addClass("disabled");

    $("section").not("section:nth-of-type(1)").hide();
    $("section").not("section:nth-of-type(1)").css('transform', 'translateX(100px)');

    var svgWidth = length * 200 + 24;
    $("#svg_wrap").html(
        '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
        svgWidth +
        ' 24" xml:space="preserve"></svg>'
    );

    function makeSVG(tag, attrs) {
        var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
        for (var k in attrs) el.setAttribute(k, attrs[k]);
        return el;
    }

    for (i = 0; i < length; i++) {
        var positionX = 12 + i * 200;
        var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
        document.getElementById("svg_form_time").appendChild(rect);
        // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
        var circle = makeSVG("circle", {
            cx: positionX,
            cy: 12,
            r: 12,
            width: positionX,
            height: 6
        });
        document.getElementById("svg_form_time").appendChild(circle);
    }

    var circle = makeSVG("circle", {
        cx: positionX + 200,
        cy: 12,
        r: 12,
        width: positionX,
        height: 6
    });


    $('#svg_form_time rect').css('fill', base_color);
    $('#svg_form_time circle').css('fill', base_color);


    $(".button").click(function() {
        $("#svg_form_time rect").css("fill", active_color);
        $("#svg_form_time circle").css("fill", active_color);
        var id = $(this).attr("id");
        if (id == "next") {
            $("#prev").removeClass("disabled");
            if (child >= length) {
                $(this).addClass("disabled");
                $('#submit').removeClass("disabled");
            }
            if (child <= length) {
                child++;
            }
        } else if (id == "prev") {
            $("#next").removeClass("disabled");
            $('#submit').addClass("disabled");
            if (child <= 2) {
                $(this).addClass("disabled");
            }
            if (child > 1) {
                child--;
            }
        }
        var circle_child = child + 1;
        $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
            "fill",
            base_color
        );
        $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
            "fill",
            base_color
        );
        var currentSection = $("section:nth-of-type(" + child + ")");
        currentSection.fadeIn();
        currentSection.css('transform', 'translateX(0)');
        currentSection.prevAll('section').css('transform', 'translateX(-100px)');
        currentSection.nextAll('section').css('transform', 'translateX(100px)');
        $('section').not(currentSection).hide();
    });

});



/*********************13-3-2021*************** */
$(document).ready(function() {
    $('.preferred-box').click(function(e) { /*--- Content div id and class you want to be toggle ---*/
        e.stopPropagation();
    });
    $('.search_filter_icon').click(function(e) { /*--- That div(Button) id and class you want to click to toggle div ---*/
        e.preventDefault();
        e.stopPropagation();
        $('.preferred-box').fadeToggle(); /*--- Content div id and class you want to be toggle ---*/
    });
});
$(document).click(function() {
    $('.preferred-box').hide(); /*--- Content div id and class you want to be toggle ---*/
});



$(".search_filter_icon").click(function() {
    $(".search_filter_icon").toggleClass("intro");
});




$(document).ready(function() {
    startAnimation();

    function startAnimation() {
        jQuery('.skills').each(function() {

            jQuery(this).find('.skillbar').animate({
                width: jQuery(this).attr('data-percent')
            }, 2000);

        });
    }
});


/************* trending school************/
var owl = $('#Homepage_slider_admissions');
owl.owlCarousel({
    loop: true,
    margin: 30,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 1
        },
        1025: {
            items: 1
        }
    }
})





/*******************search****************/
$('#search-input').click(function(event) {
    event.stopPropagation();
    $("#list").fadeIn("fast");
});

$(document).click(function() {
    $('#list').hide();

});

/************* compare school************/
var owl = $('#compare-slider');
owl.owlCarousel({
    loop: true,
    margin: 30,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 1
        },
        1025: {
            items: 1
        }
    }
})



/*********************16-3-2021*************** */
/************* trending school************/

var owl = $('#zamit_offerings');
owl.owlCarousel({
    loop: true,
    margin: 30,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    dots: false,
    nav: true,
    navText: ["<div class='left-icon'></div>", "<div class='right-icon'></div>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 2
        },
        1025: {
            items: 3
        }
    }
})

/************ supers_slider_Home ***********/

var owl = $('#supers_slider_Home');
owl.owlCarousel({
    autoplay: true,
    loop: true,
    margin: 30,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        992: {
            items: 3
        },
        1025: {
            items: 4
        }
    }
})


/************ testimonial_slider_Home ***********/

var owl = $('#testimonial_slider_Home');
owl.owlCarousel({
    loop: true,
    margin: 30,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 2
        },
        1025: {
            items: 3
        }
    }
})


/*****************tooltip****************** */
$(document).ready(function() {
    $('.schools_box_display').click(function(e) { /*--- Content div id and class you want to be toggle ---*/
        e.stopPropagation();
    });
    $('.schools_box_display_btn').click(function(e) { /*--- That div(Button) id and class you want to click to toggle div ---*/
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().parent().parent().find('.schools_box_display').fadeToggle(); /*--- Content div id and class you want to be toggle ---*/
    });
});
$(document).click(function() {
    $('.schools_box_display').hide(); /*--- Content div id and class you want to be toggle ---*/
});

/*****************tooltip****************** */
$(document).ready(function() {
    $('.ss_pricing_table_hover').click(function(e) { /*--- Content div id and class you want to be toggle ---*/
        e.stopPropagation();
    });
    $('.ss_pricing_btn').click(function(e) { /*--- That div(Button) id and class you want to click to toggle div ---*/
        $('.ss_pricing_table_hover').fadeOut();
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().find('.ss_pricing_table_hover').fadeToggle(); /*--- Content div id and class you want to be toggle ---*/
    });
});
$(document).click(function() {
    $('.ss_pricing_table_hover').hide(); /*--- Content div id and class you want to be toggle ---*/
});







/*****************tooltip****************** */
$(document).ready(function() {
    $('.review_show').click(function(e) { /*--- Content div id and class you want to be toggle ---*/
        e.stopPropagation();
    });
    $('.more_button_icon').click(function(e) { /*--- That div(Button) id and class you want to click to toggle div ---*/
        $('.review_show').fadeOut();
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().find('.review_show').fadeToggle(); /*--- Content div id and class you want to be toggle ---*/
    });
});
$(document).click(function() {
    $('.review_show').hide(); /*--- Content div id and class you want to be toggle ---*/
});



/*****************tooltip****************** */
$(document).ready(function() {
    $('.awards_modal').click(function(e) { /*--- Content div id and class you want to be toggle ---*/
        e.stopPropagation();
    });
    $('.awards_link').click(function(e) { /*--- That div(Button) id and class you want to click to toggle div ---*/
        e.preventDefault();
        e.stopPropagation();
        $('.awards_modal').fadeToggle(); /*--- Content div id and class you want to be toggle ---*/
    });
});
$(document).click(function() {
    $('.awards_modal').hide(); /*--- Content div id and class you want to be toggle ---*/
});






$(document).ready(function() {
    $('.accordion-list > li > .answer').hide();

    $('.accordion-list > li').click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });

});



var progressSlider = document.querySelector('.progress');

function setProgress(e) {
    const newTime = e.offsetX / progressSlider.offsetWidth;
    progressFill.style.width = `${newTime*100}%`;
    video.currentTime = newTime * video.duration;
}



/* ------------------  TOP HEADER-----------------*/
$(window).on("scroll", function() {
    if ($(document).scrollTop() > 50) {
        $('header').addClass('shrink');
    } else {
        $('header').removeClass('shrink');
    }
});

/* ------------------   Know More -----------------*/


$(document).ready(function() {
    $(".ss_gotit_button").click(function() {
        $(".ss_hover_box_display").hide();
    });
});
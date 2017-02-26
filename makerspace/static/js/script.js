/*

Javascript for Makerspace's Website

*/

$(document).ready(function () {

    // Carousels

    // Activate Spaces Carousel
    $("#spaces-carousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#spaces-carousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#spaces-carousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#spaces-carousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#spaces-carousel").carousel(3);
    });
    $(".item5").click(function () {
        $("#spaces-carousel").carousel(4);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#spaces-carousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#spaces-carousel").carousel("next");
    });

    //---------------------------

    // Activate 3d-printers Carousel
    $("#3d-printer-carousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#carousel-3d-printer").carousel(0);
    });
    $(".item2").click(function () {
        $("#carousel-3d-printer").carousel(1);
    });
    $(".item3").click(function () {
        $("#carousel-3d-printer").carousel(2);
    });
    $(".item4").click(function () {
        $("#carousel-3d-printer").carousel(3);
    });
    $(".item5").click(function () {
        $("#carousel-3d-printer").carousel(4);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#carousel-3d-printer").carousel("prev");
    });
    $(".right").click(function () {
        $("#carousel-3d-printer").carousel("next");
    });

    //---------------------------

    // Activate laser-cutter Carousel
    $("#laser-carousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#laser-carousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#laser-carousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#laser-carousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#laser-carousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#laser-carousel").carousel("next");
    });

    //---------------------------

    // Activate #cnc-carousel Carousel
    $("#cnc-carousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#cnc-carousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#cnc-carousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#cnc-carousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#cnc-carousel").carousel(3);
    });
    // Enable Carousel Controls
    $(".left").click(function () {
        $("#cnc-carousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#cnc-carousel").carousel("next");
    });

    //---------------------------

    // Activate electrical and computing Carousel
    $("#chip-carousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#chip-carousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#chip-carousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#chip-carousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#chip-carousel").carousel(3);
    });
    $(".item5").click(function () {
        $("#chip-carousel").carousel(4);
    });
    $(".item6").click(function () {
        $("#chip-carousel").carousel(5);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#chip-carousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#chip-carousel").carousel("next");
    });

    //---------------------------

    // Activate #machineshop-carousel Carousel
    $("#machineshop-carousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#machineshop-carousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#machineshop-carousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#machineshop-carousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#machineshop-carousel").carousel(3);
    });
    $(".item5").click(function () {
        $("#machineshop-carousel").carousel(4);
    });
    $(".item6").click(function () {
        $("#machineshop-carousel").carousel(5);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#machineshop-carousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#machineshop-carousel").carousel("next");
    });

    //---------------------------

    // Activate #more-carousel Carousel
    $("#more-carousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#more-carousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#more-carousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#more-carousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#more-carousel").carousel(3);
    });
    $(".item5").click(function () {
        $("#more-carousel").carousel(4);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#more-carousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#more-carousel").carousel("next");
    });




    /* Code to edit SVG images with CSS */
    /*
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
    */


    /* email Form */

    // function submitForm() {
    // 	$("#submit-btn").disable = true;
    // 	$("#status").innerHTML = "Please wait...";
    // 	var formdata = new FormData();
    // 	formdata.append("name", $("#name").value);
    // 	formdata.append("email", $("#email").value);
    // 	formdata.append("subject", $("#subject").value);
    // 	formdata.append("message", $("#message").value);
    // 	console.log(formdata);
    // 	var ajax = new XMLHttpRequest();
    // 	ajax.open("POST", "email.php");
    // 	ajax.onreadystatechange = function () {
    // 	    if (ajax.readyState == 4 && ajax.status == 200) {
    // 		if (ajax.responseText == "success") {
    // 		    $("#contact-form").innerHTML = "<h2>" + $("#name").value + ", your message has been sent. Thank you!</h2>";
    // 		} else {
    // 		    $("#status").innerHTML = ajax.responseText;
    // 		    $("#submit-btn").disable = false;
    // 		}
    // 	    }
    // 	};

    // 	ajax.send(formdata);
    // }


});

function submitForm() {
    $("#submit-btn").disable = true;
    $("#status").innerHTML = "Please wait...";
    var formdata = new FormData();
    formdata.append("name", $("#name").value);
    formdata.append("email", $("#email").value);
    formdata.append("subject", $("#subject").value);
    formdata.append("message", $("#message").value);
    console.log(formdata);
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "email.php");
    ajax.onreadystatechange = function () {
	if (ajax.readyState == 4 && ajax.status == 200) {
	    if (ajax.responseText == "success") {
		$("#contact-form").innerHTML = "<h2>" + $("#name").value + ", your message has been sent. Thank you!</h2>";
	    } else {
		$("#status").innerHTML = ajax.responseText;
		$("#submit-btn").disable = false;
	    }
	}
    };

    ajax.send(formdata);
}



/*

 Special thanks to the writers, authors and owner of the following links
 for their help and guidance:

 https: //stackoverflow.com/questions/11978995/how-to-change-color-of-svg-image-using-css-jquery-svg-image-replacement/11978996#11978996?newreg=e366aae55a674b8eb2c480be4be89981

 http: //www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_carousel_js&stacked=h

 https: //stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal

 https: //www.developphp.com/video/JavaScript/Contact-Form-Web-Application-Tutorial-Ajax-HTML5-PHP

 http: //www.flaticon.com/packs/social-media-logos-2

 https: //www.iconfinder.com/icons/1313482/application_chat_logo_photo_snap_snapchat_icon#size=128

 */

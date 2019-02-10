/////
//          Author : Muhammad Usman
//          Created On 11/15/2018
////
function isES6() {
    try {

        Function("() => {};");
        return true;
    }
    catch (exception) {
        return false;
    }
}


if (!isES6()) {

//Adding Inner Html If Browser Doesn't Support ECMA6 ...
    var a = window.location;
    document.body.innerHTML = "";
    document.body.innerHTML += "<div class=\"col-lg-12\">\n" +
        "    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\" style=\"margin-top: 15%\">\n" +
        "        <div class=\"centerAlign\">\n" +
        "            <h1 style=\"font-size: 60px;font-weight:bold\">Incompatible Browser!</h1>\n" +
        "            <p>Application is not supported by this browser. To run the application properly kindly install one of the following browser.</p>\n" +
        "        <div class='row' style=\"padding-left: 4%;padding-top: 10%;   \">\n" +
        "            <mat-label style='alignment: left;' ><a href='https://www.google.com/chrome/' target='_blank' style='color: #000;text-decoration: none'> <img src=\"app/images/Chrome.png\"  > Google Chrome</a></mat-label>\n" +
        "            <mat-label style='float: right;text-align: center'><a href='https://www.opera.com/download/' target='_blank' style='color: #000;text-decoration: none'><img src=\"app/images/opera.png\"> Opera</a></mat-label>\n" +
        "        </div>\n" +
        "       <div class='row' style=\"padding-left: 4%;padding-top: 10%;   \">\n" +
        "            <mat-label style='alignment: left;'><a href='https://www.mozilla.org/firefox/new/' target='_blank' style='color: #000;text-decoration: none'><img src=\"app/images/FireFox.png\"> Mozila FireFox</a></mat-label>\n" +
        "            <mat-label style='padding-top: 0%;float: right;text-align: center'><a href='https://www.microsoft.com/download/' target='_blank' style='color: #000;text-decoration: none'><img src=\"app/images/Edge.png\"> Edge</a></mat-label>\n" +
        "        </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\" style=\"margin-top: 10%\" >\n" +
        "        <div class=\"centerAlign\">\n" +
        "            <p><img src=\"app/images/robot_404.png\" align=\"middle\" class=\"img-responsive\" style=\"margin: 0 auto;\">\n" +
        "                </p>\n" +
        "         </div>\n" +
        "      </div>\n" +
        "</div>\n";
}


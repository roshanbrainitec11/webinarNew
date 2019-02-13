$(document).ready(
    function () {
        $(".video-leftArrow").click(function () {
            $("#leftScreenButton").fadeToggle();
        });

        $(".video-leftArrow-1").click(function () {
            $("#rightPanel").fadeToggle();
        });
    });

function copyText1 () {
    var copyText = document.getElementById("Input1");
    copyText.select();
    document.execCommand("copy");
}

function copyText2 () {
    var copyText = document.getElementById("Input2");
    copyText.select();
    document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
}

/*function hideshow() {
	alert(1);
    var x = document.getElementById('Solutionssss');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
*/
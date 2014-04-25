console.log("test");



var clicked = true;
$("#idToggle").click(function () {
	
	if (clicked) {
		$("#mka").hide();
		$("#inGarb").show();
		$("#idToggle").text("Mundane");
		$("#mundaneText").hide();
		$("#scaText").show();
		clicked = false;
	} else{
		$("#inGarb").hide();
		$("#mka").show();
		$("#idToggle").text("SCA");
		$("#scaText").hide();
		$("#mundaneText").show();
		clicked = true;
	}
});

$(".menuSlide").hide();
$(".LogoText").click(function () {
	$(".menuSlide").slideToggle('slow');
});
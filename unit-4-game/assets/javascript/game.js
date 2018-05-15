//variables
var targetNumber;
var counter = 0;
var wins = 0;
var losses = 0;
// image array
var image = [];
image[0] = new Image();
image[0].src = 'assets/images/blue.png';
image[1] = new Image();
image[1].src = "assets/images/green.png";
image[2] = new Image();
image[2].src = 'assets/images/red.png';
image[3] = new Image();
image[3].src = 'assets/images/yellow.png';
var crystals = $("#crystals");
//options.
var numberOptions = [];
function randNumbers() {
    targetNumber = Math.floor((Math.random() * 102) + 19);
    for (j = 0; j < 4; j++) {
        numberOptions[j] = Math.floor((Math.random() * 12) + 1);
    }
    $("#number-to-guess").text(targetNumber);
    $("#current-score").text(counter);
    console.log(numberOptions);
    for (var i = 0; i < numberOptions.length; i++) {

        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", image[i].src);
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        crystals.append(imageCrystal);
    }
}
randNumbers();
$("#wins").text(wins);
$("#losses").text(losses);
function clear() {
    $("#number-to-guess").empty();
    $("#current-score").empty();
    $("#crystals").empty();
    counter = 0;
}

crystals.on("click", ".crystal-image", function () {
    $("#result").empty();
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    $("#current-score").text(counter);
    if (counter === targetNumber) {
        $("#result").text("You win!");
        wins++;
        clear();
        randNumbers();
    }
    else if (counter >= targetNumber) {
        $("#result").text("You Lose!");
        losses++;
        clear();
        randNumbers();
    }
    $("#wins").text(wins);
    $("#losses").text(losses);
});

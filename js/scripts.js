var findAndReplace = function(myString, initialWord, updatedWord) {
  if (myString.length === 0) {
    return "You need to enter an initial string";
  } else if (myString.search(initialWord) >= 0) {
    return myString.replace(initialWord, updatedWord);
  } else {
    return "Oops! Your word wasnt in the String...";
  }
}

// var validate = function() {
//   if ($("input#inputString").val().length > 0) {
//     $("#firstClick").prop("disabled", false);
//   } else {
//     $("#firstClick").prob("disable", true);
//   }
// }

$(document).ready(function() {
  // validate();
  var initString;

  $("form#thisString").submit(function() {
    initString = $("input#inputString").val();
    $(".phrase").text(initString);
    $("#stageTwo").show();

    event.preventDefault();
  });

  $("#firstClick").click(function() {
    $("#stageOne").fadeOut();
  });

  $("form#replaceWordSearch").submit(function() {
    var oldWord = $("input#find").val();
    var newWord = $("input#replace").val();

    $(".finalPhrase").text(findAndReplace(initString, oldWord, newWord));
    $("#stageFinal").show();
    $("#stageOne").hide();

    event.preventDefault();
  });

  $("#secondClick").click(function() {
    $("#stageTwo").fadeOut();
  });

  $("#resetClick").click(function() {
    $("#stageFinal").fadeOut();
    $("#stageOne").fadeIn();
  })

});

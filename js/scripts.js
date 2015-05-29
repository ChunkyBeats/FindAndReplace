var findAndReplace = function(myString, initialWord, updatedWord) {
  if (myString.search(initialWord) > 1) {
    return myString.replace(initialWord, updatedWord);
  } else {
    return "Oops! You entered something wrong...";
  }
}

$(document).ready(function() {
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

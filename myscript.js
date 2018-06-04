 (function(){
      var words = [
          'graphic designer',
          'web developer',
          'UI/UX designer'
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 2500);
        
  })();


$("#gDesign").click(function () {
    $(".UI").css("display", "none");
    $(".GD").css("display", "block");
    $("#gDesign").css("border-bottom", "3px solid #f25c64");
     $("#uDesign").css("border-bottom", "none");
     $("#development").css("border-bottom", "none");
    $("#all").css("border-bottom", "none");
    
});

$("#uDesign").click(function () {
    $(".GD").css("display", "none");
    $(".UI").css("display", "block");
    $("#uDesign").css("border-bottom", "3px solid #f25c64");
     $("#gDesign").css("border-bottom", "none");
     $("#development").css("border-bottom", "none");
    $("#all").css("border-bottom", "none");
});

$("#development").click(function () {
    $(".UI").css("display", "none");
    $(".GD").css("display", "none");
    $(".dev").css("display", "block");
    $("#development").css("border-bottom", "3px solid #f25c64");
     $("#uDesign").css("border-bottom", "none");
     $("#gDesign").css("border-bottom", "none");
    $("#all").css("border-bottom", "none");
});

$("#all").click(function () {
    $(".UI").css("display", "block");
    $(".GD").css("display", "block");
    $(".dev").css("display", "block");
     $("#all").css("border-bottom", "3px solid #f25c64");
     $("#gDesign").css("border-bottom", "none");
     $("#development").css("border-bottom", "none");
    $("#uDesign").css("border-bottom", "none");
});


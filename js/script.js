//jq 

$(document).ready(function(){
        // dimension
$("button").click(function(){
    var txt = "";
    txt += "Width of div: " + $(".div").width() + "</br>";
    txt += "Height of div: " + $(".div").height();
    $(".div").html(txt);
  });
        // empty
        $("#emp").click(function(){
    $(".div").empty();
  });
        // after before
        $("#btn_1").click(function(){
    $("img").before("<b>Before</b>");
  });

  $("#btn_2").click(function(){
    $("img").after("<i>After</i>");
  });
        // html content
        $("#btn1").click(function(){
    alert("Text: " + $(".p1").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $(".p1").html());
  });
        // chain
$("#chain").click(function(){
    $(".chain_text").css("color", "red").slideUp(2000).slideDown(2000);
  });
        // select
        $( "#trg" ).on( "select", function() {
  alert( "Handler for `select` called." );
} );
        // change
        $( ".targets" ).on( "change", function() {
  alert( "Handler for `change` called." );
} );
        // blur
        $( "#target" ).on( "blur", function() {
  alert( "Handler for `blur` called." );
} );
        // slide up/down
        $("#slide-up").on('click',function() {
    $("#sld").slideUp().delay(3000);
  });

  $("#slide-down").on('click',function() {
    $("#sld").slideDown().delay(2000);
});
         // prepend
        $("#prep").on('click',function() {
    $("#pred").prepend("<p> :This is a new element!</p>");
  });
        // context menu
        $("#cntxt").hover(function() {
    $("#context_text").replaceWith("<span>This element has been replaced!</span>");
  });
        // mouse down
        $("#mdown").hover(function() {
    $("#mdown_text").replaceWith("<span>This element has been replaced!</span>");
  });
        // mouse move
        $("#move").hover(function() {
    $("#move_text").replaceWith("<span>This element has been replaced!</span>");
  });
        // mouse out
        $("#out").hover(function() {
    $("#out_text").replaceWith("<span>This element has been replaced!</span>");
  });
        // mouse over
        $("#ovr").hover(function() {
    $("#over_text").replaceWith("<span>This element has been replaced!</span>");
  });
        // mouse up
        $("#mup").hover(function() {
    $("#h_text").replaceWith("<span>This element has been replaced!</span>");
  });

         // mouse hover
        $("#hvr").hover(function() {
    $("#hover_text").replaceWith("<span>This element has been replaced!</span>");
  });
        // scroll
        $(window).on('scroll',function() {
    $("#scr_text").replaceWith("<span>This element has been replaced!</span>");
  });
         // mouse enter
        $("#entr").on('mouseenter',function() {
    $("#enter_text").replaceWith("<span>This element has been replaced!</span>");
  });
         // mouse leave
        $("#leave").on('mouseleave',function() {
    $("#leave_text").replaceWith("<span>This element has been replaced!</span>");
  });
          // key press
        $("#press").on('keypress',function() {
    $("#press_text").replaceWith("<span>This element has been replaced!</span>");
  });
          // key down
        $("#down").on('keydown',function() {
    $("#down_text").replaceWith("<span>This element has been replaced!</span>");
  });
           // key up
           $("#up").on('keyup',function() {
    $("#up_text").replaceWith("<span>This element has been replaced!</span>");
  }); 
        // double click
         $("#dbl").on('dblclick',function() {
    $("#dbl_text").replaceWith("<span>This element has been replaced!</span>");
  });
        // stop animation
        var animation; // Store the animation object

  $("#custom-an").click(function() {
    animation = $("#element-animate").animate({
      opacity: 0.3,
      width: "200px",
      marginTop: "100px"
    }, 2000);
  });

  $("#stop-animation").click(function() {
    if (animation) {
      animation.stop(); // Stop the ongoing animation
    }
  });
        // custom animate
        $("#custom-animate").on('click',function() {
    $("#element-to-animate").animate({
      opacity: 0.5, 
      width: "150px", 
      marginTop: "50px" 
    }, 1000);
  });
        // slide left/right
       $("#slide-left").on('click',function() {
    $("#element-to-slide").animate({
      marginLeft: "-200px"
    }, 500);
  });

  $("#slide-right").on('click',function() {
    $("#element-to-slide").animate({
      marginLeft: "50px"
    }, 500);
  });
        // attribute change
        $("#change-link").on('click',function() {
     $("#link").attr("href", "https://www.instagram.com");
  });
         // replace
        $("#replace-text").on('click',function() {
    $("#rep").replaceWith("<span>This element has been replaced!</span>");
  });
        // add class at first
        $("#firstadd").on('click',function() {
    $("h3").first().addClass("select");
  });
        // add class at last
        $("#lastadd").on('click',function() {
    $("h4").last().addClass("select");
  });
        // add class
        $("#classadd").on('click',function() {
    $("#cad").addClass("select");
  });
        // add/remove
        $("#add").on('click',function() {
    $("#tad").append("<p> :This is a new element!</p>");
  });

  $("#rem").on('click',function() {
    $("#tad").remove();
  });
        // text change
        $("#change-text").on('click',function() {
    $("#ctext").text("The text has been changed!");
  });
        // slider
        $('.ques').on('click',function(){
        $('.ans').slideToggle(500);
})
        // fadeout

$('#fout').on('click',function(){
        $('#tfd').fadeOut();
});

// fadein
$('#fin').on('click',function(){
        $('#tfd').fadeIn();
});
// fadein
$('#fin').on('click',function(){
        $('#tfd').fadeTo("slow",0.33);
});

// fadtoggle
$('#ftogg').on('click',function(){
        $('#tfd').fadeToggle(1000);
});
// hide

$('#hide').on('click',function(){
        $('#tsh').hide();
});

// show
$('#show').on('click',function(){
        $('#tsh').show();
});

// toggle
$('#togg').on('click',function(){
        $('#tsh').toggle(1000);
});

// alert

$('#btn').on('click',function(){
        alert("Welcome"); 
});

});
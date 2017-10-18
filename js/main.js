// var el = document.querySelector(".svg");
// var elWrapperClone = el.innerHTML;
// document.getElementById("add").addEventListener("click", function() {
//   el.innerHTML = elWrapperClone;
// });


$(function(){
  $("[data-toggle=popover]").popover({
    html : true,
    content: function() {
      var content = $(this).attr("data-popover-content");
      return $(content).children(".popover-body").html();
    },
    title: function() {
      var title = $(this).attr("data-popover-content");
      return $(title).children(".popover-heading").html();
    }
  });
});

$(document).on('click', function(e) {
  $('[data-toggle="popover"]').each(function() {
    //the 'is' for buttons that trigger popups
    //the 'has' for icons within a button that triggers a popup
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide').data('bs.popover').inState.click = false // fix for BS 3.3.6
    }
  });
});

// add to cart //

// $(document).on('click', function(e) {
//   $('[data-toggle="collapse"]').each(function() {
//     //the 'is' for buttons that trigger popups
//     //the 'has' for icons within a button that triggers a popup
//     if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
//       $(this).popover('hide').data('bs.popover').inState.click = false // fix for BS 3.3.6
//     }
//   });
// });

// animate floating label //

$(".form-group input").change(function() {
  if ($(this).val() != "") {
    $(this).addClass('filled');
  } else {
    $(this).removeClass('filled');
  }
})

$(".form-group select").change(function() {
  if ($(this).val() != "") {
    $(this).addClass('filled');
  } else {
    $(this).removeClass('filled');
  }
})

// $('#free-shipping-plus').popover({
//   html: true,
//   trigger: 'manual',
//   container: '#free-shipping-plus',
//   content: function() {
//     var content = $(this).attr("data-popover-content");
//     return $(content).children(".popover-body").html();
//   },
//   title: function() {
//     var title = $(this).attr("data-popover-content");
//     return $(title).children(".popover-heading").html();
//   }
// });


$(document).ready(function(){

  $('.grid_tiles_wrap').each(function() {
    var $addtocart = $(this);

    $(".a2c-click", $addtocart).click(function(e) {
      e.preventDefault();
      $div = $(".a2c-overlay", $addtocart);
      $div.toggle();
      $(".a2c-overlay").not($div).hide();
      return false;
    });

});

  $('html').click(function(){
    $(".a2c-overlay").hide();
  });

});


//rachit's JS
//forced delay
$('.delay-load').click(function (e) {
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href

    // do something while timeOut ticks ... 
    $(".spinner-wrapper").show();

    setTimeout(function(){
      $(".spinner-wrapper").hide();
         window.location = goTo;
    },2000);       
});

$('.delay-load-inline').click(function (e) {
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href

    // do something while timeOut ticks ... 
    $(".spinner-wrapper-inline").show();

    setTimeout(function(){
      $(".spinner-wrapper-inline").hide();
         window.location = goTo;
    },2000);
       
}); 

var hideme = function() {

  //timer to hide the upgraded label from total section
  setTimeout(function(){$('.disappear').hide()}, 2000);
};


//Toggle the nav brand branding when the user hovers
$("#show-nav-brand").hover(function() {
  $("#nav-brand").show();
  $(this).css("color","#1977d3");
},
function() {
  //if the user hovers on nav-brand, keep showing it, if he hovers out, hide
  $("#nav-brand").hover(function(){
    $(this).show();
    $("#show-nav-brand").css("color","#1977d3");
  }, 
  function(){
    $(this).hide();
    $("#show-nav-brand").css("color","rgba(66, 66, 66, 0.8)");
  });

  //if the user does not hover on nav-brand and hovers on another option, hide it
  $("#nav-brand").hide();
  $(this).css("color","rgba(66, 66, 66, 0.8)");
});


// $("#search-pdp").keyup(function(event){
//     if(event.keyCode == 13){
//       var loc = $(this).attr("href");
//       window.location.href = "google.com";
//     }
// });

var searchpdpTV = function(){
  if (event.keyCode == 13) {
    event.preventDefault();
    window.location = "plp-2.html";
  }
};

var homesearch = function(){
  if (event.keyCode == 13) {
    event.preventDefault();
    window.location = "plp-1.html";
  }
}


$(".a2c-click").click(function(){

  var myVideo = document.getElementById("a2c1");

  $(".moneybox").hide();
  $(".addtocartvideo").show();
  myVideo.play();

  setTimeout(function(){
    var count = parseInt($("#crt-count").text()) + 1;
    $("#crt-count").text(count.toString());
    $("#whitebox").show();
  }, 1800);


  //timer for the price overlay
  setTimeout(function(){$("#price-overlay").show();}, 3600);
  
});




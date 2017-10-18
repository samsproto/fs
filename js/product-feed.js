var checkitem = function() {
  var $this;
  $this = $("#product-feed");
  if ($("#product-feed .carousel-inner .item:first").hasClass("active")) {
    $this.children(".left").hide();
    $this.children(".right").show();
  } else if ($("#product-feed .carousel-inner .item:last").hasClass("active")) {
    $this.children(".right").hide();
    $this.children(".left").show();
  } else {
    $this.children(".carousel-control").show();
  }
};

checkitem();

$("#product-feed").on("slid.bs.carousel", "", checkitem);

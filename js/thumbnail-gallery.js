var checkitem = function() {
  var $this;
  $this = $("#product-thumbnail-carousel");
  if ($("#product-thumbnail-carousel .carousel-inner .item:first").hasClass("active")) {
    $this.children(".left").hide();
    $this.children(".right").show();
  } else if ($("#product-thumbnail-carousel .carousel-inner .item:last").hasClass("active")) {
    $this.children(".right").hide();
    $this.children(".left").show();
  } else {
    $this.children(".carousel-control").show();
  }
};

checkitem();

$("#product-thumbnail-carousel").on("slid.bs.carousel", "", checkitem);

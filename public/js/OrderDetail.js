$(document).ready(function(){

    var header='<!--header-->'+
'<div class="header-top">'+
  ' <div class="header-bottom">      <div class="logo">  <h1><a href="index.html">Lighting</a></h1> </div>   <!---->    <div class="top-nav">  <ul class="memenu skyblue">'
  +'  <li><a href="index.html">Home</a></li>    <li class="grid"><a href="#">Products</a>   <div class="mepanel">          <div class="row">         <div class="col1 me-one">'
  +'  <h4>Category</h4>     <ul>       <li><a href="product.html">Water Pipes</a></li>   <li><a href="product.html">Water Pumps</a></li>   </ul>   </div> <div class="col1 me-one">'
  +'   <h4>Pipe type</h4>    <ul>     <li><a href="product.html">Copper Pipes (Metal)</a></li>  <li><a href="product.html">Galvanized Steel (Metal)</a></li>      <li><a href="product.html">PVC Pipes (Plastic)</a></li>'
  +'  <li><a href="product.html">CPVC Pipes (Plastic)</a></li>  </ul>  </div> <div class="col1 me-one">  <h4>Popular Brands</h4>   <ul>     <li><a href="product.html">Roor</a></li>     <li><a href="product.html">Illadelph</a></li>'
  +'  <li><a href="product.html">Krass Design</a></li>  <li><a href="product.html">Grav Labs</a></li>  <li><a href="product.html">Toro</a></li>   <li><a href="product.html">Sheldon</a></li>   <li><a href="product.html">Zob</a></li>'
  +'  <li><a href="product.html">Black Leaf</a></li>    </ul>     </div>   </div>  </div></li>  <li class="grid active"><a href="contact.html">Contact</a></li>   <li class="grid"><a href="login.html">Login</a></li> '
  +'   </ul>    <div class="clearfix"> </div>   </div>   <!---->  <div class="cart box_1">    <a href="checkout.html">      <div class="total">     <span class="simpleCart_total"></span> (<span id="simpleCart_quantity" class="simpleCart_quantity"></span>)</div>'
  +'  <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>   </a>   <p><a href="javascript:;" class="simpleCart_empty">Empty Cart</a></p>     <div class="clearfix"> </div>    </div>'
  +'    <div class="clearfix"> </div>    <!---->        </div>   <div class="clearfix"> </div></div>';

var footer='<div class="footer"> <div class="container">  <div class="footer-grids">  <div class="col-md-3 about-us">     <h3>About Us</h3>  <p>Maecenas nec auctor sem. Vivamus porttitor tincidunt elementum nisi a, euismod rhoncus urna. Curabitur scelerisque vulputate arcu eu pulvinar. Fusce vel neque diam</p>'
+'  </div> <div class="col-md-3 ftr-grid"> <h3>Information</h3>   <ul class="nav-bottom">  <li><a href="#">Track Order</a></li>  <li><a href="#">New Products</a></li>  <li><a href="#">Location</a></li>  <li><a href="#">Our Stores</a></li> <li><a href="product.html">Best Sellers</a></li> '
+'   </ul>     </div>  <div class="col-md-3 ftr-grid"> <h3>More Info</h3>  <ul class="nav-bottom"> <li><a href="login.html">Login</a></li>    <li><a href="#">FAQ</a></li>   <li><a href="contact.html">Contact</a></li>    <li><a href="#">Shipping</a></li>        <li><a href="#">Membership</a></li> '
+'  </ul>   </div>  <div class="col-md-3 ftr-grid"> <h3>Categories</h3>  <ul class="nav-bottom">   <li><a href="#">Water Pipes</a></li>   <li><a href="#">Water Pumps</a></li>     </ul>        </div>    <div class="clearfix"></div>   </div>  </div></div><div class="copywrite">   <div class="container">'
+'     <div class="copy"> <p>© 2017 Group 7 Shopping Site. All Rights Reserved | Template <b>Lighting</b> designed by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>  </div>  <div class="social">    <a href="#"><i class="facebook"></i></a>   <a href="#"><i class="twitter"></i></a>'
 +' <a href="#"><i class="dribble"></i></a> <a href="#"><i class="google"></i></a>  <a href="#"><i class="youtube"></i></a>   </div>   <div class="clearfix"></div> </div></div>';
$('#header').append(header);
$('#footer').append(footer);



    $('#edt_product_name').on('click',function(e) {
        $('#product_name').prop('disabled', false);
    });
        
    $('#edt_quantity').on('click',function(e) {
        $('#qty').prop('disabled', false);
    });
    
    $('#edt_category').on('click',function(e) {
        $('#category').prop('disabled', false);
    });
    
    $('#edt_description').on('click',function(e) {
        $('#description').prop('disabled', false);
    });


});
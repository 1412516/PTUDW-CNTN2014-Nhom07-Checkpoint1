$(document).ready(function(){
var header='<!--header-->'+
'<div class="header-top">'+
  ' <div class="header-bottom">      <div class="logo">  <h1><a href="index.html">Group 7</a></h1> </div>   <!---->    <div class="top-nav">  <ul class="memenu skyblue">'
  +'  <li><a href="index.html">Home</a></li>    <li class="grid"><a href="#">Products</a>   <div class="mepanel">          <div class="row">         <div class="col1 me-one">'
  +'  <h4>Category</h4>     <ul>       <li><a href="product.html">Water Pipes</a></li>   <li><a href="product.html">Water Pumps</a></li>   </ul>   </div> <div class="col1 me-one">'
  +'   <h4>Pipe type</h4>    <ul>     <li><a href="product.html">Copper Pipes (Metal)</a></li>  <li><a href="product.html">Galvanized Steel (Metal)</a></li>      <li><a href="product.html">PVC Pipes (Plastic)</a></li>'
  +'  <li><a href="product.html">CPVC Pipes (Plastic)</a></li>  </ul>  </div> <div class="col1 me-one">  <h4>Popular Brands</h4>   <ul>     <li><a href="product.html">Roor</a></li>     <li><a href="product.html">Illadelph</a></li>'
  +'  <li><a href="product.html">Krass Design</a></li>  <li><a href="product.html">Grav Labs</a></li>  <li><a href="product.html">Toro</a></li>   <li><a href="product.html">Sheldon</a></li>   <li><a href="product.html">Zob</a></li>'
  +'  <li><a href="product.html">Black Leaf</a></li>    </ul>     </div>   </div>  </div></li>  <li class="grid"><a href="contact.html">Contact</a></li>   <li class="grid active"><a href="login.html">Login</a></li> '
  +'   <li class="grid"><a href="admin.html">Admin</a></li></ul>    <div class="clearfix"> </div>   </div>   <!---->  <div class="cart box_1">    <a href="checkout.html">      <div class="total">     <span class="simpleCart_total"></span> (<span id="simpleCart_quantity" class="simpleCart_quantity"></span>)</div>'
  +'  <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>   </a>   <p><a href="javascript:;" class="simpleCart_empty">Empty Cart</a></p>     <div class="clearfix"> </div>    </div>'
  +'    <div class="clearfix"> </div>    <!---->        </div>   <div class="clearfix"> </div></div>';

var footer='<div class="footer"> <div class="container">  <div class="footer-grids">  <div class="col-md-3 about-us">     <h3>About Us</h3>  <p>Maecenas nec auctor sem. Vivamus porttitor tincidunt elementum nisi a, euismod rhoncus urna. Curabitur scelerisque vulputate arcu eu pulvinar. Fusce vel neque diam</p>'
+'  </div> <div class="col-md-3 ftr-grid"> <h3>Information</h3>   <ul class="nav-bottom">  <li><a href="#">Track Order</a></li>  <li><a href="#">New Products</a></li>  <li><a href="#">Location</a></li>  <li><a href="#">Our Stores</a></li> <li><a href="product.html">Best Sellers</a></li> '
+'   </ul>     </div>  <div class="col-md-3 ftr-grid"> <h3>More Info</h3>  <ul class="nav-bottom"> <li><a href="login.html">Login</a></li>    <li><a href="#">FAQ</a></li>   <li><a href="contact.html">Contact</a></li>    <li><a href="#">Shipping</a></li>        <li><a href="#">Membership</a></li> '
+'  </ul>   </div>  <div class="col-md-3 ftr-grid"> <h3>Categories</h3>  <ul class="nav-bottom">   <li><a href="#">Water Pipes</a></li>   <li><a href="#">Water Pumps</a></li>     </ul>        </div>    <div class="clearfix"></div>   </div>  </div></div><div class="copywrite">   <div class="container">'
+'     <div class="copy"> <p>© 2017 Group 7 Shopping Site. All Rights Reserved | Template <b>Lighting</b> designed by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>  </div>  <div class="social"></div>   <div class="clearfix"></div> </div></div>';
$('#header').append(header);

var check=0;
 var a=["Basin tap","Sink tap","Hand bidet"];
for ( i=0;i<30;i++)
{
    $('#container .list').append('<li class="order col-lg-12 item'+i+'"><a href="CategoryDetail.html" class="col-lg-6"><p>Category: '
         +a[i%3]+'- Manufacture: Malaysia - quantity: 16</p>   </a> <div class="col-lg-6"> <button id="btn'+i+'" class="btn btn-danger">delete</button></div></li>');
    check=check+1;
}

$('#footer').append(footer);

$('#container .order').on('mouseenter',function(){
    $(this).addClass('current');
});

$('#container .order').on('mouseleave',function(){
    $(this).removeClass('current');

});


$('button').on('click',function(e) {
    
    if($(this).hasClass('btn-danger')){
        var IDname = $(this).attr('id');
        var len=IDname.length;
        var str='.item';
        str=str+IDname[len-1]
        $(str).remove();
    }
});

    $('.close2').on('click', function(c){
                            $('.cart-header2').fadeOut('slow', function(c){
                        $('.cart-header2').remove();
                    });
                    });   

    $('.close1').on('click', function(c){
                        $('.cart-header').fadeOut('slow', function(c){
                            $('.cart-header').remove();
                        });
                        });   

});

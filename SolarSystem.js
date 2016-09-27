function myMove() {

  var middle_x;
  var middle_y;

  var mercury = document.getElementById("mercury");
  var mercury_orbit = document.getElementById("mercury-orbit");

  var top = mercury_orbit.style.top.toString();
  alert( top );

  initialize();
  
  



  function initialize(){

    var middle_x = window.screen.availWidth / 2;
    var middle_y = window.screen.availHeight / 2;

    normalize( "mercury" , -150 , 0 );
  }

  
  function toRadians (angle) {
    return angle * (Math.PI / 180);
  }

  function normalize( id , x , y ){
    var element = document.getElementById( id );
    var sizeX = element.style.width;
    var sizeY = element.style.height;
    alert( element.id );
    var mstring = "(" + sizeX + " , " + sizeY + ")";
    alert( mstring );

    element.style.left = x + middle_x - sizeX;
    element.style.top = y + middle_y - sizeY;
  }
}


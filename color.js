
//Declare the Color Object with our new keyword below here.
const Color = new Obect();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/
Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >=0) && (rgb[1]<=255);
  let blueworks = (rgb[2] >=0)&& (rgb[2]<=255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let r = rgb[0];
  r = (r/255)*100;
  r = Math.Round(r);
  return r;
};

//greenIntensity
Color.greenIntensity = function(rgb){
  let g = rgb[1];
  g = (g/255)*100;
  g = Math.Round(g);
  return g;
}

//blueIntensity
Color.blueIntensity = function(rgb){
  let b = rgb[2];
  b = (b/255)*100;
  b = Math.Round(b);
  return b;
}

//brightness
Color.brightness = function(rgb){}
  var bright = (rgb[0]+rgb[1]+rgb[2])/3;
  return bright;
}
//complement
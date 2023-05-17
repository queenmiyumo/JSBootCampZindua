function calculateArea(length, width) {
    var area = length * width;
    return area;
  }
  
  function calculatePerimeter(length, width) {
    var perimeter = 2 * (length + width);
    return perimeter;
  }
  
  // Example usage
  var length = 9;
  var width = 15;
  
  var area = calculateArea(length, width);
  var perimeter = calculatePerimeter(length, width);
  
  console.log("Area of the rectangle: " + area);
  console.log("Perimeter of resctangle: " + perimeter);
  
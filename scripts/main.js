window.onload = function () {
  var map = L.map('map').setView([21.0277644,105.83415979999995], 18);
  
 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);
   //var strin='<strong'
 L.marker([21.0277644,105.83415979999995]).addTo(map)
         .bindPopup('Ha Noi') 
           .openPopup();
  var mybut=document.querySelector('button');
  mybut.onclick=function()
  {
    var la=prompt('latitude');
    var lo=prompt('longtitude');
    var des=prompt('des');
    createlayer(la,lo,des);
  }
  function createlayer(la, lo,des)
  {
    L.marker([la,lo]).addTo(map).bindPopup(des).openPopup();
  }

};


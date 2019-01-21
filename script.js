function toggle() {
 var size = document.getElementById('shoeSize').value;
 var date = document.getElementById('yearOfBirth').value;
 var result = (((size*2)+5)*50-date)+1766;
 alert(result);
}

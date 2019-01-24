function toggle() {
  var size = document.getElementById('shoeSize').value;
  var date = document.getElementById('yearOfBirth').value;
  var result=(((size*2)+5)*50-date)+1766;

  if (!isNaN(size) && !isNaN(date)){
    if (size % 1 ==0 && date % 1 ==0){
      if (size > 30 && size < 50){
        if (date > 1900 && date<2019){
          alert(result);
        }else{
          alert('Incorrect date');
        }
      }else{
        alert('Incorrect size');
      }
    }else{
      alert('Full numbers required');
    }
  }else{
    alert('Numbers required');
  }
}

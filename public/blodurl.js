const blodurl = ((reader)=> {
  const element = document.querySelector('#binaryString')
  reader.onload = function (e) {
    console.log(e.target.result);
    element.innerText = e.target.result
  }
  let file_object = {}
  reader.onloadend = function () {
      file_object.clear()
  }
  return {
    element,
    open: function (file) {
      reader.readAsDataURL(file.getFile())
      file_object = file
    }
  };
})(new FileReader())

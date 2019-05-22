const text = (()=> {
  const element = document.querySelector('#text')
  const reader = new FileReader();
  reader.onload = function (e) {
    element.innerText = e.target.result
  }
  let file_object = {}
  reader.onloadend = function () {
      file_object.clear()
  }
  return {
    element,
    open: function (file) {
      reader.readAsText(file.getFile(), "UTF-8")
      file_object = file
    }
  };
})()

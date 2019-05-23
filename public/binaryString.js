const binaryString = ((reader)=> {
  const element = document.querySelector('#binaryString')
  reader.onload = function (e) {
    element.innerText = JSON.stringify((new Uint8Array(e.target.result)).join(', '))
  }
  let file_object = {}
  reader.onloadend = function () {
      file_object.clear()
  }
  return {
    element,
    open: function (file) {
      reader.readAsArrayBuffer(file.getFile())
      file_object = file
    }
  };
})(new FileReader())

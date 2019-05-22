const image = (()=> {
  const element = document.querySelector('#image')
  let file_object = {}
  element.addEventListener('load', () => {
    file_object.clear()
  })
  return {
    element,
    setSrc: function (file) {
      console.log(file.getBlobUrl());
      element.src = file.getBlobUrl()
      file_object = file
    }
  };
})()

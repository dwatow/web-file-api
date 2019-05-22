const base64 = (()=> {
  const element = document.querySelector('#base64')
  let file_object = {}
  return {
    element,
    text: function (base64) {
      element.value = base64
    }
  };
})()

const canvas = (()=> {
  const element = document.querySelector('#canvas')
  const ctx = element.getContext('2d');
  return {
    element,
    draw: function (img) {
      element.width = img.element.width,
      element.height = img.element.height
      ctx.drawImage(img.element, 0, 0, img.element.width, img.element.height);
    },
    toBase64: function () {
      return element.toDataURL('image/jpeg')
      // file_object = file
    }
  };
})()

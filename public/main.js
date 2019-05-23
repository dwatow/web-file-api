((uploadFile, image, base64, canvas) => {
  const showImgButton = document.querySelector('#showImgButton')
  showImgButton.addEventListener('click', (e) => {
    image.setSrc(uploadFile);
  })

  const showCanvasButton = document.querySelector('#showCanvasButton')
  showCanvasButton.addEventListener('click', (e) => {
    canvas.draw(image)
  })

  const showBase64Button = document.querySelector('#showBase64Button')
  showBase64Button.addEventListener('click', (e) => {
    base64.text(canvas.toBase64())
  })

    const showTextButton = document.querySelector('#showTextButton')
    showTextButton.addEventListener('click', (e) => {
      text.open(uploadFile);
    })

    const showBinaryStringButton = document.querySelector('#showBinaryStringButton')
    showBinaryStringButton.addEventListener('click', (e) => {
      binaryString.open(uploadFile);
    })

})(uploadFile, image, base64, canvas)

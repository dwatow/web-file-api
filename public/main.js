((uploadFile, image, base64, canvas, binaryString, blodurl) => {

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

  const downloadFileAnchor = document.querySelector('#downloadFileAnchor')
  downloadFileAnchor.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.href = uploadFile.getBlobUrl()
    e.target.target = '_blank';
    e.target.download = 'new_' + uploadFile.filename();
  })

  const downloadFileButton = document.querySelector('#downloadFileButton')
  downloadFileButton.addEventListener('click', (e) => {
    const anchor = document.createElement('a')
    anchor.href = uploadFile.getBlobUrl()
    anchor.target = '_blank';
    anchor.download = 'new_' + uploadFile.filename();
    anchor.click()
  })

})(uploadFile, image, base64, canvas, binaryString, blodurl)

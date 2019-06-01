((uploadFile, image, base64, canvas, binaryString, blodurl) => {

  const showImgButton = document.querySelector('#showImgButton')
  showImgButton && showImgButton.addEventListener('click', (e) => {
    image.setSrc(uploadFile);
  })

  const showCanvasButton = document.querySelector('#showCanvasButton')
  showCanvasButton && showCanvasButton.addEventListener('click', (e) => {
    canvas.draw(image)
  })

  const showBase64Button = document.querySelector('#showBase64Button')
  showBase64Button && showBase64Button.addEventListener('click', (e) => {
    base64.text(canvas.toBase64())
  })

  const showTextButton = document.querySelector('#showTextButton')
  showTextButton && showTextButton.addEventListener('click', (e) => {
    text.open(uploadFile);
  })

  const showBinaryStringButton = document.querySelector('#showBinaryStringButton')
  showBinaryStringButton && showBinaryStringButton.addEventListener('click', (e) => {
    binaryString.open(uploadFile);
  })

  const downloadFileAnchor = document.querySelector('#downloadFileAnchor')
  downloadFileAnchor && downloadFileAnchor.addEventListener('click', (e) => {
    e.target.href = uploadFile.getBlobUrl()
    e.target.target = '_blank';
    e.target.download = 'new_' + uploadFile.filename();
  })

  const downloadFileButton = document.querySelector('#downloadFileButton')
  downloadFileButton && downloadFileButton.addEventListener('click', (e) => {
    const anchor = document.createElement('a')
    anchor.href = uploadFile.getBlobUrl()
    anchor.target = '_blank';
    anchor.download = 'new_' + uploadFile.filename();
    anchor.click()
  })

  const downloadByAxios = document.querySelector('#downloadByAxios')
  downloadByAxios && downloadByAxios.addEventListener('click', (e) => {
    axios({
      baseURL: location.origin,
      url: '/upload',
      headers: {'Content-Type': 'multipart/form-data'},
      method: 'POST',
      data: new FormData(uploadFile.getForm())
    })
  })

})(uploadFile, image, base64, canvas, binaryString, blodurl)

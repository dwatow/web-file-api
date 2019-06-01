const uploadFile = (()=> {
  const element = document.myForm.myUploadFile
  let blob_url = ''
  return {
    element,
    getForm: function () {
      return document.myForm
    },
    getFile: function () {
      return element.files.item(0)
      console.log(element.files.item(0));
    },
    getBlobUrl: function () {
      if (!blob_url) {
        const oneFile = element.files.item(0);
        blob_url = URL.createObjectURL(oneFile);
        console.log('blob url: ', blob_url);
      }
      return blob_url
    },
    clear: function () {
      URL.revokeObjectURL(blob_url)
      element.value = null
    },
    filename: function () {
      const oneFile = element.files.item(0);
      console.log(element.files.item(0));
      return oneFile.name
    }
  };
})()

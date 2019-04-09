# CKeditor5 Imgur Uploader

A plug-n-play uploader for uploading images to [imgur](https://imgur.com/) directly.

## Instructions

```bash
npm install ckeditor5-imgur-uploader
```

## Generate Imgur CLIENT ID

Please follow [the instructions](https://api.imgur.com/oauth2/addclient) to create a new Imgur application (where it says callback just use a dummy one) so that you can generate a clientID.

## Examples

### With no framework

```javascript
import ImgurUploaderInit from 'ckeditor5-imgur-uploader'

const ImgurUploader = ImgurUploaderInit({clientID: 'INSERT_IMGUR_CLIENT_ID'})

ClassicEditor.create(document.querySelector('#editor'), {
  extraPlugins: [ImgurUploader]

  // ...
}).catch(error => {
  console.log(error)
})
```

### React

```javascript
import React from 'react'
import ImgurUploaderInit from 'ckeditor5-imgur-uploader'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function CkeditorWrapper() {
  const ImgurUploader = ImgurUploaderInit({clientID: 'INSERT_IMGUR_CLIENT_ID'})

  return (
    <CKEditor
      config={{
        extraPlugins: [ImgurUploader]
      }}
      editor={ClassicEditor}
    />
  )
}
```

## Contributions

Pull requests are welcome, so feel free to contribute!

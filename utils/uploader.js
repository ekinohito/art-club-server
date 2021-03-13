export default async function uploader(file) {
    let data = new FormData()
    data.append('file', file)
    let file_upload = await fetch('/api/upload', {
        method: 'POST',
        body: data
    })
    return await file_upload.json()
}
import React from 'react';

export default function FileUpload({setFile}) {
    return <>
        <label htmlFor="file">Image</label>
        <input id="file" name="file" type="file" onChange={(event) => {
            setFile(event.currentTarget.files[0]);
        }}/>
    </>
}

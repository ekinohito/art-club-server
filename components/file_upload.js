import React from 'react';

export default function FileUpload({setFile}) {
    return <div className="input-group mb-2">
        <div className="custom-file">
            <input id="file" name="file" type="file" className="custom-file-input" onChange={(event) => {
                setFile(event.currentTarget.files[0]);
            }}/>
            <label className="custom-file-label" htmlFor="file">Choose file</label>
        </div>
    </div>
}

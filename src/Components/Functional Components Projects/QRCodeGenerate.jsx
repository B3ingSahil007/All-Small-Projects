import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';


const QRCodeGenerate = () => {
    const TITLE = 'QR Code Generator';

    const [temp, setTemp] = useState("")
    const [word, setWord] = useState("")
    const [size] = useState(400)
    const [bgcolor, setBgcolor] = useState("fff")
    const [qrcode, setQrcode] = useState("")
    
    useEffect(() => {
        setQrcode(
            (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgcolor}`)
        )
    }, [word, size, bgcolor]);

    const handleClick = () => {
        setWord(temp);
    }

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className='text-center'>
                <h4>QR Code.jsx File</h4>
                <div className="input-box">
                    <div className="gen">
                        <div className="m-3 d-flex justify-content-center">
                            <input style={{ width: '8cm' }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setTemp(e.target.value) }} placeholder="Enter Text To Encode" />
                        </div>
                        <button className="button btn btn-outline-dark" onClick={() => { handleClick() }}>Generate QR-Code</button>
                    </div>
                    <div className="extra m-3">
                        <div className='d-flex justify-content-center'>
                            <h5>Background Color : </h5>
                            <div className='ms-2'>
                                <input type="color" onChange={(e) => { setBgcolor(e.target.value.substring(1)) }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="output-box">
                    <img style={{ width: '9cm', border:'solid 2px' }} src={qrcode} alt="" />
                    <div className='mt-3'>
                        <a href={qrcode} download="qrcode">
                            <button className='btn btn-outline-dark'>Download</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QRCodeGenerate

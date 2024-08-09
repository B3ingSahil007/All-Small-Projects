import React, { useState } from 'react'

const ToDo = () => {
    const [data, setData] = useState({})
    const [arrayOfObjectData, setArrayOfObjectData] = useState([])
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e, type) => {
        //! First Method
        // if (type === 'reason') {
        //     setData({ ...data, reason: e.target.value })
        // } else if (type === 'amount') {
        //     setData({ ...data, amount: e.target.value })
        // } else if (type === 'credeb') {
        //     setData({ ...data, credeb: e.target.value })
        // }

        //! Second Method
        setData({ ...data, [type]: e.target.value })
    }

    const handleClick = () => {
        // console.log(data);
        const dataInArray = [...arrayOfObjectData, data]
        setArrayOfObjectData(dataInArray)
        // console.log(arrayOfObjectData);

        if (editIndex !== null) {
            const updatedArray = [...arrayOfObjectData];
            updatedArray[editIndex] = data;
            setArrayOfObjectData(updatedArray);
            setEditIndex(null);
        } else {
            setArrayOfObjectData([...arrayOfObjectData, data]);
        }
    }

    const editClickData = (idx) => {
        setData(arrayOfObjectData[idx]);
        setEditIndex(idx);
    }

    const deleteClickData = (idx) => {
        const deleteArrayData = [...arrayOfObjectData]
        deleteArrayData.splice(idx, 1)
        setArrayOfObjectData(deleteArrayData)
        console.log(deleteArrayData);
    }


    return (
        <>
            <div className="text-center">
                <div style={{ boxShadow: '0px 5px 20px 5px black' }} className="p-2 bg-dark text-light sticky-top">
                    <h2 style={{ textShadow: '3px 3px 8px white' }}>To - Do Program</h2>
                </div>
                <div style={{ backgroundColor: 'darkorange' }} className="inputs">
                    <div className="row m-0 d-flex justify-content-center">
                        <div className="m-3 col-3">
                            <label className="form-label"><h5 style={{ textShadow: '3px 3px 8px black' }}>Reason :</h5></label>
                            <input value={data.reason || ""} onChange={(e) => { handleChange(e, 'reason') }} style={{ boxShadow: '0px 0px 30px 8px black', border: '2px solid black', background: 'transparent' }} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="m-3 col-2">
                            <label className="form-label"><h5 style={{ textShadow: '3px 3px 8px black' }}>Amount :</h5></label>
                            <input value={data.amount || ""} onChange={(e) => { handleChange(e, 'amount') }} style={{ boxShadow: '0px 0px 30px 8px black', border: '2px solid black', background: 'transparent' }} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="m-3 col-3">
                            <label className="form-label"><h5 style={{ textShadow: '3px 3px 8px black' }}>Credit | Debit :</h5></label>
                            <input value={data.credeb || ""} onChange={(e) => { handleChange(e, 'credeb') }} style={{ boxShadow: '0px 0px 30px 8px black', border: '2px solid black', background: 'transparent' }} className="form-control" id="exampleInputEmail1" />
                        </div>
                    </div>
                    <button onClick={() => { handleClick() }} style={{ width: '2cm', boxShadow: '0px 5px 20px 2px black', border: '2px solid black' }} className="btn btn-outline-dark mb-3">{editIndex !== null ? "Update" : "Submit"}</button>
                    <div className="heading">
                        <div className="row m-0">
                            <div style={{ textShadow: '3px 3px 8px black' }} className="h2 col-3">Reason</div>
                            <div style={{ textShadow: '3px 3px 8px black' }} className="h2 col-3">Amount</div>
                            <div style={{ textShadow: '3px 3px 8px black' }} className="h2 col-3">Credit / Debit</div>
                        </div>
                    </div>
                    <hr style={{ color: 'black', opacity: '1', margin: '0' }} />
                    {arrayOfObjectData.map((item, index) => (
                        <div className="row m-0 mt-3" key={index}>
                            <p style={{ textShadow: '2px 2px 4px black' }} className="col-3">
                                {item.reason}
                            </p>
                            <p style={{ textShadow: '2px 2px 4px black' }} className="col-3">
                                {item.amount}
                            </p>
                            <p style={{ textShadow: '2px 2px 4px black' }} className="col-3">
                                {item.credeb}
                            </p>
                            <div style={{ marginBottom: "0.5cm" }} className="col">
                                <button style={{ boxShadow: "5px 5px 10px 5px rgb(0, 0, 0, 0.6)" }} onClick={() => { editClickData(index); }} className="btn btn-outline-dark mx-3">Edit</button>
                                <button style={{ boxShadow: "5px 5px 10px 5px rgb(0, 0, 0, 0.6)" }} onClick={() => { deleteClickData(index); }} className="btn btn-outline-dark">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ToDo

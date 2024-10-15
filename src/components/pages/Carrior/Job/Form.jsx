import { Email } from '@mui/icons-material'
import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({
        select: "",
        Name: "",
        Email: "",
        Number: "",
    });
    const { select, Name, Email, Number } = data;
    const handlechange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/saulmate/google_sheets/NRsbWKihspccNHId?tabId=Sheet1",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([[select, Name, Email, Number, new Date().toLocaleString()]])
                }
            )
            await response.json();
            setData({ ...data, select: "", Name: "", Email: "", Number: "" })
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="row hee shadow pt-5">
            <div className='col-12 col-md-6 mx-auto py-5 shadow bgcolor px-5'>
                <form className="align-items-center" onSubmit={handlesubmit}>
                    
                    <div className="pb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Name</label>
                        <input type="text" className="form-control shadow border-0 rounded-0 form-control-lg" id="formGroupExampleInput"
                            placeholder="Enter Name"
                            name='Name'
                            value={Name}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="pb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Email</label>
                        <input type="email" className="form-control shadow border-0 rounded-0 form-control-lg" id="formGroupExampleInput2"
                            placeholder="Enter Email"
                            name='Email'
                            value={Email}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="pb-3">
                        <label htmlFor="formGroupExampleInput3" className="form-label fw-bold">Mobile Number</label>
                        <input type="number" className="form-control shadow border-0 rounded-0 form-control-lg" id="formGroupExampleInput3"
                            placeholder="Enter Number"
                            name='Number'
                            value={Number}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="pb-3">
                        <label htmlFor="formGroupExampleInput4" className="form-label fw-bold">Select Courses</label>
                        <select className="form-select shadow border-0 rounded-0 form-control-lg" aria-label="Default select example"
                            name='select'
                            value={select}
                            onChange={handlechange}
                        >
                            <option>Select Courses</option>
                            <option className='fw-bold' value="Shastri Pandit Mahapandit">Shastri Pandit Mahapandit</option>
                            <option className='fw-bold' value="Vidyavachaspati">Vidyavachaspati</option>
                            
                        </select>
                    </div>    
                    
                    <div className="col-auto">
                        <button type="submit" className="hee px-3 rounded border-0 fw-bold py-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form

import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Makepayment = () => {

  const {product} = useLocation().state || {}
  const[phone,setPhone] = useState("")
  const [message,setMessage] = useState("")

  const submit = async (e) =>{
    e.preventDefault()

    setMessage("Please wait as we process")

    const data = new FormData()
    data.append("phone",phone)
    data.append("amount",product.product_cost)

    const response =await axios.post('https://elvis15.pythonanywhere.com/api/mpesa_payment',data)

    setMessage(response.data.message)
  }
  return (
  <div className="sasa">

    <div className='row justify-content-center m-4'>
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit}>
          <h2 className='text-success'>LIPA NA MPESA</h2>
          {message}
          <input 
          type="tel"
          placeholder='Enter phone number'
          className='form-control'
          onChange={(e) => {setPhone(e.target.value)}}
          value={phone}
          />
          < p className='text-start'>Enter Phone number to pay from starts with 254712345678</p>

          <button type='submit' 
          className='btn btn-success mt-4 w-50'>
            PAY NOW 🚀
            </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Makepayment

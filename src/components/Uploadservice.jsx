import axios from 'axios'
import React, {useState} from 'react'

const Uploadservice = () => {

  const[product_name,setProductname] = useState("")
  const[product_description,setproductdescription] = useState("")
  const[product_cost,setProductcost]=useState('')
  const[product_photo,setProductphoto]=useState("")
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  const submit = async (e) =>{
    e.preventDefault()
    setLoading("Uploading...")

   try{
    const data=new FormData()
    data.append('product_name',product_name)
    data.append('product_description',product_description)
    data.append('product_cost',product_cost)
    data.append('product_photo',product_photo)
    
    const response = await axios.post("https://elvis15.pythonanywhere.com//api/add_product",data)

    setLoading("")
    setSuccess(response.data.Success)

    setProductname("")
    setproductdescription("")
    setProductcost("")
    setProductphoto("")
   }
   catch (error){
      setLoading("")
      setError("Something went wrong..")
   }
  }
  
  return (
    <div className="sasa">

          <div className='row justify-content-center p-4'>
            <div className="col-md-4 card shadow mt-4">
                <form className='p-3'onSubmit={submit}>
                <h2><b></b>Upload service 🛎</h2>
                {loading}
                {success}
                {error}

                <input type = 'text' 
                placeholder='product_name'
                className='form-control my-3'
                required
                onChange={(e) => {setProductname(e.target.value)}}
                value={product_name}
                />

                <textarea 
                placeholder= "product_description"
                className='form-control mb-3'
                required
                onChange={(e) => {setproductdescription(e.target.value)} }
                value={product_description}
                ></textarea>
              
                <input type="number" 
                placeholder= "product_cost"
                className='form-control mb-3'
                required
                onChange={(e) => {setProductcost(e.target.value)}}
                value={product_cost}
                />

                <input type="file" 
                className='form-control mb-3'
                required
                onChange={(e) => {setProductphoto(e.target.files[0])}}
                />

                <button type='submit'
                className='btn btn-success my-3 px-3'
                > Uploadservice 🔲
                </button>
                </form>

            </div>
          </div>
          </div>
  )
}

export default Uploadservice;

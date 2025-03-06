import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Quotes.css'



function Quotesgenerator() {
  const [quotes,setQuote]=useState("")


    const authorImages = {
        "Rumi": "/images/rumi.jpeg",
        "Albert Einstein": "/images/albert.jpg",
         "Abdul Kalam":"/images/apj abdul kalam.jpeg",
         "Bill Gates":"/images/bill.jpeg",
         "Abraham Lincoln":"/images/abraham.jpeg",
         "Oprah Winfrey":"/images/oprah.jpeg",
         "Muhammad Ali":"/images/ali.jpeg",
         "William Shakespeare":"/images/shakespere.jpeg",
         "Mother Teresa":"/images/theresa.jpeg",
         "Nelson Mandela":"/images/mandela.jpeg",
         "Walt Disney":"/images/walt disney.jpeg",
         "Aristotle":"/images/aaristotle.jpg"


       
    }
  const fetchdata = async () => {
    const { data } = await axios.get('https://dummyjson.com/quotes')
    const res = data.quotes[Math.floor(data.quotes.length * Math.random())]
    setQuote(res)
  }


useEffect(() => {
    fetchdata()
}, [])
console.log(quotes)



  

  return (
    <>
    <h2 style={{textAlign:'center',color:'whitesmoke',marginTop:'150px' }} >Quote Generator</h2>
    <div>
      
    </div>
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center' }}>
      <div>
        <h3 className='quotes mt-5'>"{quotes.quote}"</h3>
        <h3 className='author mt-2'>-{quotes.author}</h3>
        
      </div>       
    </div>
    <div className='d-flex justify-content-center align-items-center'>
      <button className='btn btn-success rounded ' style={{width:'150px',fontSize:'15px',height:'50px',marginTop:'50px'}} onClick={fetchdata} > Give me an advice</button>
      {quotes.author && (
                            <img 
                                src={authorImages[quotes.author] || "https://via.placeholder.com/100"}
                                alt={quotes.author}
                                className="image mt-4 "
                                 
                            />
                        )}

    </div>
   
      
    </>

  )
}

export default Quotesgenerator




// import React, { useEffect, useState } from 'react'
// import './quote.css'
// import axios from 'axios';






    
//     return (
//         <>

//             <div className="vh-100 d-flex justify-content-center "style={{ backgroundColor: "#384B70" }}>
//                 <div className="text-center" style={{ marginTop: '100px',   }}>
//                     <h3 className='random' style={{ color: 'white' }} >RANDOM QUOTES GENERATOR</h3>

//                     <div className="bo  justify-content-center mt-3">
//                         <h6 className='quo mt-4' >"{quotes.quote}"</h6>
//                         <br />
//                         <p className='author' mt-4 >- {quotes.author}</p>
                        
                   

//                     </div>
//                     <button className='click mt-3 p-1' onClick={fetchdata}>NEXT QUOTE</button>
//                 </div>
                
//             </div>
            









//         </>
//     )
// }

// export default Quote
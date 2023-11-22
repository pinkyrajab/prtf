 import './InitialProj.css'
 import  Image  from './../../assets/images/ReactUploadImages.png' 
 import ceaserCypher from './../../assets/images/CeaserCypher.png'
 export function InitialProjs(){
    return(
        <div style={{height:"900px",margin:"0!important"}}>
            <p className="project-brand" id="proj" style={{textAlign:"center",margin:"30px"}}>Projects</p>
            <div className='container' style={{margin:"30px"}}>
                <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                    <div class="card cardProj" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">POULTRY FARM SOLUTIONS</p>
                        </div>
                     </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                    <div class="card cardProj" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">SOFTLIFE ADVENTURES AND TRAVELLERS.</p>
                        </div>
                     </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                    <div class="card cardProj" style={{width: "18rem"}}>
                        <img src={Image} class="card-img-top " alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Multiple Image uploads that converts to Binary</p>
                        </div>
                     </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                    <div class="card cardProj" style={{width: "18rem"}}>
                        <img src={ceaserCypher} class="" style={{height:"180px"}} alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Ceiser Cipher with Python</p>
                        </div>
                     </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
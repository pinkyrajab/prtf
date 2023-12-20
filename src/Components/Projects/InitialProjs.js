 import './InitialProj.css'
 import  Image  from './../../assets/images/ReactUploadImages.png' 
 import ceaserCypher from './../../assets/images/CeaserCypher.png'
 import softlife from './../../assets/images/softlife.png'
 import IGC from './../../assets/images/IGC.png'
 export function InitialProjs(){
    return(
        <div style={{height:"400px",margin:"0!important"}}>
            <p className="project-brand" id="proj" style={{textAlign:"center",margin:"30px"}}>Projects</p>
            <div className='container' style={{margin:"5px"}}>
                <div className='row'>
                    <div className='col-lg-3 col-md-6'>
                    <div class="card cardProj" style={{width: "18rem"}}>
                        <img src={IGC} class="card-img-top" alt="..." height={175}/>
                        <div class="card-body">
                            <p class="card-text">Poultry Farm Solutions</p>
                        </div>
                     </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                    <div class="card cardProj" style={{width: "18rem"}}>
                        <img src={softlife} class="card-img-top" alt="..." height={175}/>
                        <div class="card-body">
                            <p class="card-text">Softlife Adventures and travellers.</p>
                        </div>
                     </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                    <div class="card cardProj" style={{width: "18rem"}}>
                        <img src={Image} class="card-img-top " alt="..." height={175}/>
                        <div class="card-body">
                            <p class="card-text">Multiple Image uploads(Material Ui)</p>
                        </div>
                     </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                    <div class="card cardProj" style={{width: "18rem"}}>
                        <img src={ceaserCypher} class=""  alt="..."height={175}/>
                        <div class="card-body">
                            <p class="card-text">Ceiser Cipher</p>
                        </div>
                     </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
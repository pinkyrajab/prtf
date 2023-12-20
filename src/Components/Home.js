import { Stacs } from "./Techstacs/Stacs"
import { InitialProjs } from "./Projects/InitialProjs"
import { Navbar } from "./Nav/Navbar"
import './Home.css'
import profile from './../assets/images/Hemmingways1.jpeg'

function Home(){
    return(
        <div className="card">
            <div className="card topdiv">
                <Navbar/>
                <div className="container " style={{backgroundColor:"white!important",padding:"50px"}}>
                    <div className="row">
                        <div className="col-md-8 mydiv" style={{alignItems:"right",margin:"10px;"}}>
                            <div className="" >
                                <span><h5>Hey you! &#128515;</h5></span>
                            </div>
                            <p style={{marginTop:"20px",fontSize:"18px"}}>
                            Welcome to my corner of the digital universe! I'm a passionate and versatile Full Stack Developer with a knack for crafting innovative and efficient solutions. My journey in the world of 
                            software development has been driven by a relentless curiosity and a commitment to turning ideas into reality.
                            </p>
                            <p style={{marginTop:"20px",fontSize:"18px"}}>
                                I specialize in full-stack web development, combining my skills in both front-end and back-end technologies. From creating sleek and responsive user 
                                interfaces to architecting robust server-side systems, I thrive in the dynamic and ever-evolving realm of software development.
                            </p>
                            <div className="stacs" style={{marginTop:"30px"}}>
                                <Stacs/>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <img className="profile" src={profile} alt="img" style={{ width: '100%', height: 'auto' }} />
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid maincardProj" >
                <InitialProjs/>
            </div>
            <div className="card bottomdiv">
                <div className="container-fluid" style={{backgroundColor:"white!important",padding:"50px"}}>
                    <center><h4 style={{color:"brown",marginBottom:"30px"}}>GET IN TOUCH</h4></center>
                    <div className="row">
                    <div className="col-2">

                    </div>
                       <div className="col-4">
                            <ul>
                                <li>
                                <a  href="https://www.linkedin.com/in/amina-rajab-b2b466203" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                                </svg>   Linked In </a></li>
                                <li><a href="tel:+254759899033"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>   Whatsapp</a></li>
                                <li><a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-arrow-up-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207z"/>
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016Z"/>
                                </svg>  itsaminarajab@gmail.com</a>
                                </li>
                                <li><a href="https://github.com/pinkyrajab" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg> pinkyrajab</a>
                                </li>
                            </ul>
                       </div>
                       <div className="col-6">
                        <div style={{marginLeft:"150px"}}>
                            <h6>Send an Enquiry</h6>
                            <div class="form__group field">
                            <input type="input" class="form__field" placeholder="emailAddress" name="emailAddress" id='name' required />
                            <label for="emailAddress" class="form__label">Email Address</label>
                            </div>
                            <br>
                            </br>
                            <textarea placeholder="Description" rows={4} style={{border:"2px solid #ccc",borderRadius: "10px",width:"50%"}}></textarea>
                            <br></br>
                            <button className="btn btn-dark btnSubmit" >Submit</button>
                      </div>
                             </div>
                    </div>
                </div>
            </div>
        </div>
            
            
        
    )
}

export default Home
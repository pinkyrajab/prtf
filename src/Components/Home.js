import { Stacs } from "./Techstacs/Stacs"
import { InitialProjs } from "./Projects/InitialProjs"
import { Navbar } from "./Nav/Navbar"
import './Home.css'
import profile from './../assets/images/Hemmingways1.jpeg'

function Home(){
    return(
        <div>
            <Navbar/>
            <div className="container" style={{backgroundColor:"white!important",padding:"50px"}}>
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
            
            <div style={{marginTop:"30px"}} className="card maincardProj container-fluid">
                    <InitialProjs/>
                </div>
        </div>
        
    )
}

export default Home
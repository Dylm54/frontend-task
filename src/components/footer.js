import 'bootstrap/dist/css/bootstrap.min.css';
import { IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoGithub, IoLogoDribbble } from "react-icons/io5";
import '../index.css';

const Footer = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center flex-row aboveFooter' style={{ width: "100%", background: "#F4F7FC", paddingBottom: "70px", paddingTop: "70px", paddingRight: "150px", paddingLeft: "150px" }}>
                <div className='d-flex justify-content-between aboveFooter2' style={{ width: "100%", flexDirection: "row"}}>
                    <div className='text-start footLists' >
                        <h5 className='mb-4'>Rifki UI</h5>
                        <p className='text-body-secondary'>Design amazing digital experiences that<br /> create more happy in the world.</p>
                    </div>
                    <div className='text-start footLists' >
                        <p className='text-secondary' style={{ fontSize: "smaller" }}>Product</p>
                        <p className='text-body-secondary'>Overview</p>
                        <p className='text-body-secondary'>Features</p>
                        <p className='text-body-secondary'>Solutions</p>
                        <p className='text-body-secondary'>Tutorials</p>
                        <p className='text-body-secondary'>Pricing</p>
                        <p className='text-body-secondary'>Releases</p>
                    </div>
                    <div className='text-start footLists' >
                        <p className='text-secondary' style={{ fontSize: "smaller" }}>Company</p>
                        <p className='text-body-secondary'>About us</p>
                        <p className='text-body-secondary'>Careers</p>
                        <p className='text-body-secondary'>Press</p>
                        <p className='text-body-secondary'>News</p>
                        <p className='text-body-secondary'>Media kit</p>
                        <p className='text-body-secondary'>Contact</p>
                    </div>
                    <div className='text-start footLists' >
                        <p className='text-secondary' style={{ fontSize: "smaller" }}>Resources</p>
                        <p className='text-body-secondary'>Blog</p>
                        <p className='text-body-secondary'>Newsletter</p>
                        <p className='text-body-secondary'>Events</p>
                        <p className='text-body-secondary'>Help centre</p>
                        <p className='text-body-secondary'>Tutorials</p>
                        <p className='text-body-secondary'>Support</p>
                    </div>
                    <div className='text-start footLists' >
                        <p className='text-secondary' style={{ fontSize: "smaller" }}>Social</p>
                        <p className='text-body-secondary'>Twitter</p>
                        <p className='text-body-secondary'>Linkedin</p>
                        <p className='text-body-secondary'>Facebook</p>
                        <p className='text-body-secondary'>GitHub</p>
                        <p className='text-body-secondary'>AngelList</p>
                        <p className='text-body-secondary'>Dribble</p>
                    </div>
                    <div className='text-start footLists'>
                        <p className='text-secondary' style={{ fontSize: "smaller" }}>Legal</p>
                        <p className='text-body-secondary'>Terms</p>
                        <p className='text-body-secondary'>Privacy</p>
                        <p className='text-body-secondary'>Cookies</p>
                        <p className='text-body-secondary'>Licenses</p>
                        <p className='text-body-secondary'>Settings</p>
                        <p className='text-body-secondary'>Contact</p>
                    </div>
                </div>
            </div>
            <div className='bg-white d-flex py-4 justify-content-center align-items-center' style={{ width: "100%"}}>
                <div className='bg-white d-flex justify-content-between footer' style={{ width: "80%" }}>
                    <p className='text-secondary mb-0' style={{ fontSize: "smaller", marginTop: "5px" }}>© 2023 Rifki UI. All Rights Reserved.</p>
                    <div className='d-flex social'>
                        <div className='me-3 text-secondary'><IoLogoTwitter /></div>
                        <div className='me-3 text-secondary'><IoLogoLinkedin /></div>
                        <div className='me-3 text-secondary'><IoLogoFacebook /></div>
                        <div className='me-3 text-secondary'><IoLogoGithub /></div>
                        <div className='text-secondary dribble' style={{ marginRight: "3rem"}}><IoLogoDribbble /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
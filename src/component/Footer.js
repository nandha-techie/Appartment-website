import open_dd from '../images/open-dd-logo.png';


const Footer = ()=>{
    return(
        <div id="footer" className="container-fluid">
            <div className="d-flex flex-wrap text-white-50 justify-content-between p-5 pb-0">
                <div className="">
                    <h6>Urban housing LLP</h6>
                    <p>T-1 3rd floor Chona centre nungambakam college road <br /> Above Cream centre restuarant</p>
                </div>
                <div className="">
                    <h6 className="text-uppercase">Call us</h6>
                    <p className="fs-3 text-white">+91 723903472398</p>
                </div>
                <div className="">
                    <h6 className="text-uppercase">mail us</h6>
                    <p className="fs-4 text-white">info@urban.com</p>
                </div>
            </div>
            <div className="py-2">
                <div className="px-5">
                    <hr className="text-white" />
                </div>
                <div className="d-flex flex-wrap justify-content-between px-5 text-white">
                    <p>@copyrights All rights reserved</p>
                    <p>D&D by <img src={open_dd} alt="" /> be open</p> 
                </div>
            </div>
        </div>
    )
}
export default Footer;
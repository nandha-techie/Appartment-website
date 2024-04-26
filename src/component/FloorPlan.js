import Tab1 from '../images/stilt-plan.jpg';
import Tab2 from '../images/typical-floor-plan.jpg';

const FloorPlan = ()=>{
    return(
        <div id='floor-tab' className="px-5 py-5 mb-3">
            <ul className="nav nav-pills mb-3 w-50 mx-auto primary-color rounded-pill px-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-uppercase active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-uppercase" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-uppercase" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-uppercase" id="pills-status-tab" data-bs-toggle="pill" data-bs-target="#pills-status" type="button" role="tab" aria-controls="pills-status" aria-selected="false">status</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-uppercase border-0" id="pills-plan-tab" data-bs-toggle="pill" data-bs-target="#pills-plan" type="button" role="tab" aria-controls="pills-plan" aria-selected="false">Site Plan</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><img src={Tab1} className='w-100' height="500" alt="tab1" /></div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><img className='w-100' height="500" src={Tab2} alt="tab2" /></div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><img className='w-100' height="500" src={Tab1} alt="tab3" /></div>
                <div className="tab-pane fade" id="pills-status" role="tabpanel" aria-labelledby="pills-status-tab"><img className='w-100' height="500" src={Tab2} alt="tab4" /></div>
                <div className="tab-pane fade " id="pills-plan" role="tabpanel" aria-labelledby="pills-status-tab"><img className='w-100' height="500" src={Tab1} alt="tab5" /></div>
            </div>
        </div>
    )
}
export default FloorPlan;
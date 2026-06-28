import "./Profile.css";

import {

FaUser,

FaEnvelope,

FaUniversity,

FaGraduationCap,

FaUserTie,

FaCalendarAlt

} from "react-icons/fa";

function Profile() {

return (

<section className="profile">

<div className="profile-container">

<div className="profile-header">

<div className="profile-avatar">

<FaUser size={60} color="white"/>

</div>

<h2>Sariga</h2>

<p>sariga@example.com</p>

</div>

<div className="profile-info">

<div className="info-box">

<h4><FaUser /> Full Name</h4>

<p>Sariga</p>

</div>

<div className="info-box">

<h4><FaEnvelope /> Email</h4>

<p>sariga@example.com</p>

</div>

<div className="info-box">

<h4><FaUniversity /> University</h4>

<p>ABC University</p>

</div>

<div className="info-box">

<h4><FaGraduationCap /> Department</h4>

<p>Information Technologys</p>

</div>

<div className="info-box">

<h4><FaUserTie /> Role</h4>

<p>Researcher</p>

</div>

<div className="info-box">

<h4><FaCalendarAlt /> Joined</h4>

<p>January 2026</p>

</div>

</div>

</div>

</section>

);

}

export default Profile;
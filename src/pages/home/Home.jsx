import React from "react";
import "./home.css";
import Slider from "../../components/home-slider/Slider";
import cpct_img1 from "../../assets/cpct0.jpg";

const Home = () => {
  return (
    <>
      <div className="slider-bg">
        <Slider />
      </div>
      <center>
        <h1 className="color-line">Welcome To SK-Cyber</h1>
      </center>
      {/* ----------CPCT SECTION START--------------- */}
      <div className="container-fluide">
        <div className="row cl-blue">
          <div className="col-md-5">
            <div className="cp-img-cont">
              <img className="cpimg" src={cpct_img1} alt="" />
            </div>
          </div>

          <div className="col-md-7">
            <div className="cpct">
              <h2 className="cpct-h">● CPCT</h2>
              <p className="cpct-p">
                Computer Proficiency & Certification Test (CPCT) has been
                initiated in the State to assess Computer Proficiency and Typing
                Skills of aspirants of Government jobs. Computer Based Online
                examination assesses the competencies using Multi Choice
                Questions (MCQ) based assessment and Typing test (English &
                Hindi Typing).
              </p>
            </div>
            <center>
              <button className="button-reg">
                <a>Get Admission..</a>
              </button>
            </center>
          </div>
          <hr />
        </div>
      </div>
      {/* ----------CPCT SECTION END--------------- */}

      {/* ----------Basic Computer SECTION END--------------- */}
      <div className="container-fluide">
        <div className="row basic-blue">
          <div className="col-md-7">
            <div className="basic">
              <h2 className="cpct-h">● Basic Computer</h2>
              <p className="cpct-p">
                Computer classes teach you essential work skills. Different
                computer programs like Microsoft Suite help with tasks like
                writing, organizing documents, presentations, and spreadsheets.
                These are all essential skills for jobs today and can be used in
                across industries.
              </p>
            </div>
            <center>
              <button className="button-reg desk">
                <a>Get Admission..</a>
              </button>
            </center>
          </div>

          <div className="col-md-5">
          <div className="basic-img-cont">
              <img className="cpimg" src={cpct_img1} alt="" />
            </div>
            <center>
              <button className="button-reg mob btn">
                <a>Get Admission..</a>
              </button>
            </center>
          </div>
        </div>
      </div>
      {/* ----------Basic Computer SECTION END--------------- */}

      	{/* <!----------------GOVT-JOB-START-----------------> */}
	<div>
		<center>
			<h1 class="color-line">Government - Jobs</h1>
		</center>
	</div>
	<div class="container">
		<table>
			<tr>
				<td className="table-dt"><a href="https://www.sarkariresult.com/upsc/upsc-otr-registration/" >UPSC OTR 2022 Registration</a></td>

				<td className="table-dt"><a href="https://www.sarkariresult.com/ssc/ssc-cpo-si-2022/" >SSC CPO SI 2022 Apply Online</a></td>

				<td className="table-dt"><a href="https://www.sarkariresult.com/2022/army-agniveer-rally/" >Army Agniveer Apply Online</a></td>

				<td className="table-dt"><a href="https://www.sarkariresult.com/ssc/ssc-junior-engineer-je-2022/">SSC Junior Engineer Apply Online</a></td>
			</tr>

			<tr>
			<td className="table-dt"><a href="https://www.sarkariresult.com/force/coast-guard-ac-02-2023/" >Coast Guard AC Apply Online</a></td>

			<td className="table-dt"><a href="https://www.sarkariresult.com/upsssc/upsssc-mukhya-sevika-05-22/">Apply Online UPSSSC Mukhya Sevika Apply Online</a></td>

			<td className="table-dt"><a href="https://www.sarkariresult.com/ssc/ssc-stenographer-2022/" >SSC Stenographer 2022 Apply Online</a></td>

			<td className="table-dt"><a href="https://www.sarkariresult.com/2022/railway-group-d-admit-card/" >Railway Group D Exam City / Admit Card</a></td>
			</tr>

		</table>
	</div>
	<div class="container">
		<div class="row row-01">
			<div class="col-md-4 col-sep">
				<h4 class="tbl-h">Result</h4>
				<div class="b">
					<ol><a href="https://www.sarkariresult.com/delhi/delhi-hc-judicial-exam-2022/" target="">• Delhi High Court Judicial Services Mains Result 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/rpsc/rsmssb-house-keeper-05-22/" target="">• RSMSSB House Keeper Result 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/delhi/delhi-hc-jja-restorer-feb20/" target="">• Delhi High Court JJA / Restorer Final Result 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/2022/india-post-gds-may22/" target="">• India Post GDS 4th List / Result 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/rpsc/rajasthan-constable-nov21/" target="">• Rajasthan Police Constable Result 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/upsc/upsc-ies-iss-2022/" target="">• UPSC IES / ISS Result 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/delhi/dsssb-latest-result/" target="">• DSSSB TGT Social Science, Pharmacist Result 2022</a></ol>
				</div>
			</div>

			<div class="col-md-4 col-sep">
				<h4 class="tbl-h">Admit Card</h4>
				<div class="b">
					<ol><a href="https://www.sarkariresult.com/2022/jipmer-nursing-tech-jul22/" target="">• JIPMER Nursing Officer, Technician Admit Card 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/nta/nta-cuet-pg-2022/" target="">• NTA CUET PG Admit Card / Exam City and Date 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/ssc/ssc-mts-2020/" target="">• SSC MTS 2020 DV Test Admit Card</a></ol>
					<ol><a href="https://www.sarkariresult.com/2021/icar-iari-technician-dec21/" target="">• ICAR IARI Technician T-1 DV Schedule 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/bank/nabard-am-jul22/" target="">• Nabard Assistant Manager Admit Card 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/2022/railway-group-d-admit-card/" target="">• Railway RRC Group D Phase III Exam Date 2022</a></ol>
					<ol><a href="#" target="">• </a></ol>
				</div>
			</div>
			<div class="col-md-4 col-sep">
				<h4 class="tbl-h">Latest Jobs</h4>
				<div class="b">
					<ol><a href="https://www.sarkariresult.com/force/itbp-constable-animal-aug22/" target="">• ITBP Constable Animal Transport Online Form 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/2022/nhm-up-mental-health-aug22/" target="">• NHM UP Mental Health Program Various Post Online Form 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/force/coast-guard-yantrik-navik-01-2023/" target="">• Coast Guard Yantrik / Navik Online Form 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/2022/awes-tgt-pgt-prt-aug22/" target="">• Army School AWES PGT TGT PRT Online Form 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/2022/fci-manager-02-2022/" target="">• FCI Manager Various Trade Online Form 2022</a></ol>
					<ol><a href="https://www.sarkariresult.com/rpsc/rpsc-ae-civil-ro-eo-09-2022/" target="">• RPSC AE Civil, Revenue & Executive Officer Online Form 2022</a></ol>
				</div>
			</div>
		</div>
		{/* <hr style="height: 2px; color: black; background-color: gray;"> */}
		<center>
			<form >
				<button class="button-reg">See More..</button>
			</form>
		</center>
	</div>
	<br/>
	{/* <!----------------GOVT-JOB-END-----------------> */}
    </>
  );
};

export default Home;

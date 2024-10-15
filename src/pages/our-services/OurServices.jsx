import React from 'react';
import aadhar_img from "../../assets/aadhar.png";
import hitgrahi_img from "../../assets/Hitgrahi-Panjiyan.jpg";
import money_img from "../../assets/money.png";
import ticket_img from "../../assets/ticket1.png";

const OurServices = () => {
  return (
    <>
      
      {/* <!----------------OOur Services-START----------------> */}
      <div>
        <div>
          <center>
            <h1 className="color-line">Our Services</h1>
          </center>
        </div>
        <div className="container-fluid bg-bl">
          <div className="row">
            {/* <!------row start-------> */}

            <div className="col-md-3">
              <center>
                <img src={aadhar_img} className="svc grow-shadow" />
                <h5 className="tex">Aadhar Card</h5>
              </center>
            </div>

            <div className="col-md-3">
              <center>
                <img src={hitgrahi_img} className="svc grow-shadow" />
                <h5 className="tex">Hitgrahi Panjiyan</h5>
              </center>
            </div>

            <div className="col-md-3">
              <center>
                <img src={money_img} className="svc grow-shadow" />
                <h5 className="tex">Money Transfer</h5>
              </center>
            </div>

            <div className="col-md-3">
              <center>
                <img src={ticket_img} className="svc grow-shadow" />
                <h5 className="tex">Ticket</h5>
              </center>
            </div>
          </div>
          <br />
          {/* <!-----------------row end -------> */}
        </div>

        <hr />
        <center>
          <form action="service.php">
            <button className="button-reg">See More..</button>
          </form>
        </center>
      </div>
      {/* <!----------------OOur Services-START----------------> */}
    </>
  )
}

export default OurServices

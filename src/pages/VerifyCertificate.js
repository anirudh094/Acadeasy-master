import React from "react";
import StartFirebase from "./firebaseconfig_products";
import { ref, get, child } from "firebase/database";
import "../css/VerifyCertificate.css";
import { Products } from "./Products";

export class VerifyCertificate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db: "",
      CertificateId: "",
      ID: "",
      StudentName: "",
      ProjectName: "",
      Domain: "",
      TrainingFrom: "",
      TrainingTo: "",
    };
    this.interface = this.interface.bind(this);
  }

  componentDidMount() {
    this.setState({
      db: StartFirebase(),
    });
  }

  render() {
    return (
      <>
        <div className="VerifyCertificate-body">
          <div className="heading main-color-bg">Verify Your Certificate</div>
          <input
            type="text"
            id="userbox"
            className="certificateId-box"
            placeholder="Enter Your Certificate Id"
            value={this.state.CertificateId}
            onChange={(e) => {
              this.setState({ CertificateId: e.target.value });
            }}
          />

          <button id="selectBtn" onClick={this.interface}>
            Verify
          </button>

          <div className="Student-Details-heading" id="verify1">
            Certificate Details
          </div>
          <div className="Student-Details" id="verify2">
            <div className="Student-Details-row">
              <div>
                <label>Certificate Id</label>
                <br />
                <input
                  type="text"
                  id="namebox"
                  value={this.state.ID}
                />
              </div>
              <div>
                <label>Student Name</label>
                <br />
                <input
                  type="text"
                  id="namebox"
                  value={this.state.StudentName}
                />
              </div>
            </div>
            <div className="Student-Details-row">
              <div>
                <label>Project Name</label>
                <br />
                <input
                  type="text"
                  id="namebox"
                  value={this.state.ProjectName}
                />
              </div>
              <div>
                <label>Domain</label>
                <br />
                <input type="text" id="namebox" value={this.state.Domain} />
              </div>
            </div>
            <div className="Student-Details-row">
              <div>
                <label>Training From</label>
                <br />
                <input
                  type="text"
                  id="namebox"
                  value={this.state.TrainingFrom}
                />
              </div>
              <div>
                <label>Training To</label>
                <br />
                <input type="text" id="namebox" value={this.state.TrainingTo} />
              </div>
            </div>
          </div>
        </div>
        <Products/>
      </>
    );
  }

  interface(event) {
    const id = event.target.id;

    if (id === "selectBtn") {
      this.selectData();
    }
  }

  getAllInputs() {
    return {
      CertificateId: this.state.CertificateId,
      Id: this.state.Id,
      StudentName: this.state.StudentName,
      ProjectName: this.state.ProjectName,
      Domain: this.state.Domain,
      TrainingFrom: this.state.TrainingFrom,
      TrainingTo: this.state.TrainingTo,
    };
  }

  selectData() {
    const dbref = ref(this.state.db);
    const CertificateId = this.getAllInputs().CertificateId;

    get(child(dbref, "Students/" + CertificateId))
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.setState({
            ID: snapshot.val().ID,
            StudentName: snapshot.val().StudentName,
            ProjectName: snapshot.val().ProjectName,
            Domain: snapshot.val().Domain,
            TrainingFrom: snapshot.val().TrainingFrom,
            TrainingTo: snapshot.val().TrainingTo,
          });
        } else {
          alert("no data found");
        }
      })
      .catch((error) => {
        alert("there was an error, details: " + error);
      });
  }
}

import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const cssOnMouseOver = {
  cursor: "pointer",
};

const EmployeeCard = ({
  employee,
  selectedTeam,
  handleEmployeeCardClick,
}) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        "card m-2" + (employee.teamName === selectedTeam ? " standout" : "")
      }
      style={cssOnMouseOver}
      onClick={handleEmployeeCardClick}
    >
      <img
        src={employee.gender === "female" ? femaleProfile : maleProfile}
        alt="profile"
        className="card-img-top"
      />

      <div className="card-body">
        <h5 className="card-title">Full Name : {employee.fullName}</h5>
        <h5 className="card-text">
          <b>Designation:</b> {employee.designation}
        </h5>
      </div>
    </div>
  );
};

export default EmployeeCard;
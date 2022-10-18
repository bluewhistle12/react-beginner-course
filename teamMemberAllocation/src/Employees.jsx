import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const cssOnMouseOver = {
  cursor: "pointer",
};

const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>

        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                key={employee.id}
                id={employee.id}
                className={
                  "card m-2" +
                  (employee.teamName === selectedTeam ? " standout" : "")
                }
                style={cssOnMouseOver}
                onClick={handleEmployeeCardClick}
              >
                <img
                  src={
                    employee.gender === "female" ? femaleProfile : maleProfile
                  }
                  className="card-img-top"
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Full Name : {employee.fullName}
                  </h5>
                  <h5 className="card-text">
                    <b>Designation:</b> {employee.designation}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;

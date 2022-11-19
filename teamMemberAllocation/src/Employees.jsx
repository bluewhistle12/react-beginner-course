import Teams from "./Teams";
import EmployeeCard from "./EmployeeCard";

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
          <Teams
            selectedTeam={selectedTeam}
            handleTeamSelectionChange={handleTeamSelectionChange}
          ></Teams>
        </div>

        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => (
              <EmployeeCard
                employee={employee}
                selectedTeam={selectedTeam}
                handleEmployeeCardClick={handleEmployeeCardClick}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;

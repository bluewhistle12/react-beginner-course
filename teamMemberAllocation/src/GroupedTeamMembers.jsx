import { useState } from "react";
import "./GroupedTeamMembers.css";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

  function groupTeamMembers() {
    let teamArray = [];
    for (const employee of employees) {
      let myTeam = null;

      for (const team of teamArray) {
        if (employee.teamName !== team.team) continue;
        myTeam = team;
        break;
      }

      if (!myTeam) {
        myTeam = {
          team: employee.teamName,
          members: [employee],
          collapsed: selectedTeam !== employee.teamName ? true : false,
        };
        teamArray.push(myTeam);
        continue;
      }
      myTeam.members.push(employee);
    }
    return teamArray;
  }

  function handleTeamClick(event) {
    const newData = groupedEmployees.map((teamData) =>
      teamData.team === event.currentTarget.id
        ? { ...teamData, collapsed: !teamData.collapsed }
        : teamData
    );
    setGroupedEmployees(newData);
    setTeam(event.currentTarget.id);
    console.log(newData);
  }

  return (
    <div className="container">
      {groupedEmployees.map((item) => (
        <div className="card mt-2" style={{ cursor: "pointer" }}>
          <h4
            id={item.team}
            className="card-header text-secondary bg-white"
            onClick={handleTeamClick}
          >
            Team Name : {item.team}
          </h4>

          <div
            id={"collapse_" + item.team}
            className={item.collapsed === true ? "collapsed" : ""}
          >
            <hr />

            {item.members.map((member) => (
              <div className="mt-2">
                <h5 className="card-title mt-2">
                  <span className="text-dark">
                    Full Name : {member.fullName}
                  </span>
                </h5>
                <p>Designation : {member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupedTeamMembers;

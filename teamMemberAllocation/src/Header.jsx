const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <div className="container">
      <div className="row justify-content mt-3 mb-2">
        <h1>Team Member Allocation</h1>
        <h3>
          {selectedTeam} has {teamMemberCount + ' ' + (teamMemberCount > 1 ? "Members" : "Member")}
        </h3>
      </div>
    </div>
  );
};

export default Header;

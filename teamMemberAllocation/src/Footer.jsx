const Footer = () => {

  var today = new Date();

  return (
    <div className="container">
      <div className="row justify-content mt-3 mb-2">
        <div>
          <h5>
            Team Member Allocation App - {today.getFullYear()}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Footer;
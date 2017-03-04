var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p className="">Here are few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/location=FortWorth'>Fort Worth, TX</Link>
        </li>
        <li>
          <Link to='/location=HoChiMinh'>Ho Chi Minh City, Vietnam</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;

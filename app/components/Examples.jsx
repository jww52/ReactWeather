var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p className="">Here are few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=FortWorth'>Fort Worth, TX</Link>
        </li>
        <li>
          <Link to='/?location=Ho%20Chi%20Minh'>Ho Chi Minh City, Vietnam</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;

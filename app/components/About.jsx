var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to my ReactJS Weather App!</p>
      <p>Featuring:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org/">Open Weather Map</a> - This was the API used.
        </li>
        <li>
          <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/?couponCode=LEARNING">Andrew Mead's React Course</a> - The GREAT tutorial that taught me how to do this!
        </li>
      </ul>
      <p>Thanks for visiting, for more of my portfolio visit<span><a href="https://github.com/jww52"> my github profile</a></span></p>
    </div>
  );
};

module.exports = About;

import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-us-heading">About Us</h2>
      <p className="about-us-paragraph">
        At <strong className="app-name">MealMate</strong>, we believe that great
        food brings people together. Whether you're craving a quick bite,
        planning a cozy dinner at home, or hosting a gathering with friends,
        we're here to deliver your favorite dishes right to your doorstep. Our
        mission is to make quality meals accessible to everyone, no matter where
        you are or what you’re in the mood for.
      </p>
      <p className="about-us-paragraph">
        We partner with the best local restaurants, bringing you a diverse range
        of cuisines, from comfort food to gourmet experiences. With just a few
        taps, you can explore menus, discover new flavors, and enjoy fresh,
        delicious meals without leaving your home.
      </p>
      <p className="about-us-paragraph">
        Our commitment goes beyond convenience; we strive for excellence in
        every delivery. From our user-friendly app to our prompt and friendly
        delivery service, we prioritize your satisfaction every step of the way.
        Whether it’s lunch on a busy workday or a late-night snack,{" "}
        <strong className="app-name">MealMate</strong> is your trusted companion
        for satisfying your cravings.
      </p>
      <p className="about-us-paragraph">
        Join our community of food lovers and experience the joy of eating,
        delivered.
      </p>
      <h1 className="about-us-heading underline text-red-800">Our Team</h1>
      <User />
    </div>
  );
};

export default About;

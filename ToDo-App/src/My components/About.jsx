import React from 'react';

const SectionStyle = {
    margin: '15px 30px',
  };

  

const About = () => {
  return (
    <>
      <h2 style={SectionStyle}><strong>About Us</strong></h2>

      <div style={SectionStyle}>
        <h4>Hello User</h4>
        <p>Welcome to our Todo App, the easiest way to manage your tasks effortlessly!</p>
      </div>

      <div style={SectionStyle}>
        <h4><u>About the Developer</u></h4>
        <p>
          I'm Arshad Khan, currently pursuing my Bachelor's in Technology (BTech) at Siddaganga Institute of Technology, Tumkur.
          I developed Todo App to simplify task management and enhance your daily routine.
        </p>
      </div>

      <div style={SectionStyle}>
        <h4><u>Features</u></h4>
        <ul>
          <li>
            <b><u>Add Tasks</u> :</b>  Just type your task and click "Add." Your tasks instantly appear on the list.
          </li>
          <br />
          <li>
            <b><u>Delete Tasks</u> :</b>  Finished a task? Hit the delete icon, and it's gone!
          </li>
        </ul>
      </div>

      <div style={SectionStyle}>
        <h4><u>How to Use</u></h4>
        <ul>
          <li>
            <b><u>Adding Tasks</u> :</b>  Type your task, click "Add" or press "Enter."
          </li>
          <br />
          <li>
            <b><u>Delete Tasks</u> :</b>  Click the delete icon next to a task, confirm, and it's deleted.
          </li>
        </ul>
      </div>

      <div style={SectionStyle}>
        <h4><u>Why Todo App</u></h4>
        <ul>
          <li>
            <b><u>Simple</u> :</b>   No complications, just a clean design.
          </li>
          <br />
          <li>
            <b><u>Quick</u> :</b>  Add or delete tasks with just a click.
          </li>
          <br />
          <li>
            <b><u>User-Friendly</u> :</b>   Easy for everyone to use
          </li>
        </ul>
      </div>

      <div style={SectionStyle}>
        <h4><u>Need Help?</u></h4>
        <p>Got questions or suggestions? Email me at <b>arshad.feedback@gmail.com</b></p>
        <p>Thank you for choosing Todo App!</p>
      </div>
    </>
  );
};

export default About;

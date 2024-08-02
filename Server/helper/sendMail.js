import nodemailer from "nodemailer";

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Replace with your SMTP server
  secure: true, // true for 465, false for other ports
  auth: {
    user: "rawalsumit69@gmail.com", // Your email
    pass: "", // Your email password
  },
});

// Email sending function
const sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: "rawalsumit69gmail.com", // Sender address
    to, // List of receivers
    subject, // Subject line
    text, // Plain text body
    html, // HTML body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email could not be sent");
  }
};

export default sendEmail;

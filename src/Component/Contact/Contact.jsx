import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r2pfb7d', 'template_kjm4mo4', form.current, 'xf7oG-XpwmIFyNKiB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/BjymyCH/oswald-elsaboath-ym-EI-DTS1g-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold salsa">Contact</h1>
          </div>
        </div>
      </div>
    <div>
    <div className="mt-6 space-y-4">
        <h2 className="text-blue-500">WRITE A LINE</h2>
        <h2 className="salsa text-5xl">Get in Touch</h2>
        <p>We at LONG BEACH HOTEL are always here to assist you. Whether you have a query about your upcoming stay, need more information about our services, or simply want to share your experiences, our dedicated team is ready to help. </p>
      </div>
      <div className='mt-6 space-y-4'>
      <form ref={form} onSubmit={sendEmail}>
         <div>
         <label>Your Name</label>
          <input
            type="text"
            className=" w-full input border-blue-500"
            placeholder="Your Name"
            name="user_name"
            required
          />
         </div>
          <label>Your Email</label>
          <div>
          <input
            type="email"
            className="  w-full input border-blue-500"
            placeholder="Your Email"
            name="user_email"
            required
          />
          </div>
        <div>
        <label>Message</label> <br />
          <textarea
            className="w-full textarea border-blue-500 p-1  rounded-sm   mt-2"
            name="message"
            id=""
            cols="30"
            placeholder="Your Message"
            rows="2"
            required
          ></textarea>
        </div>
         <div className="flex items-center justify-center mt-2">
         <input type="submit" className="btn bg-blue-500 w-full  text-white hover:bg-blue-500 text-white" value="Send" />
         </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;

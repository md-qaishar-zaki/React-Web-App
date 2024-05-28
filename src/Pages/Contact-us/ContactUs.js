import React,{useState} from 'react';
import './Contact.css'

export default function ContactUs() {
  
  const [firstName, setFirstName] = useState('Shaik');
  const [lastName, setLastName] = useState('Maqsood');
  const [place, setPlace] = useState('India');
  const [profession, setProfession] = useState('Web Developer');
  const [company, setCompany] = useState('Capgemini');
  const [message, setMessage] = useState('Today I am making this Pen to show you a cool way to make a Contact page which looks like a Hand written Letter. You can go ahead and change the contents in the Text boxes to change the content in the Letter. How did I do it? React.');
  const [email, setEmail] = useState('shaikmaqsood001@gmail.com');

  return (
    <>
      <div className="container" style={{ paddingTop: "20px" }}>
        <div className='row'>
          <div className='col-md-6'>
            <div className="form-section topgap">
              <center style={{ fontFamily: 'Lobster, cursive' }}>
                <h1>Contact Me</h1>
              </center>

              <table className='w-100'>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="firstName">First Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Please Enter your First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </td>
                    <td>
                      <label htmlFor="lastName">Last Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Please Enter your Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="email">Email ID:</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Please enter your Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </td>
                    <td>
                      <label htmlFor="place">Country:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter your Country"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="company">Company:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter your Company Name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                      />
                    </td>
                    <td>
                      <label htmlFor="profession">Profession:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter your Profession"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <label htmlFor="message">Message:</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type="button" className="btn btn-danger btn-block buttonSubmit">
                WHAT DOES THIS BUTTON DO??
              </button>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="letter-section">
              <div className="paper">
                <div className="lines">
                  <div className="Lettertext" spellCheck="false">
                    Hello Curious Cat, <br />
                    <br />
                    This is {firstName + ' ' + lastName}. I am from {place}. <br />
                    <br />
                    I am a {profession}, working in {company}. <br />
                    <br />
                    {message}
                    <br />
                    <br />
                    Like my Work? Share your Love, gimme a heart &#9829;&#9829;&#9829; <br />
                    You can reach me back on {email}.
                    <br />
                    <br />
                    Thanks and Regards,
                    <br />
                    {firstName + ' ' + lastName}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

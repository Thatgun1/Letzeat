import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";

class ContactPage extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message"
  };
  render() {
    return (
      <div className="Contact-page">
        <header style={{ backgroundColor: "#282c34" }}>
          <Navbar />
        </header>
        <h1 className="About-heading">.</h1>

        <form
          className="contact-form"
          style={{marginTop: "200px"}}
          onSubmit={e => this.formSubmit(e)}
        >
          <label
            class="message-name"
            style={{ color: "white" }}
            htmlFor="message-name"
          >
            Your Name
          </label>
          <input
            onChange={e => this.setState({ name: e.target.value })}
            name="name"
            class="message-name"
            type="text"
            placeholder="Your Name"
            value={this.state.name}
          />

          <label
            class="message-email"
            style={{ color: "white" }}
            htmlFor="message-email"
          >
            Your Email
          </label>
          <input
            onChange={e => this.setState({ email: e.target.value })}
            name="email"
            class="message-email"
            type="email"
            placeholder="your@email.com"
            required
            value={this.state.email}
          />

          <label
            class="message"
            style={{ color: "white" }}
            htmlFor="message-input"
          >
            Your Message
          </label>
          <textarea
            onChange={e => this.setState({ message: e.target.value })}
            name="message"
            class="message-input"
            type="text"
            placeholder="Please write your message here"
            value={this.state.message}
            required
          />
          <br></br>
          <div className="button--container">
            <button type="submit" className="button button-primary">
              {this.state.buttonText}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactPage;

import React, { Component } from 'react';
import { render } from "react-dom";
import Modal from "react-responsive-modal";

import Recaptcha from '../../components/headerComponent/recaptcha';

const styles = {
  textAlign: "left"
};

class Popup extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


  render() {
    const { open } = this.state;
    return (
      <div>
        <a className="popup" onClick={this.onOpenModal}>Get Quote</a>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Hire Me Today!</h2>
          <form action="index.html" method="post">

            <fieldset>
              <label for="name">Name*</label>
              <input type="text" rows="1" id="name" name="user_name" required />

              <label for="mail">Email*</label>
              <input type="email" rows="1" id="mail" name="user_email" required />

              <label for="phone">Phone*</label>
              <input type="number" rows="1" id="number" name="user_phone" />

              <label for="message">Message(optional)</label>
              <textarea type="text" rows="5" id="number" name="user_phone"></textarea>

              <div><Recaptcha /></div>
            </fieldset>
            <button type="submit">SEND</button>
          </form>
        </Modal>
        </div>
    );
  }
}

export default Popup;

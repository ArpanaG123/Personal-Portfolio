import React from "react";
import "./Style.css";

const Contact = () => {
  return (
    <div className="okiee">
      <div class="section5">
        <div id="lin">What People say about me</div>
        <div id="line4"></div>
        <div className="newBox">
          <div>
            <img
              src="./Img/testimonial-img1@2x.png"
              alt=""
              className="contImg1"
            />
          </div>
          <div className="comp1">Elizabeth Martin</div>
          <div className="par12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="connection1">SaveSpace Inc.</div>
        </div>

        <div class="section6">
          <div class="lastHd">Contact Me</div>
          <div class="line6"></div>
          <div class="blok">
            <div class="blok1">
              <div id="d1">Let's connect</div>
              <div id="d2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dict..
              </div>
              <img src = './Img/Snip20220625_1.png' alt = ''  className="d3"/>
              <div id="d4">kashyaparpana203@gmail.com</div>
              <img src = './Img/Phone (1)@2x.png' alt = ''  className="d5"/>
              <div id="d6">7223030624</div>
              <img src = './Img/marker@2x.png' alt = ''  className="d7"/>
              <div id="d8">Rajvihar Apartment F-14,sonagiri,piplani,Bhopal-462022</div>
            </div>
            <div class="blok2">
              <div id="bk1">Send me a message</div>
              <form>
                <label id="bk2">
                  First & Last Name <span id="star1">*</span>
                </label>
                <br />
                <input id="bk3" type="text" name="name" value=" " />
                <label id="bk4">
                  Phone number <span id="star1">*</span>
                </label>
                <br />
                <input id="bk5" type="number" name="number" value=" " />
                <label id="bk6">
                  Email address <span id="star1">*</span>
                </label>
                <br />
                <input id="bk7" type="email" name="email" value=" " />
                <label id="bk8">
                  Message <span id="star1">*</span>
                </label>
                <br />
                <input
                  id="bk9"
                  type="textarea"
                  name="texts"
                  placeholder="Your message here..."
                />
                <button id="bk10">Send Message</button>
              </form>
            </div>
            <div id="lastB">© 2021 Arpana kashyap. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

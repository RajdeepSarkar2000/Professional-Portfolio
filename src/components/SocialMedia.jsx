import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href=" https://twitter.com/Rajdeeprvd">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href=" https://github.com/RajdeepSarkar2000 ">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/sarkarraj2000/">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/rajdeep-sarkar-633648211/">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;


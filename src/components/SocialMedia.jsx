import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <BsGithub />
    </div>
    <div>
      <BsInstagram />
    </div>
    <div>
      <BsLinkedin />
    </div>
  </div>
);

export default SocialMedia;

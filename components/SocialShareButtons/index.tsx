import { ReactNode } from 'react';
import { Facebook, Link, Linkedin, Twitter } from 'react-feather';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share';

const SocialIcon = ({ children }: { children: ReactNode }) => (
  <div className="rounded-lg border border-gray-300 p-3 shadow-sm shadow-blue-900/5 hover:border-gray-400">
    {children}
  </div>
);

const SocialShareButtons = ({ title, url }: { title: string; url: string }) => (
  <div className="flex gap-3">
    <button onClick={() => navigator.clipboard.writeText(url)}>
      <SocialIcon>
        <Link height={20} width={20} />
      </SocialIcon>
    </button>
    <TwitterShareButton url={url} title={title}>
      <SocialIcon>
        <Twitter height={20} width={20} />
      </SocialIcon>
    </TwitterShareButton>
    <FacebookShareButton url={url}>
      <SocialIcon>
        <Facebook height={20} width={20} />
      </SocialIcon>
    </FacebookShareButton>
    <LinkedinShareButton url={url} title={title}>
      <SocialIcon>
        <Linkedin height={20} width={20} />
      </SocialIcon>
    </LinkedinShareButton>
  </div>
);

export default SocialShareButtons;

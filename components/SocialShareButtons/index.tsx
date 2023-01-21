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

export const CopyToClipboardButton = ({ url }: { url: string }) => (
  <button onClick={() => navigator.clipboard.writeText(url)}>
    <SocialIcon>
      <Link height={20} width={20} />
    </SocialIcon>
  </button>
);

export const ShareOnTwitterButton = ({
  url,
  title
}: {
  url: string;
  title: string;
}) => (
  <TwitterShareButton url={url} title={title}>
    <SocialIcon>
      <Twitter height={20} width={20} />
    </SocialIcon>
  </TwitterShareButton>
);

export const ShareOnFacebookButton = ({ url }: { url: string }) => (
  <FacebookShareButton url={url}>
    <SocialIcon>
      <Facebook height={20} width={20} />
    </SocialIcon>
  </FacebookShareButton>
);

export const ShareOnLinkedInButton = ({
  url,
  title
}: {
  url: string;
  title: string;
}) => (
  <LinkedinShareButton url={url} title={title}>
    <SocialIcon>
      <Linkedin height={20} width={20} />
    </SocialIcon>
  </LinkedinShareButton>
);

const SocialShareButtons = ({ title, url }: { title: string; url: string }) => (
  <div className="flex gap-3">
    <CopyToClipboardButton url={url} />
    <ShareOnTwitterButton url={url} title={title} />
    <ShareOnFacebookButton url={url} />
    <ShareOnLinkedInButton url={url} title={title} />
  </div>
);

export default SocialShareButtons;

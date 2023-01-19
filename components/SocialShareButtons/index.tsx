import Image from 'next/image';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share';

const SocialIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-lg border border-gray-300 p-3 shadow-sm shadow-blue-900/5 hover:border-gray-400">
    <Image className="saturate-0" width={20} height={20} src={src} alt={alt} />
  </div>
);

const SocialShareButtons = ({ title, url }: { title: string; url: string }) => (
  <div className="flex gap-3">
    <button onClick={() => navigator.clipboard.writeText(url)}>
      <SocialIcon
        src="/illustrations/link.svg"
        alt="copy-to-clipboard-button"
      />
    </button>
    <TwitterShareButton url={url} title={title}>
      <SocialIcon src="/illustrations/twitter.svg" alt="twitter-share-button" />
    </TwitterShareButton>
    <FacebookShareButton url={url}>
      <SocialIcon
        src="/illustrations/facebook.svg"
        alt="facebook-share-button"
      />
    </FacebookShareButton>
    <LinkedinShareButton url={url} title={title}>
      <SocialIcon
        src="/illustrations/linkedin.svg"
        alt="twitter-share-button"
      />
    </LinkedinShareButton>
  </div>
);

export default SocialShareButtons;

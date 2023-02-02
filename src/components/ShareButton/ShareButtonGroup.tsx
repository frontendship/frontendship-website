import {
  CopyToClipboardButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from './ShareButton';

const ShareButtonGroup = ({ title, url }: { title: string; url: string }) => (
  <div className="flex gap-3">
    <CopyToClipboardButton url={url} />
    <TwitterShareButton title={title} url={url} />
    <FacebookShareButton url={url} />
    <LinkedinShareButton url={url} />
  </div>
);

export default ShareButtonGroup;

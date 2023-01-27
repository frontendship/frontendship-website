import { MouseEventHandler, ReactNode } from 'react';
import { Facebook, Link, Linkedin, Twitter } from 'react-feather';

import IconButton from '../IconButton/IconButton';

const openShareDialog = (targetUrl: URL | string) => {
  window.open(targetUrl, '_blank', 'location=yes,width=600,height=600');
};

const ShareButton = ({
  children,
  onClick
}: {
  children: ReactNode;
  onClick: MouseEventHandler;
}) => (
  <IconButton variant="bordered" padding="lg" onClick={onClick}>
    {children}
  </IconButton>
);

export const TwitterShareButton = ({
  title,
  url
}: {
  title: string;
  url: string;
}) => {
  const targetUrl = new URL('https://twitter.com/intent/tweet');
  targetUrl.searchParams.set('url', url);
  targetUrl.searchParams.set('text', title);

  return (
    <ShareButton onClick={() => openShareDialog(targetUrl)}>
      <Twitter height={20} width={20} />
    </ShareButton>
  );
};

export const FacebookShareButton = ({ url }: { url: string }) => {
  const targetUrl = new URL('https://www.facebook.com/sharer/sharer.php');
  targetUrl.searchParams.set('u', url);

  return (
    <ShareButton onClick={() => openShareDialog(targetUrl)}>
      <Facebook height={20} width={20} />
    </ShareButton>
  );
};

export const LinkedinShareButton = ({ url }: { url: string }) => {
  const targetUrl = new URL('https://www.linkedin.com/sharing/share-offsite');
  targetUrl.searchParams.set('url', url);

  return (
    <ShareButton onClick={() => openShareDialog(targetUrl)}>
      <Linkedin height={20} width={20} />
    </ShareButton>
  );
};

export const CopyToClipboardButton = ({ url }: { url: string }) => {
  const copyToClipboard = () => navigator.clipboard.writeText(url);

  return (
    <ShareButton onClick={copyToClipboard}>
      <Link height={20} width={20} />
    </ShareButton>
  );
};

export default ShareButton;

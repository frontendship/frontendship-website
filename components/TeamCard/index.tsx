import Image from 'next/image';
import { ReactNode } from 'react';
import { GitHub, Linkedin, Twitter } from 'react-feather';

const TeamCard = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const TeamCardImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image
      className="h-[280px] w-full object-cover xl:h-[296px]"
      src={src}
      alt={alt}
    />
  );
};

const TeamCardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <p className="mt-7 text-lg font-semibold leading-7 text-gray-900 md:text-xl">
      {children}
    </p>
  );
};
const TeamCardSubTitle = ({ children }: { children: ReactNode }) => {
  return (
    <p className="mt-1 text-base font-normal leading-7 text-violet-700 md:text-lg">
      {children}
    </p>
  );
};
const TeamCardDescription = ({ children }: { children: ReactNode }) => {
  return (
    <p className="mt-4 text-base font-normal leading-6 text-gray-500">
      {children}
    </p>
  );
};

interface ISocialLinks {
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const TeamCardSocial = ({ socialLinks }: ISocialLinks) => {
  return (
    <div className="mt-6 flex gap-5">
      <a href={socialLinks.twitter} target={'_blank'} rel="noreferrer">
        <Twitter color="gray" />
      </a>
      <a href={socialLinks.linkedin} target={'_blank'} rel="noreferrer">
        <Linkedin color="gray" />
      </a>
      <a href={socialLinks.github} target={'_blank'} rel="noreferrer">
        <GitHub color="gray" />
      </a>
    </div>
  );
};

TeamCard.Image = TeamCardImage;
TeamCard.Title = TeamCardTitle;
TeamCard.SubTitle = TeamCardSubTitle;
TeamCard.Description = TeamCardDescription;
TeamCard.Social = TeamCardSocial;

export default TeamCard;

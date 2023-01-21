import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { GitHub, Linkedin, Twitter } from 'react-feather';

const TeamCard = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const TeamCardImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative h-[280px] w-full xl:h-[296px]">
      <Image
        loader={() => src}
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
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
    twitter: string;
    linkedin: string;
    github: string;
  };
}

const TeamCardSocial = ({ socialLinks }: ISocialLinks) => {
  return (
    <div className="mt-6 flex gap-5">
      <Link href={socialLinks.twitter} target={'_blank'}>
        <Twitter size={24} color="#98A2B3" />
      </Link>
      <Link href={socialLinks.linkedin} target={'_blank'}>
        <Linkedin size={24} color="#98A2B3" />
      </Link>
      <Link href={socialLinks.github} target={'_blank'}>
        <GitHub size={24} color="#98A2B3" />
      </Link>
    </div>
  );
};

TeamCard.Image = TeamCardImage;
TeamCard.Title = TeamCardTitle;
TeamCard.SubTitle = TeamCardSubTitle;
TeamCard.Description = TeamCardDescription;
TeamCard.Social = TeamCardSocial;

export default TeamCard;

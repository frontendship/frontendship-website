import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FooterSectionItems } from '@/components/FooterSection/FooterSection.items';

import facebookIcon from '../../public/illustrations/footer/facebookIcon.svg';
import githubIcon from '../../public/illustrations/footer/githubIcon.svg';
import linkedinIcon from '../../public/illustrations/footer/linkedinIcon.svg';
import twitterIcon from '../../public/illustrations/footer/twitterIcon.svg';

const FooterSection: React.FC = () => {
  const currDate = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="flex flex-col divide-y-2 px-4 md:px-28">
      <div className="basis-5/6 md:flex md:justify-between  ">
        <div className="mt-12 md:mt-16">
          <div className="flex flex-row items-center gap-x-2 pb-6 ">
            <span>logo</span>
            <span className="text-xl text-gray-900  ">Untitled UI</span>
          </div>
          <p className="text-gray-500 md:hidden">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        <div className="pt-12 md:pt-16">
          <div className="mb-12 grid grid-cols-2 grid-rows-1 gap-8 md:grid-cols-3 md:gap-48">
            {FooterSectionItems.map((items, index) => (
              <div key={index}>
                <span className="text-sm text-gray-400">{items.header}</span>
                <ul>
                  {items.content.map((item, index) => (
                    <li
                      className="mt-3 text-base font-semibold text-gray-500 first:mt-4 "
                      key={index}
                    >
                      <Link href={'/' + item}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="basis-1/6">
        <div className="flex flex-col gap-y-6 pt-8 pb-12 md:flex-row-reverse md:justify-between">
          <div className="flex gap-x-6 ">
            <button>
              <span>
                <twitterIcon />
              </span>
            </button>
            <button>
              <span>
                <Image src={linkedinIcon} alt="linkedinIcon" />
              </span>
            </button>
            <button>
              <span>
                <Image src={facebookIcon} alt="facebookIcon" />
              </span>
            </button>
            <button>
              <span>
                <Image src={githubIcon} alt="githubIcon" />
              </span>
            </button>
          </div>
          <div>
            <span className="text-gray-400">
              © {currDate()} Untitled UI. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

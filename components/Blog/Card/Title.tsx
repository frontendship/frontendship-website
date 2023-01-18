import Image from 'next/image';
import Link, { LinkProps } from 'next/link';

interface Props {
   link: LinkProps;
   children: React.ReactNode;
}

const Title = ({ children, link }: Props) => {
   return (
      <div className="flex items-center justify-between">
         <h3 className="text-2xl font-semibold text-gray-900">{children}</h3>
         <Link {...link}>
            <Image
               width={10}
               height={10}
               src="/icons/arrow-up-right.svg"
               alt="read more"
            />
         </Link>
      </div>
   );
};

export default Title;

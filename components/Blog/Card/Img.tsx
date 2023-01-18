import Image, { ImageProps } from 'next/image';

interface Props extends ImageProps { }

const Img = ({ ...props }: Props) => {
   return <Image {...props} />;
};

export default Img;

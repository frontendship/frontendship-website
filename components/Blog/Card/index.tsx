import Description from '@/components/Blog/Card/Description';
import Img from '@/components/Blog/Card/Img';
import Info from '@/components/Blog/Card/Info';
import Title from '@/components/Blog/Card/Title';

interface Props {
   children: React.ReactNode;
}

// TODO: Add Card Labels
// INFO: Sizes will be adjusted by the parent component

/**
 * @example
 *    <Card>
 *      <Card.Image src="https://picsum.photos/200/300" alt="Image" />
 *      <Card.Info link={{Link Props}} >{['isim', 'tarih']}</Card.Info>
 *      <Card.Title>Card Title</Card.Title>
 *      <Card.Description>
 *          Lorem ipsum dolor sit amet consectetur adipisicing elit.
 *     </Card.Description>
 *     <Card.Labels></Card.Labels>
 *   </Card>
 *  */

const Card = ({ children }: Props) => {
   return <article className="flex flex-col gap-3">{children}</article>;
};

Card.Image = Img;
Card.Info = Info;
Card.Title = Title;
Card.Description = Description;

export default Card;

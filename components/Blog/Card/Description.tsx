interface Props {
   children: React.ReactNode;
}

const Description = ({ children }: Props) => {
   return <p className="text-gray-500">{children}</p>;
};

export default Description;

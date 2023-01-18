interface Props {
   children: React.ReactNode & {
      [index: number]: string;
   };
}

const Info = ({ children }: Props) => {
   return (
      <div className="text-sm font-semibold text-indigo-700">
         <span>{children[0]}</span>
         <span className="mx-1">•</span>
         <span>{children[1]}</span>
      </div>
   );
};
export default Info;

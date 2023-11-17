const ThemeCard: React.FC = () => {
   return (
      <div className="flex flex-col border border-primary-200 rounded-2xl h-[400px]">
         <div className="relative rounded-t-2xl bg-[url('/images/tema-undangan1.jpg')] h-full w-full bg-no-repeat bg-cover">
            <span className="absolute label__green--sm top-4 right-4">Starter</span>
            <span className="absolute label__white--sm bottom-4 left-4">Traditional minang</span>
         </div>
         <div className="flex gap-x-4 p-4">
            <button className=" btn__tertiary--small flex-1">Detail</button>
            <button className=" btn__secondary--small flex-1">Preview</button>
         </div>
      </div>
   );
};

export default ThemeCard;

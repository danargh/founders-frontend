import { LinkButton } from "./Button";
import { button } from "@/app/variants";

const ThemeCard: React.FC = () => {
   return (
      <div className="flex flex-col border border-primary-200 rounded-2xl h-[400px]">
         <div className="relative rounded-t-2xl bg-[url('/images/tema-undangan1.jpg')] h-full w-full bg-no-repeat bg-cover">
            <span className="absolute label__green--sm top-4 right-4">Starter</span>
            <span className="absolute label__white--sm bottom-4 left-4">Traditional minang</span>
         </div>
         <div className="flex gap-x-4 p-4">
            <LinkButton urlLocation="#" className={`flex-1 ${button({ tertiary: "gray", size: { initial: "mb_md", md: "sm" } })} gap-x-2 order-1 md:order-2`}>
               Detail
            </LinkButton>
            <LinkButton urlLocation="#" className={`flex-1 ${button({ secondary: "gray", size: { initial: "mb_md", md: "sm" } })} gap-x-2 order-1 md:order-2`}>
               Preview
            </LinkButton>
         </div>
      </div>
   );
};

export default ThemeCard;

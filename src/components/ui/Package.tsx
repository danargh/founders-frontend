import { OneStar, TwoStar, ThreeStar } from "@/assets/icons/icons";

export const StarterPackage: React.FC = () => {
   return (
      <div className="flex flex-col gap-y-1 items-center">
         <OneStar width="20" height="30" color="#2E4210" />
         <span className="text-heading-sm text-mossGreenSecondary-900">Starter</span>
      </div>
   );
};
export const PremiumPackage: React.FC = () => {
   return (
      <div className="flex flex-col gap-y-1 items-center">
         <TwoStar width="48" height="30" color="#701608" />
         <span className="text-heading-sm text-orangeDarkSecondary-900">Premium</span>
      </div>
   );
};
export const EksklusifPackage: React.FC = () => {
   return (
      <div className="flex flex-col gap-y-1 items-center">
         <ThreeStar width="77" height="30" color="#2B0C66" />
         <span className="text-heading-sm text-violetSecondary-900">Eksklusif</span>
      </div>
   );
};

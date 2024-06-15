import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

type PropsTab = {
   content: JSX.Element;
   activeTab: number;
   className?: string;
};

export default function TabContent({ content, activeTab, className }: PropsTab) {
   return (
      <div>
         <TransitionGroup>{content}</TransitionGroup>
      </div>
   );
}

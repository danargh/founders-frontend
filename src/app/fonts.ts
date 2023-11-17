import { Lora, Plus_Jakarta_Sans } from "next/font/google";

const lora = Lora({ subsets: ["latin"], display: "swap", variable: "--font-lora" });
const PlusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-plus-jakarta-sans" });

export { lora, PlusJakartaSans };

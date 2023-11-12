type TestimoniArrayObject = TestimoniObject[];

type TestimoniObject = {
   imgMale: string;
   imgFemale: string;
   nameMale: string;
   nameFemale: string;
   date: string;
   quote: string;
   star: number;
};

const testimoniData: TestimoniObject[] = [
   {
      imgMale: "/images/undangan-preview1.jpg",
      imgFemale: "/images/undangan-preview1.jpg",
      nameMale: "Nanami",
      nameFemale: "Izah",
      date: "Selasa, 31 Oktober 2023",
      quote: "Terimakasih buat Polokrami telah membuatkan undangan pernikahan kita. Bagus banget hasilnya, suka.",
      star: 5,
   },
];

console.log(typeof testimoniData);

interface Order {
   id: string;
   customer: string;
   items: string[];
   total: number;
}

const orders: Order[] = [
   {
      id: "1",
      customer: "John Smith",
      items: ["Item 1", "Item 2"],
      total: 29.99,
   },
   { id: "2", customer: "Jane Doe", items: ["Item 3", "Item 4"], total: 39.99 },
   {
      id: "3",
      customer: "Bob Johnson",
      items: ["Item 5", "Item 6"],
      total: 49.99,
   },
];

console.log(typeof orders);

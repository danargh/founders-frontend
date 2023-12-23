const utcConverter = (date: string) => {
   const utcDate = new Date(date);
   return utcDate.toLocaleString();
};

console.log(utcConverter("2023-12-22T03:53:10.489Z"));

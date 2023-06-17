import { printPartition } from "../@utils";

export function printTitle(title: string) {
  const titleLength = 78;
  const halfPadding = Math.floor((titleLength - title.length) / 2);
  const padTitle = title
    .padStart(halfPadding + title.length)
    .padEnd(titleLength);

  printPartition();
  console.log(
    `*                                                                              *\n` +
      `*${padTitle}*\n` +
      `*                                                                              *`
  );
  printPartition();
}

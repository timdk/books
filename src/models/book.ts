export default interface Book {
  isbn: string;
  olid: string;
  title: string;
  authors: string[];
  description: string;
  genres?: string[];
}
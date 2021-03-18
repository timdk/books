export default interface Book {
  isbn: string;
  title: string;
  authors: string[];
  description: string;
  genres?: string[];
}
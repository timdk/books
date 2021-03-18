import { writable, derived } from 'svelte/store';

import type Book from '../models/book';
import bookData from '../../data/data.json';

export const filterValue = writable('');

export const filteredBooks = derived(
  filterValue,
  ($filterValue: string) => {
    if (!$filterValue) {
      return bookData;
    }

    const valueNormalised = $filterValue.toLowerCase();
    return bookData.filter((book: Book) => Object.values(book).some((value) => value.toString().toLowerCase().includes(valueNormalised)))
  }
);
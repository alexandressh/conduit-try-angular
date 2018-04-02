import { Tag } from './tag';

export class Article {
    name: string;
    summary: string;
    content: string;
    author: string;
    date: Date;
    tags: Array<Tag>;
};

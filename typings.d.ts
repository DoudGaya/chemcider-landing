
type Base = {
    _type: string;
    _di: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
}

interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string
}


interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

interface Image {
    _ref: string
    asset: Reference
}


interface Reference {
    _ref: string
    _type: 'reference';
}

interface Slug {
    _type: 'slug';
    current: string;
}

interface Block {
    _key: string
    _type: 'block';
    childre: Span[];
    markDefs: any;
    style: 'normal'| 'h1' | 'h2' | 'h30' | 'h4' | 'blockquote';
}

interface Span {
    _key: string;
    _type: 'span';
    marks: string[]
    text: string;
}


interface Category extends Base {
    description: string;
    title: string;
}


interface MainImage {
    _type: 'image';
    asset: Reference;
}

interface Title {
    _type: string;
    current: string;
}


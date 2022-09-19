export class Post {
    /* constructor( id: number,
        category_name: string,
        name: string,
        title: string,
        blog_content: string,
        publishdate: string,
        short_desc: string,
        link_url: string,
        image: string
    ) {
        this.id            = id;
        this.category_name = category_name;
        this.name          = name;
        this.title         = title;
        this.blog_content  = blog_content;
        this.publishdate   = publishdate;
        this.short_desc    = short_desc;
        this.link_url      = link_url;
        this.image         = image;
    } */
    id: number;
    category_name: string;
    name: string;
    title: string;
    blog_content?: string;
    publishdate: string;
    short_desc?: string;
    link_url: string;
    image: string;
}

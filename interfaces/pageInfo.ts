
export interface Blog {
    blog_Title: string;
    blog_Body: string;
}

export interface BlogContent {
    results: Blog[];
}

export interface PageInfo {
    blogContent: BlogContent;
}


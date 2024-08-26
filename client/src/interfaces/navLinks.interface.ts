interface SubLink {
    label: string;
    url: string;
}

export interface Links {
    label: string,
    url: string,
    icon?: string,
    subItems?: SubLink[]
}
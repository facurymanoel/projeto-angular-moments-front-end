import { StringifyOptions } from "querystring";

export interface Moment{
    id?: number,
    title: string,
    description: string,
    image: string,
    created_at?: String,
    updated_at?: string,
    comments?: [{text: string, username: string}],
}
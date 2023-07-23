export interface CatInterface {
    retcode: number
    message: string
    data: {
        list: CatData[]
    }
}

export interface CatData {
    "post_id": string,
    "subject": string,
    "banner": string,
    "official_type": number
}

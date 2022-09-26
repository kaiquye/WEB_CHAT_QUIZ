export interface MessageEntity {
    id?: string
    input:string
    output: string
    createdAt?: Date | null
    updateAt?: Date | null
    user_id:  string
}
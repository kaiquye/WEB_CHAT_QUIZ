export interface MessageEntity {
    id?: number
    input:string
    output: string
    createdAt?: Date | null
    updateAt?: Date | null
    user_id:  string
}
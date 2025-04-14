export type FieldType = 'HEADING' | 'PARAGRAPH' | 'IMAGE'
export interface Field {
    id: number
    type: FieldType
    content: string
    description?: string
}
export interface FormField {
    value: string;
    id: number;
    hotel_id: number;
    source_type: number;
    source_id: number;


    /*
        * 0 - None
        * 1 - Text
        * 2 - Text Area
        * 3 - DatePicker
        * 4 - DateTimePicker
        * 5 - Boolean
    */
    field_type: 0 | 1 | 2 | 3 | 4 | 5;
    field_caption: string;
    is_required: boolean;
    created_at: string;
    updated_at: string;
}

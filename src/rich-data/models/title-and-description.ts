// TitleAndDescription : Title and description bilgileri
export interface TitleAndDescription {
    id: number;
    menu_item_id: number;
    title: string;
    description: string;
    select_values: string;
    reason_values: string;
    closing_values: string;
    date_required: boolean;
    image_url: string;
    image_name: string;
    hotel_id: number;
    task_type_id: number;
}

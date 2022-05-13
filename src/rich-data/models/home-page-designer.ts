export interface HomePageDesigner {
    id: number;
    hotel_id: number;
    type: 'internal' | 'external';
    priority: number;
    menu_section_id: number;
    menu_item_id: number;
    image_url: string;
    title: string;
    url: string;
    created_at: Date;
    updated_at: Date;
}

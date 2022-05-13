import {PromotionLine} from "./promotion-line";

export interface PromotionHeader {
    id: number;
    hotel_id: number;
    menu_section_id: number;
    menu_category_id: number;
    menu_item_id: number;
    name: string;
    active: boolean;
    start_date: string;
    end_date: string;
    promotion_code: string;
    promotion_code_limit: number;
    used_promotion_code: number;
    promotion_defs: PromotionLine[];
    promotions: PromotionLine[];
}

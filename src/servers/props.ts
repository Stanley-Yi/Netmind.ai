export interface AllServiceProps {
    XYZ_service_lambda_url: string;
    XYZ_service_name: string;
    XYZ_service_product_url: string;
    company_id: string;
    company_logo_url: string;
    created_at: string;
    description: string;
    id: string;
    owner_user_id: string;
    service_api_meta_data: string;
    tags: string[];
    updated_at: string;
    visibility: string;
    xyz_page_image_url: string;
}

export interface SingleServiceProps {
    XYZ_service_lambda_url: string;
    XYZ_service_name: string;
    XYZ_service_product_url: string;
    company_id: string;
    created_at: string;
    description: string;
    id: string;
    owner_user_id: string;
    service_api_meta_data: string;
    tags: string[];
    updated_at: string;
    visibility: string;
    xyz_page_image_url: string;
}

export interface AllCompanyProps {
    companyLogoUrl: string;
    companyName: string;
    createdAt: string;
    description: string;
    id: string;
    labels: string[];
    updatedAt: string;
}
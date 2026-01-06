export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessType: 'restaurant' | 'market' | 'other';
  message: string;
  requestDemo: boolean;
}

export interface NavItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  category: 'Game' | 'Tool' | 'Other';
  color: string;
  tags: string[];
}

export interface Quote {
  text: string;
  author: string;
}

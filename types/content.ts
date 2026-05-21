import type { LucideIcon } from "lucide-react";

export type Metric = {
  label: string;
  value: number;
  suffix?: string;
};

export type CardItem = {
  title: string;
  description: string;
};

export type ServiceItem = CardItem & {
  tag: string;
};

export type Warehouse = {
  city: string;
  address: string;
  manager: string;
  hours: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Review = {
  name: string;
  city: string;
  text: string;
  channel: string;
};

export type AdminModule = {
  title: string;
  description: string;
  icon: LucideIcon;
};

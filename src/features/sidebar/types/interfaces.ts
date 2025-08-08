import { ListItem } from "./enums";

export interface Item {
  title: ListItem;
  url: string;
  icon: React.ReactNode;
}

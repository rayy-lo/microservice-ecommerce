import { Collection, Product } from "@prisma/client";

export type DataObject = {
  status: number;
  data?: Collection | Product | null;
  message?: string;
  success: boolean;
};

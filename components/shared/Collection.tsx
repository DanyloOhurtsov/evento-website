import { IEvent } from "@/lib/database/models/event.model";
import React from "react";

type CollectionProps = {
  data: IEvent[];

  emtyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType: "Events_Organized" | "My_Tickets" | "All_Events";
};

const Collection = ({
  data,

  emtyTitle,
  emptyStateSubtext,
  collectionType,
  limit,
  page,
  totalPages,
}: CollectionProps) => {
  return <div>Collection</div>;
};

export default Collection;

import { BundleTag, FeedTag } from ".prisma/client";
import { Dispatch, SetStateAction } from "react";
import {
  ActionType,
  BadgeFieldName,
  BundleObject,
  FeedObject,
} from "../utils/types";

export const OneBadge = ({
  item,
  action,
  currentItem,
  fieldName,
  setItem,
}: {
  item: FeedTag | BundleTag | FeedObject;
  action: ActionType;
  currentItem?: FeedObject | BundleObject;
  fieldName: BadgeFieldName;
  setItem?: Dispatch<SetStateAction<FeedObject | BundleObject>>;
}) => {
  const color =
    fieldName === BadgeFieldName.tags
      ? "blue"
      : fieldName === BadgeFieldName.feeds
      ? "green"
      : "purple";
  return (
    <div className="inline-block align-middle">
      <span
        className={`flex justify-center text-sm py-2 px-2 rounded-lg bg-${color}-200`}
      >
        <p className={`text-xs text-${color}-600 text-center`}>{item.name}</p>
      </span>
    </div>
  );
};

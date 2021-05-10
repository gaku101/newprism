import { Dispatch, SetStateAction } from "react";
import { BundleObject, FeedObject } from "../utils/types";

export const GenerateInputField = ({
  currentItem,
  name,
  changeHandler,
}: {
  currentItem: FeedObject | BundleObject;
  name: string;
  changeHandler: Dispatch<SetStateAction<FeedObject | BundleObject>>;
}) => (
  <div className="py-2">
    <label className="block py-2">
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </label>
    <input
      className="border-4 rounded w-full py-2 px-3"
      value={currentItem[name]}
      onChange={(e) => {
        e.persist();
        changeHandler((curr) => ({ ...curr, [name]: e.target.value }));
      }}
    />
  </div>
);

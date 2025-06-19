import { FaDeleteLeft } from "react-icons/fa6";
import { TopicAction } from "./components/Journey/types/types";
import { ActionTypes } from "./types";
import { FaCheckCircle, FaEdit } from "react-icons/fa";

export const ACTIONS: TopicAction<ActionTypes>[] = [
  {
    id: "delete",
    label: "Delete",
    icon: <FaDeleteLeft />,
  },
  {
    id: "edit",
    label: "Update",
    icon: <FaEdit />,
  },
  {
    id: "conclude",
    label: "Complete",
    icon: <FaCheckCircle />,
  },
];

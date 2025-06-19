import { FaEdit, FaTrash } from "react-icons/fa";

export function getFolderActions() {
  return [
    {
      id: "edit",
      icon: <FaEdit />,
      label: "Rename",
      onClick: () => {
        console.log(`Rename `);
      },
    },
    {
      id: "delete",
      icon: <FaTrash />,
      label: "Remove",
      onClick: () => {
        console.log(`Remove pasta )`);
      },
    },
  ];
}

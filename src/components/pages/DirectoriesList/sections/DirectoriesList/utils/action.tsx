import { FaEdit, FaTrash } from "react-icons/fa"; // Exemplos de ícones

export function getFolderActions() {
  return [
    {
      id: "edit",
      icon: <FaEdit />,
      label: "Renomear",
      onClick: () => {
        console.log(`Renomear `);
      },
    },
    {
      id: "delete",
      icon: <FaTrash />,
      label: "Excluir",
      onClick: () => {
        console.log(`Excluir pasta )`);
      },
    },
  ];
}

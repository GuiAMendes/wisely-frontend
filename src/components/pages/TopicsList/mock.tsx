import { FaDeleteLeft } from "react-icons/fa6";
import { BaseNode, TopicAction } from "./components/Journey/types/types";
import { FaEdit } from "react-icons/fa";

export type ActionTypesMock = "edit" | "delete" | "conclude" | "teste";

export interface NodeDtoMock extends BaseNode {
  id: string;
  label: string;
  title?: string;
  status: string;
  tipo1: string;
  tipo2: string;
  tipo3?: string;
  description?: string;
}

export const NODES_MOCK: NodeDtoMock[] = [
  {
    id: "topic-1",
    label: "Listas",
    title: "Listas Encadeadas",
    tipo1: "Estruturas de Dados",
    tipo2: "Listas Encadeadas",
    description: "Como funcionam listas encadeadas e sua complexidade.",
    status: "published",
  },
  {
    id: "topic-2",
    label: "Filas",
    tipo1: "Estruturas de Dados",
    tipo2: "Listas Encadeadas",
    title: "Filas e Filas Circulares",
    description: "Entenda a lógica de enfileiramento e filas circulares.",
    status: "draft",
  },
  {
    id: "topic-3",
    label: "Pilhas",
    tipo1: "Estruturas de Dados",
    tipo2: "Listas Encadeadas",
    title: "Estrutura de Pilha (Stack)",
    description: "LIFO: último a entrar, primeiro a sair.",
    status: "published",
  },
  {
    id: "topic-4",
    label: "Vetores",
    tipo1: "Estruturas de Dados",
    tipo2: "Listas Encadeadas",
    title: "Arrays Estáticos e Dinâmicos",
    description: "Diferenças e implementações de vetores.",
    status: "archived",
  },
  {
    id: "topic-5",
    label: "Tabelas Hash",
    tipo1: "Estruturas de Dados",
    tipo2: "Listas Encadeadas",
    title: "Tabelas de Dispersão",
    description: "Funções de hash e colisões.",
    status: "published",
  },
];

export const ACTIONS_MOCK: TopicAction<ActionTypesMock>[] = [
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
    id: "teste",
    label: "Teste",
    icon: <FaEdit />,
  },
];

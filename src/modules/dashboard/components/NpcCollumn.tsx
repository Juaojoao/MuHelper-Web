import { Tag } from "antd";

interface NpcCollumnProps {
  npcID: number;
}

interface NpcTypeData {
  label: string;
  color: string;
}

const npcTypesMapping: { [key: number]: NpcTypeData } = {
  1: { label: "Chaos Machine", color: "red" },
  2: { label: "Adniel", color: "blue" },
  3: { label: "Seed Master", color: "green" },
  4: { label: "Trainer", color: "orange" },
  5: { label: "Harmony", color: "purple" },
};

const NpcCollumn = ({ npcID }: NpcCollumnProps) => {
  const npcTypeData = npcTypesMapping[npcID];

  if (npcTypeData) {
    const { label, color } = npcTypeData;
    return <Tag color={color}>{label}</Tag>;
  }

  return null;
};

export default NpcCollumn;

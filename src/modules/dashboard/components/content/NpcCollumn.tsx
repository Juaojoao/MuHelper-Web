import { Tag } from 'antd';

interface NpcCollumnProps {
  npcId?: number;
}

interface NpcTypeData {
  label: string;
}

interface NpcColors {
  [key: number]: string;
}

export const npcTypesMapping: { [key: number]: NpcTypeData } = {
  1: { label: 'Chaos Machine' },
  2: { label: 'Adniel' },
  3: { label: 'Seed Master' },
  4: { label: 'Trainer' },
  5: { label: 'Harmony' },
};

const npcColors: NpcColors = {
  1: 'red',
  2: 'blue',
  3: 'green',
  4: 'orange',
  5: 'purple',
};

const NpcCollumn = ({ npcId }: NpcCollumnProps) => {
  const npcTypeData = npcTypesMapping[npcId ?? 0];

  if (npcTypeData) {
    const { label } = npcTypeData;
    const colors = npcColors[npcId ?? 0];
    return <Tag color={colors}>{label}</Tag>;
  }

  return null;
};

export default NpcCollumn;

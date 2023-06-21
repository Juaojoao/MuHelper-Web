import type { ColumnsType } from 'antd/es/table';
import NpcCollumn from "../NpcCollumn";
import Table from '../../../../shared/components/table/table';
import { GuideType } from '../../types/guidesType';
import { useDataContext } from '../../../../shared/hooks/useDataContext';


const columns: ColumnsType<GuideType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'NpcID',
    dataIndex: 'npcID',
    key: 'npcID',
    render: (_, guide) => <NpcCollumn npcID={guide.npcID} />,
  },
];


const GetGuides = () => {
    const { guides } = useDataContext();


    return <Table
    columns={columns}
    dataSource={guides.map((guide) => ({ ...guide, key: guide.id }))}
  />;
}

export default GetGuides;
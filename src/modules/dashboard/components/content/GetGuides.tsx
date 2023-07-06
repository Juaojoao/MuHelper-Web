import './styles/styles.css';

import type { ColumnsType } from 'antd/es/table';
import Table from '../../../../shared/components/table/table';
import { GuideType, Guides } from '../../types/guidesType';
import { useDataContext } from '../../../../shared/hooks/useDataContext';
import SearchInput from '../../../../shared/components/input/SearchInput';
import CreateGuides from './CreateGuides';
import CollapseShared from '../../../../shared/components/Collapse/Collapse';
import { DeleteTwoTone } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import { connectionAPIDelete } from '../../../../shared/functions/connection/connectionAPI';
import { URL_DELETE_GUIDE } from '../../../../shared/constants/urls';
import EditGuides from './EditGuides';
import NpcCollumn from './NpcCollumn';

const columns: ColumnsType<Guides> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => (a.id ?? 0) - (b.id ?? 0),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'NPC',
    dataIndex: 'npcID',
    key: 'npcID',
    render: (_, guide) => <NpcCollumn npcId={guide.npcID} />,
  },
  {
    render: (_, guide) => {
      return (
        <div className="flex">
          <EditGuides guideId={guide.id} />
          <Popconfirm
            title="Sure to delete?"
            key={guide.id}
            onConfirm={() => connectionAPIDelete(URL_DELETE_GUIDE(String(guide.id)))}
          >
            <a>
              <DeleteTwoTone />
            </a>
          </Popconfirm>
        </div>
      );
    },
  },
];

const TableGuides = () => {
  const { guides } = useDataContext();

  return (
    <Table
      columns={columns}
      dataSource={guides.map((guideMap) => ({ ...guideMap, key: guideMap.id }))}
    />
  );
};

const GetGuidesTable = () => {
  return (
    <div className="getGuides">
      <div className="getGuidesContent">
        <CollapseShared content={<CreateGuides />} />
        <SearchInput className="searchInput" />
      </div>
      <TableGuides />
    </div>
  );
};

export default GetGuidesTable;

import HeaderTable from "../headerTable/HeaderTable";
import TableElementItem, {
  TableElementItemProps,
} from "../tableElement/TableElementItem";

interface TableProps {
  list: TableElementItemProps[];
}

const Table = ({ list }: TableProps) => {
  
  return (
    <>
      <HeaderTable />
      {list.map((item) => {
        return <TableElementItem {...item} key={item.number} />;
      })}
    </>
  );
};

export default Table;

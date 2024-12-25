import { Wrapper } from "./styled";
import { Title } from "./styled";

interface StatusProps {
  $status: "todo" | "inProgress" | "expired" | "ready";
}

const Status = ({ $status }: StatusProps) => {
  return (
    <Wrapper $status={$status}>
      <Title>
        {$status === "todo" && "в работе"}
        {$status === "inProgress" && "в обработке"}
        {$status === "expired" && "просрочен"}
        {$status === "ready" && "готово"}
      </Title>
    </Wrapper>
  );
};

export default Status;

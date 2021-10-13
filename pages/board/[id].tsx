import { useRouter } from "next/router";
import { DrawingArea } from "../../components/Areas";

const BoardId = () => {
  const router = useRouter();
  const { id } = router.query;

  return <DrawingArea />;
};

export default BoardId;

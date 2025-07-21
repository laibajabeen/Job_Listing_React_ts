import { ClipLoader } from "react-spinners";
import type { FC } from "react";
const override = {
  display: "block",
  margin: "100px auto",
};
interface SpinnerProps {
  loading: boolean;
}
const Spinner: FC<SpinnerProps> = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;

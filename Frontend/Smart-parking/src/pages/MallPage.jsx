import React from "react";
import MallDetails from "../components/MallDetails";
import { useParams } from "react-router-dom";

const MallPage = () => {
  const { mallId } = useParams();
  console.log(mallId)
  return (
    <div>
      <MallDetails mallId={mallId} />
    </div>
  );
};

export default MallPage;

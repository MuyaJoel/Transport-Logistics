import { Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const MallList = ({ malls }) => {
  // console.log(malls);
  return (
    <Stack>
      <h2>Malls With Parking Areas.</h2>
      <div>
        {malls.length > 0 ? (
          <div>
            <ol>
              {malls.map((mall) => (
                <li key={mall.id} color="lightblue">
                  <Link to={`/mall/${mall.id}`}>{mall.name} , Located In:- {mall.location}.</Link>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <p>No available Malls.</p>
        )}
      </div>
    </Stack>
  );
};

export default MallList;

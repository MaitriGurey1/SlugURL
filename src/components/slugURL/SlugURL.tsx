import React from "react";
import { useAppSdk } from "../../hooks/useAppSdk";
import { useEntry } from "../../hooks/useEntry";
import { useFrame } from "../../hooks/useFrame";
import useSdkDataByPath from "../../hooks/useSdkDataByPath";
import { useRef } from "react";
import { useCustomField } from "../../hooks/useCustomField";
export const SlugURL = () => {
  const [entryData] = useEntry();
  console.log("entryData-----------------------", entryData);
  const frameData = useFrame();
  console.log("FRameData------------------------", frameData);
  const [fieldData] = useCustomField("hello");
  console.log("Field data---------------------------", fieldData);

  // const containerRef = useRef(null);
  // const container = containerRef.current;
  // console.log("container value--------------------------------", container);

  return (
    <div>
      <div>
        <div>slugURL</div>

        <input
          className="border-solid border-2 border-indigo-600 height-300 w-1/2"
          type="text"
          placeholder="Type Something..."
        />
      </div>
    </div>
  );
};

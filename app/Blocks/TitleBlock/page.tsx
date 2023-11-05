import React from "react";

export const dynamic = 'force-dynamic';

const Title = ({ title }: any) => {
  return (
    <>
      <div>
        <h1 id={`title`}>
          {title ?? ""}
        </h1>
      </div>
    </>
  )
};
export default Title;

import React from "react";

export default async function ({ params }) {
  const { blogID, commentID } = await params;
  return (
    <div> Comment no.{" "} <b> <i>{commentID}</i>  </b>{" "}  of blog <b>{blogID}.</b>
    </div>
  );
}

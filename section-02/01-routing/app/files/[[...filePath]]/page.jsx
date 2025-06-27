import { use } from "react";

export const metadata = {
  title: "Files",
};

export default function Files({params}) {
    const {filePath} = use(params);
  return (
    <h1>file path <i>/{filePath?.join('/')}</i></h1>
  )
}

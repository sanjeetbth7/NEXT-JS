import { use } from "react";
export default function Files({params}) {
    const {filePath} = use(params);
  return (
    <h1>file path <i>/{filePath?.join('/')}</i></h1>
  )
}

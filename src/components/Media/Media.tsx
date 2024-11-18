import { MediaFile } from "../Files/Files";
import { Header } from "./Header";
import { List } from "./List";

interface Props {
  files?: MediaFile[];
  onDelete?: (index: number, val?: number) => void;
}

export const Media = ({ files = [], onDelete }: Props) => (
  <div className="mt-6">
    <Header />
    <List files={files} onDelete={onDelete} />
  </div>
);

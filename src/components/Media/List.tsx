import { MediaFile } from "../Files/Files";
import { Photo } from "./Photo";

interface Props {
  files?: MediaFile[];
  onDelete?: (index: number, val?: number) => void;
}

export const List = ({ files, onDelete }: Props) => (
  <div className="flex items-center gap-1 flex-wrap">
    {files?.map((f, i) => (
      <Photo
        key={i}
        photo={f.url}
        onDelete={onDelete ? () => onDelete(i, f.id) : undefined}
      />
    ))}
  </div>
);

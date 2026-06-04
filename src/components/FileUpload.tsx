import { UploadButton, HiddenInput } from "../styles/FileUpload.styles";

type Props = {
  onFileSelect: (content: string) => void;
};

export default function FileUpload({ onFileSelect }: Props) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("UPLOAD FIRED");

    const file = event.target.files?.[0];

    console.log("FILE:", file);

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target?.result as string;

      console.log("CONTENT:", content);

      onFileSelect(content);
    };

    reader.readAsText(file);
  };

  return (
    <>
      <UploadButton htmlFor="fileUpload">📂 Upload File</UploadButton>

      <HiddenInput
        id="fileUpload"
        type="file"
        accept=".js,.jsx,.ts,.tsx,.java,.py,.cpp,.sql"
        onChange={handleFileUpload}
      />
    </>
  );
}

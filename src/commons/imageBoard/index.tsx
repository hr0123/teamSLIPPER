import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { Modal } from "antd";
import styled from "@emotion/styled";

const UPLOAD_BOARD_IMAGE = gql`
  mutation uploadBoardImage($files: [Upload!]!) {
    uploadBoardImage(files: $files)
  }
`;

const UploadImage = styled.img`
  object-fit: cover;
  width: 40%;
  height: 190px;
  outline: none;
  cursor: pointer;
  /* padding: 2%; */
  /* margin: 2%; */
  /* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='gainsboro' stroke-width='4' stroke-dasharray='18' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"); */
  border-radius: 10px;
  /* border: 0.5px solid lightgray; */
`;
const UploadButton = styled.div`
  width: 35%;
  height: 180px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 9%;
  margin: 2%;
  /* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='gainsboro' stroke-width='4' stroke-dasharray='18' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"); */
  border-radius: 10px;
  /* border: 0.5px solid lightgray; */
`;
const UploadIcon = styled.img`
  width: 50%;
  height: 90%;
`;
const UploadFileHidden = styled.input`
  display: none;
`;

interface IImageUploadPageProps {
  // onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  index: number;
  fileUrl: string;
  // onClickImgUpload = () => void;
}
export default function ImageBoardUpload(props: IImageUploadPageProps) {
  const [uploadBoardImage] = useMutation(UPLOAD_BOARD_IMAGE);
  // const [imgUrl, setImgUrl] = useState("");
  const fileRef = useRef(null);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (!file) return;
    try {
      const result = await uploadBoardImage({
        variables: { files: file },
      });
      props.onChangeFileUrls(result.data.uploadBoardImage, props.index);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImgUpload = () => {
    fileRef.current?.click();
  };

  return (
    // prettier-ignore
    <>
      {props.fileUrl !== "" 
      ? (<UploadImage onClick={onClickImgUpload} src={`${props.fileUrl}`}/>) 
      : (<UploadButton type="button" onClick={onClickImgUpload}>
          {/* <>+</> */}
          {/* <>Upload</> */}
          <UploadIcon src="/image/boardimage.png" />
        </UploadButton>)
      }
      <UploadFileHidden
        // style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
    </>
  );
}

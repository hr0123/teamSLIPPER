// 예원작업 5/16

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { useMovetoPage } from "../../../../commons/hooks/movePage";
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";
import DetailPresenter from "./detail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./detail.query";

export default function DetailContainer() {
  const router = useRouter();

  // 게시글 상세 내용 가져오기 Query
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  console.log(data);
  // 게시글 삭제 Mutation
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  // 게시글 삭제 함수
  const onClickDeleteBoard = (event: MouseEvent<HTMLImageElement>) => {
    deleteBoard({
      variables: { boardId: String((event.target as HTMLImageElement).id) },
    });
    alert("게시글 삭제에 성공하였습니다");
  };
  // 수정하기로 이동
  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  // 페이지 이동 함수
  const onClickMoveToList = () => {
    router.push("/boards");
  };

  return (
    <DetailPresenter
      onClickDeleteBoard={onClickDeleteBoard}
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
    />
  );
}

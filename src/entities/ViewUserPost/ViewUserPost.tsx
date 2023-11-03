import React, { useState } from "react";
import { ViewUserPostWrapper } from "entities/ViewUserPost/ViewUserPost.styled";
import { ViewUserPostHeader } from "entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader";
import { ViewUserPostComments } from "entities/ViewUserPost/ui/ViewUserPostComments/ViewUserPostComments";
import { PostByIdType } from "entities/ViewUserPost/api/type";
import { ViewUserPostSlider } from "entities/ViewUserPost/ui/ViewUserPostSlider/ViewUserPostSlider";
import { ViewUserPostDescription } from "entities/ViewUserPost/ui/ViewUserPostDescription/ViewUserPostDescription";
import { ViewUserPostAddComment } from "entities/ViewUserPost/ui/ViewUserPostAddComment/ViewUserPostAddComment";
import { ViewUserPostFeatures } from "entities/ViewUserPost/ui/ViewUserPostFeatures/ViewUserPostFeatures";
import { EditPost } from "features/Post/EditPost/ui/EditPost";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

type PropsType = {
  data: PostByIdType
  userId?: number | null
}

export const getServerSideProps: GetServerSideProps<{ userId: number | null }> = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);

  if (session && session.user.userId) {
    return {
      props: {
        userId: session.user.userId
      }
    };
  }
  return {
    props: {
      userId: null
    }
  };
};
export const ViewUserPost = ({ data, userId }: PropsType) => {
  const [edit, setEdit] = useState(false);

  const images = [...data.images]
    .filter(img => img.width === 1440)
    .sort((a, b) => b.uploadId.localeCompare(a.uploadId));

  return (
    <ViewUserPostWrapper>
      <ViewUserPostSlider className={"left"} images={images} />
      {edit ? (
        <EditPost userId={userId!} edit={edit} setEdit={setEdit} data={data} />
      ) : (
        <div className={"right"}>
          <ViewUserPostHeader data={data} edit={edit} setEdit={setEdit} userId={userId!} />
          <ViewUserPostDescription description={data.description} createdAt={data.createdAt} />
          <ViewUserPostComments />
          <ViewUserPostFeatures />
          <ViewUserPostAddComment />
        </div>
      )}
    </ViewUserPostWrapper>
  );
};

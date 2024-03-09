import type { FC, ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

const ArticleDetails: FC<Props> = ({ children }) => <>{children}</>;

export default ArticleDetails;

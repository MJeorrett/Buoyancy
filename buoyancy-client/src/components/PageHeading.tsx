export type PageHeadingProps = {
  children: string;
};

const PageHeading = ({ children }: PageHeadingProps) => {
  return <h1 className="text-4xl">{children}</h1>;
};

export default PageHeading;

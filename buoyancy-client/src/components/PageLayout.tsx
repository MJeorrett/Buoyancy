import PageHeading from "./PageHeading";

export type PageLayoutProps = {
  children?: React.ReactNode;
  heading?: string;
};

const PageLayout = ({ children, heading }: PageLayoutProps) => {
  return (
    <div className="p-8">
      {heading && <PageHeading>{heading}</PageHeading>}
      {children}
    </div>
  );
};

export default PageLayout;

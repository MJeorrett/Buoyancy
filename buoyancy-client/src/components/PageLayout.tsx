import PageHeading from "./PageHeading";

export type PageLayoutProps = {
  children?: React.ReactNode;
  heading?: string;
};

const PageLayout = ({ children, heading }: PageLayoutProps) => {
  return (
    <div className="p-8 space-y-8 w-full">
      {heading && <PageHeading>{heading}</PageHeading>}
      {children}
    </div>
  );
};

export default PageLayout;

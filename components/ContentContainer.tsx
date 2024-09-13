interface ContentContainerProps {
  content: string;
  themeColor: string;
}

const ContentContainer = ({ content, themeColor }: ContentContainerProps) => {
  return (
    <div
      className={`border border-${themeColor}-500 min-w-96 min-h-52 flex justify-center items-center`}
    >
      <h1 className="text-xl font-extrabold">{content}</h1>
    </div>
  );
};

export default ContentContainer;

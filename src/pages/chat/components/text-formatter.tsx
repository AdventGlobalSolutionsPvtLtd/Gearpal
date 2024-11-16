const TextFormatter = ({ content }: { content: string }) => {
  // Function to parse the string and return React elements
  const formatContent = (input: string) => {
    const paragraphs = input.split("\n\n"); // Split content by double newlines for paragraphs

    return paragraphs.map((para, index) => (
      <p key={index} className="my-1">
        {para.split(/\*\*(.*?)\*\*/g).map((segment, i) =>
          i % 2 === 1 ? (
            <strong style={{ marginBottom: 2 }} key={i}>
              {segment}
            </strong>
          ) : (
            segment
          )
        )}
      </p>
    ));
  };

  return <div className="px-2">{formatContent(content)}</div>;
};

export default TextFormatter;

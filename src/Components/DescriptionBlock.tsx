import React from 'react';

type DescBlockProps = {
  text: string;
  limit: number;
}

const DescriptionBlock: React.FC<DescBlockProps> = ({ text, limit }) => {
  const [trimmedText, setTrimmedText] = React.useState('');

  React.useEffect(() => {
    if (text.length > limit) {
      let trimmed = text.substr(0, limit);
      const lastSpaceIndex = trimmed.lastIndexOf(' ');
      trimmed = trimmed.substr(0, lastSpaceIndex);
      trimmed = trimmed.replace(/,\s*$/, ''); // Удаление запятых в конце текста
      setTrimmedText(trimmed + '...');
    } else {
      setTrimmedText(text);
    }
  }, [text, limit]);

  return <p>{trimmedText}</p>;
};

export default DescriptionBlock;

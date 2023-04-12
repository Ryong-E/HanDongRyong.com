import { Box, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { useEffect, useState } from 'react';
import { FontColor } from 'styles/color';
interface TocItem {
  url: string;
  title: string;
  items?: TocItem[];
}
interface TocType {
  items: TocItem[];
}
interface TocItemProps {
  content: TocItem;
  targetId: string;
}
const TocItem = ({ content, targetId }: TocItemProps) => {
  const { url, title, items } = content;
  const isShown = url === targetId;
  return (
    <Box>
      <Link to={url}>
        <Text
          fontSize='18px'
          transition='0.2s'
          transform={isShown ? 'scale(1.04)' : 'scale(1)'}
          color={isShown ? FontColor.artHeader : 'GrayText'}
          fontWeight={isShown ? 700 : 400}
        >
          {title}
        </Text>
      </Link>
      {items && (
        <Box paddingInlineStart='20px'>
          {items.map((item, index) => (
            <TocItem targetId={targetId} content={item} key={item.title} />
          ))}
        </Box>
      )}
    </Box>
  );
};

const Toc = ({ tableOfContents }: { tableOfContents: TocType }) => {
  const [currentHead, setCurrentHead] = useState<string>('');

  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setCurrentHead(`#${entry.target.id}`);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      rootMargin: '-2px 0px -90% 0px',
      threshold: 0.01,
    });

    const headElement = document.querySelectorAll('h1, h2, h3, h4');

    headElement.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setCurrentHead, tableOfContents.items]);

  return (
    <Box position='sticky' top='150px' width='300px'>
      {tableOfContents.items.map((content, index) => {
        return (
          <Box key={index}>
            <TocItem targetId={currentHead} content={content} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Toc;

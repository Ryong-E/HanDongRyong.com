import Highlight, { defaultProps } from 'prism-react-renderer';
import dark from 'prism-react-renderer/themes/vsDark';
import light from 'prism-react-renderer/themes/github';
import { useColorMode, Text } from '@chakra-ui/react';

function CodeBlcok(children: any, className: any) {
  const { colorMode, setColorMode } = useColorMode();
  const language = className?.replace(/language-/, '');

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={colorMode === 'light' ? light : dark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '30px',
            marginTop: '30px',
            overflow: 'scroll',
          }}
        >
          {tokens.map(
            (line, i) =>
              !line[0].empty && (
                <div key={i} {...getLineProps({ line, key: i })}>
                  <Text display='inline-block' opacity={0.3} userSelect='none' width='2em'>
                    {i + 1}
                  </Text>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ),
          )}
        </pre>
      )}
    </Highlight>
  );
}
export default CodeBlcok;

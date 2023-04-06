import Highlight, { defaultProps } from 'prism-react-renderer';
import palenight from 'prism-react-renderer/themes/vsDark';

function CodeBlcok(children: any, className: any) {
  const language = className?.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={palenight}>
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
          {tokens.map((line, i) => (
            <p key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </p>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
export default CodeBlcok;

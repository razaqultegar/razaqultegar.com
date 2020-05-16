const Code = ({ children, syntax }) => (
  <pre className={syntax ? ` ${syntax}` : ''}>
    <code>{children}</code>
  </pre>
);

export const code = {
  code: Code
};

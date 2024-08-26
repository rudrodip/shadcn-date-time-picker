import * as runtime from 'react/jsx-runtime'
import { mdxComponents } from './components'
import 'katex/dist/katex.min.css';

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

export const MDXContentRenderer = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...mdxComponents, ...components }} />
}
import { Page, Content, Loading } from './style'

export { ArrowRight, Button, Container, Text } from './style'

export const Wrapper = ({ bg, children, columns, margin }) => (
  <Page margin={margin}>
    <Content bg={bg} columns={columns}>
      {children}
    </Content>
  </Page>
)

export const Loader = () => (
  <Loading>
    <div />
    <div />
    <div />
    <div />
  </Loading>
)

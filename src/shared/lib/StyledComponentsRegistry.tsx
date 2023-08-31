import { ReactNode, useState } from 'react'

import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

// this function from https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components
export default function StyledComponentsRegistry({ children }: { children: ReactNode }): JSX.Element {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()

    styledComponentsStyleSheet.instance.clearTag()

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{styles}</>
  })

  // TODO
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (typeof window !== 'undefined') return <>{children}</>

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
}

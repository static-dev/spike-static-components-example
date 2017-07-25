import 'preact/devtools'
import {h, render} from 'preact'
import {hydrateInitialState} from 'reshape-preact-components'
import ClientOnly from './components/client-only'
import StaticAndClient from './components/static-and-client'

// first, we'll render the client only component as usual
render(
  <ClientOnly foo='bar'>
    <p>child element</p>
  </ClientOnly>,
  document.querySelector('#client-root')
)

// next, we'll render the static and client component
const el = document.querySelector('.static-and-client')

// the hydrateInitialState function allows us to render the same initial state
// for the component as we had placed in the html, to reduce repetition.
// this gives us back jsx representing the markup we used to initialize the
// component in the html
const vdom = hydrateInitialState(el.dataset.state, {
  'static-and-client': StaticAndClient
})

// finally, we take the hydrated element and render it as usual!
// note how we don't need to rewrite the jsx like we did with the client render
render(vdom, el.parentElement, el)

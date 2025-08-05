# @widged.io/element-react

The package contains a React component for embedding the [widged.io](https://widged.io/) widget.

More details can be found in [documentation](https://docs.widged.io/).

## Getting started

```console
npm i @widged.io/element-react
```

## Usage

```jsx
import { WidgedElement } from '@widged.io/element-react';

const Component = () => {
    return (
        <div>
            <WidgedElement widgetId="XXXXXXXX" />
        </div>
    )
}
```

## SSR

The component works without issues in SSR, no additional setup is required. On the server, it will simply compile into a web component tag and will only be loaded on the client.


## Props

```ts
interface WidgetElementProps {
    widgetdId: string;  // ID of widget
    debug?: boolean; // Should run in debug mode (more logs)
    lazyLoad?: boolean; // Should the script be loaded lazily (more details: https://docs.widged.io/publishing)
    pixel?: boolean; // Should hide standard loading state and error state
    data?: Record<`data-${string}`, string>; // Mapped data-* attributes
}
```

## Using with Preact

The component is also fully compatible with [preact](https://preactjs.com/). To use it, configure `preact/compat` with an alias in your build tool.
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

## Props

```ts
interface WidgetElementProps {
    widgetdId: string;  // ID of widget
    debug?: boolean; // Should run in debug mode (more logs)
    lazyLoad?: boolean; // Should the script be loaded lazily (more details: https://docs.widged.io/)
}
```
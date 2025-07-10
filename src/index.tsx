import { FC, useEffect } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            ['widged-element']: {
                key?: string;
                children?: never;
                'widget-id': string;
                'lazy-load'?: boolean;
                'debug'?: boolean;
            }
        }
    }
}

export interface WidgetElementProps {
    widgetdId: string;
    lazyLoad?: boolean;
    debug?: boolean;
}

export const WidgetElement: FC<WidgetElementProps> = ({ widgetdId, lazyLoad, debug }) => {
    useEffect(() => {
        const existing = document.querySelector('script[data-widged]');

        if (existing) {
            return;
        }

        const script = document.createElement('script');

        script.src = 'https://cdn.widged.io/element.js';
        script.type = 'module';
        script.async = true;
        script.dataset['widged'] = '';

        document.body.appendChild(script);
    }, []);

    const key = `${widgetdId}-${lazyLoad}-${debug}`;

    return <widged-element key={key} widget-id={widgetdId} lazy-load={lazyLoad} debug={debug}></widged-element>;
}
import { FC, useEffect, useRef } from 'react';
import { logger } from './logger.js';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            ['widged-element']: {
                key?: string;
                children?: never;
                'widget-id': string;
                'lazy-load'?: boolean;
                debug?: boolean;
                pixel?: boolean;
            };
        }
    }
}

export interface WidgetElementProps {
    widgetdId: string;
    lazyLoad?: boolean;
    debug?: boolean;
    pixel?: boolean;
    data?: Record<string, string>;
}

export const WidgetElement: FC<WidgetElementProps> = ({ widgetdId, lazyLoad, debug, data, pixel }) => {
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

    const dataEntries = Object.entries(data || {})
        .filter(([key]) => key.startsWith('data-'))
        .sort((a, b) => a[0].localeCompare(b[0]));

    const mappedData = dataEntries.reduce((acc, [key, value]) => {
        acc[key] = value;

        return acc;
    }, {} as Record<string, string>);

    const key = `widget-id=${widgetdId};lazy-load=${lazyLoad};debug=${debug};pixel=${pixel};${dataEntries
        .map(([key, value]) => `${key}=${value}`)
        .join(';')}`;

    useEffect(() => {
        if (debug) {
            logger.debug(widgetdId, 'Rendering key changed', { key });
        }
    }, [key]);

    return (
        <widged-element
            {...mappedData}
            key={key}
            pixel={pixel}
            widget-id={widgetdId}
            lazy-load={lazyLoad}
            debug={debug}
        ></widged-element>
    );
};

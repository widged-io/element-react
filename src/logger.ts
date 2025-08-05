export const logger = {
    prefix: 'widged.io DEBUG',
    style: 'background:rgba(41, 128, 185, 0.9);color:white;padding:2px 3px;border-radius: 2px;font-size:0.8em;',
    debug(widgetId: string, message: string, data?: Record<string, unknown>) {
        if (!widgetId) {
            return;
        }

        if (data) {
            console.debug(`%c[${this.prefix}] - ${widgetId}`, this.style, message, data);

            return;
        }

        console.debug(`%c[${this.prefix}] - ${widgetId}`, this.style, message);
    }
}
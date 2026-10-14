/* Deployment knobs. SUBMIT_ENDPOINT empty = preview build: the page says so and
   a submit is played back locally. Live, it posts to the shared DDX side-event
   inbox, which knows this event as `london-dscout`. */
export const SUBMIT_ENDPOINT = 'https://ddx-side-events.netlify.app/api/submit';
export const EVENT_ID = 'london-dscout';
export const SITE_URL = 'https://dscout.ddxconference.com/';

export const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

declare global {
  interface Window {
    gtag: any;
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (path: string, title: string): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: path,
    page_title: title,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const actionEvent = (
  action: string,
  category = '',
  label = '',
  value: number,
): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

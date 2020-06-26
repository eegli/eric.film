export const GA_TRACKING_ID = 'UA-106609763-2';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (path, title) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: path,
    page_title: title,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

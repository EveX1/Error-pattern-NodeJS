export default function log(error: Error) {
    // Do Sentry logging here instead of console
    console.error(error);
    return;
}
export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);
  console.log({
    method: event.node.req.method,
    url: url.href,
    origin: url.origin,
    headers: getRequestHeaders(event),
    timestamp: new Date().toISOString(),
  });
});

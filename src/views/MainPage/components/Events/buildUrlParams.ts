export function buildUrlParams(
  params: Record<string, string | string[] | undefined>,
  defaultParams?: URLSearchParams,
): URLSearchParams {
  const urlSearchParams = new URLSearchParams(defaultParams);

  Object.keys(params).forEach((field) => {
    if (typeof params[field] === 'string') {
      urlSearchParams.set(field, params[field]);
    } else if (Array.isArray(params[field])) {
      if (!params[field].length) urlSearchParams.delete(field);
      else params[field].forEach((val) => urlSearchParams.append(field, val));
    }
  });

  return urlSearchParams;
}

function generateLink(
  location: Location,
  current: string,
  target: string,
  hostname: string
): string {
  if (location && hostname) {
    let path;

    if (current) {
      path = location.pathname.replace(current, target);
    } else if (target) {
      path = `/${target}/`;
    } else {
      path = '/';
    }

    return `${location.protocol}//${hostname}${path}${location.search}${location.hash}`;
  }

  return '#';
}

export default generateLink;

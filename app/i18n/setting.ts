export const FALLBACK_LANG = 'en';
export const DEFAULT_NS = 'translation';

export function getOptions(
  lng = FALLBACK_LANG,
  ns: string | string[] = DEFAULT_NS,
) {
  return {
    supportedLngs: ['en', 'ua', 'ru'],
    FALLBACK_LANG,
    lng,
    fallbackNS: DEFAULT_NS,
    defaultNS: DEFAULT_NS,
    ns,
  };
}

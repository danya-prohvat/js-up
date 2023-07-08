'use client';

import i18next, { FlatNamespace, KeyPrefix } from 'i18next';
import { FallbackNs } from 'react-i18next';
import {
  initReactI18next,
  useTranslation as useTranslationInit,
} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './setting';
import { useEffect } from 'react';

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
  });

export function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(lng = 'en', ns?: Ns, options: { keyPrefix?: KPrefix } = {}) {
  const translationObject = useTranslationInit(ns, options);
  const { i18n } = translationObject;

  useEffect(() => {
    if (i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  return translationObject;
}

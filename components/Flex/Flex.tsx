import { useTranslation } from "@/app/i18n";

export const Flex = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation();

    return (
        <>
        {t('flex.title')}
        </>
    );
};
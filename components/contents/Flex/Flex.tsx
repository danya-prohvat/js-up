import { useTranslation } from "@app/i18n";
import { Rule } from "@components/common/Rule";
import { Title } from "@components/common/Title";
import { flexData } from "@constants/flex.data";

export const Flex = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation();

    return (
        <>
            <Title title={t('flex.title')} />
        
            {flexData.map((rule, idx) => 
                <Rule key={idx} {...rule} />
            )}
        </>
    );
};
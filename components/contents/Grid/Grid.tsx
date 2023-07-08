import { useTranslation } from "@app/i18n";
import { Rule } from "@components/common/Rule";
import { Title } from "@components/common/Title";
import { gridData } from "@constants/grid.data";

export const Grid = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation();

    return (
        <>
            <Title title={t('grid.title')} />
            {gridData.map((rule, idx) => 
                <Rule mark='grid' key={idx} {...rule} />
            )}
        </>
    );
};
import { Grid } from '@mui/material';
import './Style/CategoryImageListStyle.scss'
import { CategoryTemplates } from './Store/Categories';

export const dynamic = 'force-dynamic';

const categories = [{
    image: '',
    text: 'Lighting',
    icon: 'M20 6.6L2 3L6.6 7.35L3.39 13.33L20 6.6Z'
},
{
    image: '',
    text: 'Access',
    icon: 'M20 6.6L2 3L6.6 7.35L3.39 13.33L20 6.6Z'
},
{
    image: "",
    text: 'Heating & Drying',
    icon: 'M20 6.6L2 3L6.6 7.35L3.39 13.33L20 6.6Z'
},
{
    image: '',
    text: 'Power Tools',
    icon: 'M20 6.6L2 3L6.6 7.35L3.39 13.33L20 6.6Z'
},
]



const CategoriesBlock = async (blockModel: any) => {
    const pageInfo = blockModel?.searchParams?.data ? JSON.parse(blockModel?.searchParams?.data) : blockModel;
    const Template = CategoryTemplates[pageInfo?.template];
    return (
        <>
            <div id="CatalogName">
                <Grid container >
                    {categories?.map((category: any, index: number) => {
                        return (
                            <Grid item xs={12} sm={3} md={3} className='image-tile' key={`category-item-${category.text}-${index}`}>
                                <Template {...category} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </>
    )

}

export default CategoriesBlock;
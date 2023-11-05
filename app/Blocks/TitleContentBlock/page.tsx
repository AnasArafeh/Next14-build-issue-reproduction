import { Grid } from "@mui/material";
import './Style/TitleContentStyle.scss';

export const dynamic = 'force-dynamic';

const TitleContentBlock = (blockModel: any) => {
    const pageInfo = blockModel?.searchParams?.data ? JSON.parse(blockModel?.searchParams?.data) : blockModel;

    return (
        <Grid container className="homepage-section-title">
            <Grid item xs={12} md={12} sm={12}>
                <h4 id="title-content" className="title-item">
                    {pageInfo.title}
                </h4>
                <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                    <hr className="homepage-section-title-hr" />
                </div>
            </Grid>
        </Grid>)
}

export default TitleContentBlock;
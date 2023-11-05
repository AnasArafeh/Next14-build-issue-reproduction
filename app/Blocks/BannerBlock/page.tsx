import { Grid } from "@mui/material";
import './Style/ColumnsBannerStyle.scss';

export const dynamic = 'force-dynamic';

const BannerBlock = (blockModel: any) => {
    return (
        <Grid container>
            <Grid item xs={12} sm={4} md={4} key={"item-column-banner-1"} className="column-banner-item">
                <a href="/hire-page" className="usp-bar-item-link">
                    <img src="https://www.speedyservices.com/uploads/image/98bdd2e9d87749cbb738f98596519fe6/Winter_HP_graphic_390_x_390.jpg?231004140519" className="img-width" /> </a>
            </Grid>
            <Grid item xs={12} sm={4} md={4} key={"item-column-banner-2"} className="column-banner-item">
                <a href="/sales-page" className="usp-bar-item-link">
                    <img src="https://www.speedyservices.com/uploads/image/ffd1d4a96d17415fbfdf3c0787d657b6/Speedy_Live_HP_graphic_390_x_390.jpg?231018133527" className="img-width" /> </a>
            </Grid>
            <Grid item xs={12} sm={4} md={4} key={"item-column-banner-3"} className="column-banner-item">
                <a href="/winter" className="usp-bar-item-link">
                    <img src="https://www.speedyservices.com/uploads/image/15699225b7fa4b72bfeecc015dc0312a/Trustpilot_HP_graphic_390_x_390.jpg?231004140519" className="img-width" /> </a>
            </Grid>
        </Grid>
    )
}

export default BannerBlock;
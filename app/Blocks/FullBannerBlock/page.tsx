import { Grid } from "@mui/material";
import './Style/WideBannerStyle.scss'

export const dynamic = 'force-dynamic';

const FullBannerBlock = (blockModel: any) => {
    const pageInfo = blockModel?.searchParams?.data ? JSON.parse(blockModel?.searchParams?.data) : blockModel;
    return (
        <Grid container className="wide-panner-container">
            <Grid xs={12} sm={12} md={12} className="wide-panner-item">
                <a id={`full-banner-${pageInfo?.imageUrl}`} href={pageInfo.link} title="WIN FREE HIRE: DOWNLOAD THE SPEEDY APP AND PLAY NOW!" className="usp-bar-item-link">
                    <picture>
                        <img alt="WIN FREE HIRE: DOWNLOAD THE SPEEDY APP AND PLAY NOW!" src={pageInfo?.imageUrl ?? ""} className="img-width" />
                    </picture>
                </a>
            </Grid>

        </Grid>
    )
}

export default FullBannerBlock;
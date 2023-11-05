import { Grid } from "@mui/material";
import "./Style/ColumnsLinkStyle.scss"

export const dynamic = 'force-dynamic';

const DataLinkBlock = (blockModel: any) => {
    return (
        <Grid container className="usp-bar-container">
            <Grid item xs={12} sm={4} md={4} className="usp-bar-item" key={"item-A"}>
                <a href="https://www.speedyservices.com/depot">
                    <img className="img-consistent" src="https://www.speedyservices.com/uploads/image/08574fe93e394696ae18a76dd639bfb1/SpeedyShapeRed.png" alt="" />
                    <span className="usp-bar-item-link">Click &amp; Collect from over 200 stores</span>
                </a>
            </Grid> 
            <Grid item xs={12} sm={4} md={4} className="usp-bar-item" key={"item-b"}>
                <a href="https://www.speedyservices.com/4hourdelivery">
                    <img className="img-consistent" src="https://www.speedyservices.com/uploads/image/08574fe93e394696ae18a76dd639bfb1/SpeedyShapeRed.png" alt=">" />
                    <span className="usp-bar-item-link">4 hour delivery and collection promise</span>
                </a>
            </Grid>
            <Grid item xs={12} sm={4} md={4} className="usp-bar-item" key={"item-c"}>
                <a href="https://www.speedyservices.com/hire">
                    <img className="img-consistent" src="https://www.speedyservices.com/uploads/image/08574fe93e394696ae18a76dd639bfb1/SpeedyShapeRed.png" alt=">" />
                    <span className="usp-bar-item-link">Order from over 3500 product lines</span>
                </a>
            </Grid>
        </Grid>)
}


export default DataLinkBlock;
import React from "react";
import './Styles/CustomButtonBlock.scss';

export const dynamic = 'force-dynamic';

const ButtonBlock = (blockModel: any) => {
    const pageInfo = blockModel?.searchParams?.data ? JSON.parse(blockModel?.searchParams?.data) : blockModel;

    return (
        <>
            <div id="custom-button">
                <button className="button-block-text">{pageInfo?.buttonText ?? ""}</button>
            </div>
        </>
    )
};
export default ButtonBlock;

import './Styles/BasketBlock.scss';

export const dynamic = 'force-dynamic';

const BasketBlock = (blockModel: any) => {
    const pageInfo = blockModel?.searchParams?.data ? JSON.parse(blockModel?.searchParams?.data) : blockModel;

    return (
        <div>
            <div className="custom-container">
                <h1 id="title">{pageInfo?.title ?? ""}</h1>
                <h3 id="itemName">{pageInfo?.itemName ?? ""}</h3>
                <div id="htmlBody" dangerouslySetInnerHTML={{ __html: pageInfo?.htmlBody ?? "" }} />
                <h3>Price {pageInfo.price} $</h3>
                <button className="basket-block-button">{pageInfo?.buttonText ?? ""}</button>
            </div>
        </div>
    );
};

export default BasketBlock;

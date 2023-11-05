import './Styles/XHtmlBlock.scss'


export const dynamic = 'force-dynamic';

const XHtmlBlock = (blockModel: any) => {
  const pageInfo = blockModel?.searchParams?.data ? JSON.parse(blockModel?.searchParams?.data) : blockModel;

    return (
        <div>
            <div id="htmlBody" className="xhtmlbody-text" dangerouslySetInnerHTML={{ __html: pageInfo?.htmlBody ?? "" }} />
        </div>

    );
};
export default XHtmlBlock;

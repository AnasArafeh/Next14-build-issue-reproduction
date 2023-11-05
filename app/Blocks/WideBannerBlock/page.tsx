import './Styles/WideBannerBlock.scss';

export const dynamic = 'force-dynamic';

const WideBannerBlock = (blockModel: any) => {
  const pageInfo = blockModel?.searchParams?.data ? JSON.parse(blockModel?.searchParams?.data) : blockModel;

  return (
    <>
      <div>
        <img id={`image-${pageInfo?.url ?? ""}`} className="img-wide" src={pageInfo?.url ?? ""} />
      </div>
    </>
  );
};
export default WideBannerBlock;

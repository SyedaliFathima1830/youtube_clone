export const SuggestedCard = ({items}) => {
    const {snippet} =items;
    const {thumbnails,title,channelTitle,publishedAt}=snippet;
  return (
    <div className="p-5 flex shadow shadow-gray-200 mx-7 my-2">
      <img className=" h-30" src={thumbnails.medium.url} alt=""  />
      <div className="p-2 ">
        <ul>
          <li className="font-bold text-lg truncate max-w-xs">{title}</li>
          <li>{channelTitle}</li>
          <li>100k views ・{publishedAt}</li>
        </ul>
      </div>
      <div> ... </div>
    </div>
  );
};

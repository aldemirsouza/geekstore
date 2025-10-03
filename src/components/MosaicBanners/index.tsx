import { banners } from "@/mocks/mosaicBannersData";

export function MosaicBanners() {
  return (
    <div className="px-4 lg:px-0 max-w-[992px] mx-auto mt-20 mb-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto] md:gap-6">
        <div className="relative w-full h-[200px] md:h-[408.5px] rounded-[8px] overflow-hidden">
          <img
            src={banners[0].image}
            alt={banners[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 bg-black/30">
            <span className="text-[#F5AB00] text-[16.34px] font-normal leading-[24.51px] tracking-[-0.319px] mb-2">
              {banners[0].headline}
            </span>
            <h2 className="text-white text-[24px] md:text-[30.638px] font-bold leading-[30px] md:leading-[36.765px] tracking-[0.404px] mb-2">
              {banners[0].title}
            </h2>
            <p className="text-white text-[16px] md:text-[18.382px] font-normal leading-[24px] md:leading-[28.595px] tracking-[-0.449px] mb-4">
              {banners[0].description}
            </p>
            <a
              href={banners[0].buttonLink}
              className="rounded-[8.17px] bg-[#F5AB00] px-4 py-2 hover:brightness-125 transition ease-in-out duration-300"
            >
              <span className="text-[#09235C] text-[14.298px] font-medium leading-[20.425px] tracking-[-0.154px]">
                {banners[0].buttonText}
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-0">
          {banners.slice(1).map((banner) => (
            <div
              key={banner.id}
              className="relative w-full h-[200px] md:h-[192px] rounded-[8px] overflow-hidden"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-4 bg-black/30">
                <span className="text-[#F5AB00] text-[14px] md:text-[16.34px] font-normal leading-[20px] md:leading-[24.51px] tracking-[-0.319px] mb-1">
                  {banner.headline}
                </span>
                <h2 className="text-white text-[20px] md:text-[24px] font-bold leading-[26px] md:leading-[30px] tracking-[0.404px] mb-1">
                  {banner.title}
                </h2>
                <p className="text-white text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] tracking-[-0.449px] mb-3">
                  {banner.description}
                </p>
                <a
                  href={banner.buttonLink}
                  className="rounded-[8.17px] bg-[#F5AB00] px-3 py-[6px] hover:brightness-125 transition ease-in-out duration-300"
                >
                  <span className="text-[#09235C] text-[14px] font-medium leading-[20.425px] tracking-[-0.154px]">
                    {banner.buttonText}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

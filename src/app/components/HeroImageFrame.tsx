import heroImage from "../../assets/ea4dc1140644623e74ef6cecf373f96a7dbf5ef9.png";
import heroImageTwo from "../../assets/3d_image.png";
import heroImageThree from "../../assets/3d_image2.png";

export function HeroImageFrame() {
  return (
    <div className="relative w-[88%] sm:w-[78%] lg:w-[88%] max-w-md lg:max-w-xl">
      <div className="absolute -inset-3 border border-[#DDD5C7]/30 pointer-events-none" />

      <div className="relative bg-[#DDD5C7]/10 backdrop-blur-[1px] border border-[#DDD5C7]/25 shadow-2xl p-3 md:p-4">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="col-span-2 bg-[#DDD5C7]/18 p-2 border border-[#DDD5C7]/30 shadow-lg">
            <img
              src={heroImage}
              alt="Interior scene one"
              className="w-full h-[180px] sm:h-[210px] lg:h-[230px] object-cover"
            />
          </div>

          <div className="bg-[#DDD5C7]/18 p-2 border border-[#DDD5C7]/30 shadow-lg">
            <img
              src={heroImageTwo}
              alt="Interior scene two"
              className="w-full h-[145px] sm:h-[165px] lg:h-[180px] object-cover"
            />
          </div>

          <div className="bg-[#DDD5C7]/18 p-2 border border-[#DDD5C7]/30 shadow-lg">
            <img
              src={heroImageThree}
              alt="Interior scene three"
              className="w-full h-[145px] sm:h-[165px] lg:h-[180px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

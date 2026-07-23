import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { v2 as Cloudinary } from "cloudinary";

export const CLOUDINARY = "CLOUDINARY";

export const CloudinaryProvider: Provider = {
  provide: CLOUDINARY,

  inject: [ConfigService],

  useFactory: (config: ConfigService) => {
    Cloudinary.config({
      cloud_name: config.get<string>("CLOUDINARY_CLOUD_NAME"),
      api_key: config.get<string>("CLOUDINARY_API_KEY"),
      api_secret: config.get<string>("CLOUDINARY_API_SECRET"),
      secure: true,
    });

    return Cloudinary;
  },
};

import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

const countriesAllow = ["IN"];
export const geoLocationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const getIP = (req.headers["x-forwarded-for"] as string).toString();
  const countryInfo = geoip.lookup(getIP);

  if (!countryInfo) {
    return next(new Error("NOT ABLE TO GET ANY COUNTRY FROM THIS IP"));
  }
  if (!countryInfo.country) {
    return next(new Error("NO COUNTRY FOUND "));
  }

  if (!countriesAllow.includes(countryInfo.country)) {
    return next(
      new Error(
        `YOU ARE NOT FROM AUTHORIZED COUNTRY, YOU ARE FROM THIS COUNTRY:${countryInfo.country} AND THIS CITY ${countryInfo.city}`
      )
    );
  }
  next();
};

import nillayamatt from "../assets/asian-paint-nilaya-arc-matt-wall-paint-Photoroom.png";
import pearlescent from "../assets/Nilaya-Arc-Pearlescent-new-Photoroom.png";
import royalAspira from "../assets/royale-aspira-emulsion-paint-Photoroom.png";
import royalGlitz from "../assets/royale-glitz-reserv-new-packshot-Photoroom.png";
import duralife from "../assets/ultima-protek-duralife.png";
import apexultimaprotek from "../assets/apex-ultima-water-proof-Photoroom.png";
import silkGlamourMatt from "../assets/silk-glamour-matt.png";
import silkGlamourHighSheen from "../assets/silk-glamour-high-sheen.png";
import silkGalmourSoftSheen from "../assets/Big-Silk_Glamor_Soft_Sheen_0-Photoroom.png";
import weatherShieldPowerFlex from "../assets/800-dulux-weathershield-powerflexx-brilliant-white-4-lt-16456778694485-Photoroom.png";
import weatherShieldMax from "../assets/dulux-weathershield-tile-paint-Photoroom.png";
import weatherSheildRainproof from "../assets/weathershield-rainproof.png";
import eterna from "../assets/eterna.png";
import diamonGlo from "../assets/velvet-pearl-glo.png";
import pearlGlo from "../assets/dulux-velvet-touch-pearl-glo-interior-paint-Photoroom.png";
import excelEverlast from "../assets/excel-everlast.png";
import kashmirHighSheen from "../assets/Nerolac-Impressions-Kashmir-High-Sheen_Cheatshot_R1-Photoroom.png";
import royalLuxury from "../assets/royalLuxuryEmulsion.png";
import apcolitePremium from "../assets/AsianPaintsApcolitePremiumGlossEnamel-BRWhite-Photoroom.png"
import tractorEmulsion from "../assets/interior-walls-tractor-emulsion-shyne-asian-paints-Photoroom.png"
import ultimaProtekShield from "../assets/Ultima-Protek-advanced-Packshot-updated-Photoroom.png";
import oneElegance from "../assets/pureOneElegance.png";
import calistaDesigner from "../assets/cochin-colours-birla-opus-calista-ever-stay-interior-paint-1-917x1024-Photoroom.png";
import styleColor from "../assets/style-color-smart.png";
import oneTrueLook from "../assets/one-true-look.png";
import velvetTouchPlatinum from "../assets/velvet-touch-platinum.png";
import superCover from "../assets/dulux-paints-supercover-1-l-90-white-base-interior-emulsion--base-1-Photoroom.png";
import weathershield from "../assets/dulux-weathershield-tile-paint-Photoroom.png";
import promiseEmulsion from "../assets/Promise-acrylic-emulsion.png";
import silkGlamour from "../assets/Big-Silk_Glamor_Soft_Sheen_0-Photoroom.png";
import EasyClean from "../assets/easy-clean-fresh-Photoroom.png";
import weatherCoatLongLife from "../assets/weathercoat-long-life.png";
import weatherCoatAntiDust from "../assets/berger-weathercoat-anti-dust-Photoroom.png";
import impressionHd from "../assets/impression-hd.png";
import excelTopGuard from "../assets/excelTopGuard.png";
import { Brand, Application, SizeOption, ColorOption } from "@/context/CartContext";

export type Product = {
  id: string;
  name: string;
  brand: Brand;
  application: Application;
  pricePerL: number;
  features: string[];
  sizes: SizeOption[];
  colors: ColorOption[];
  image: string;
};

export const colorPalette: ColorOption[] = [
  { name: "Baby Blue", hex: "#9FD3F6" },
  { name: "Aerial View", hex: "#7EC8E3" },
  { name: "Crystal Glimmer", hex: "#CFE7F5" },
  { name: "Blush", hex: "#E7B2C1" },
  { name: "Little Bow Pink", hex: "#F4C1D8" },
  { name: "Restoration Rose", hex: "#D48790" },
  { name: "Forest Green", hex: "#2E7D32" },
  { name: "Warm Beige", hex: "#DCC7A1" },
  { name: "Slate Grey", hex: "#7B8A8B" },
  { name: "Royal Blue", hex: "#3B82F6" },
  { name: "Sunset Peach", hex: "#F6B094" },
  { name: "Seafoam", hex: "#9FE3C0" },
  { name: "Lavender Touch", hex: "#CDB4DB" },
  { name: "Opal", hex: "#9AC4B8" },
  { name: "Honey Moon", hex: "#F3D39C" },
  { name: "Golden Tan", hex: "#D2A679" },
  { name: "Barley Beige", hex: "#E5D8C7" },
  { name: "Purple Wish", hex: "#9B5DE5" },
];

const sizes: SizeOption[] = ["1L", "4L", "10L", "20L"];

export const products: Product[] = [
  // Asian Interior
  {
    id: "asian-nilaya-arc-matt",
    name: "Nilaya Arc Matt",
    brand: "Asian Paints",
    application: "Interior",
    pricePerL: 700,
    features: ["Lime-Based Finish", "Artisanal Matt Finish", "10 Years Warranty"],
    sizes,
    colors: colorPalette,
    image: nillayamatt,
  },
  {
    id: "asian-nilaya-arc-pearlescent",
    name: "Nilaya Arc Pearlescent",
    brand: "Asian Paints",
    application: "Interior",
    pricePerL: 740,
    features: ["Lime-Based Finish", "Alluring Pearl Finish", "10 Years Warranty"],
    sizes,
    colors: colorPalette,
    image: pearlescent,
  },
  {
    id: "asian-royale-aspira",
    name: "Royale Aspira",
    brand: "Asian Paints",
    application: "Interior",
    pricePerL: 720,
    features: ["Water Beading Technology", "Luxury with Teflon™", "8 Years Warranty"],
    sizes,
    colors: colorPalette,
    image: royalAspira,
  },
  {
    id: "asian-royale-glitz",
    name: "Royale Glitz",
    brand: "Asian Paints",
    application: "Interior",
    pricePerL: 710,
    features: ["Perfect Crème Finish in Ultra Sheen", "Teflon Surface Protector", "8 Years Warranty"],
    sizes,
    colors: colorPalette,
    image: royalGlitz,
  },
  // Asian Exterior
  {
    id: "asian-apex-ultima-protek-duralife",
    name: "Apex Ultima Protek Duralife",
    brand: "Asian Paints",
    application: "Exterior",
    pricePerL: 680,
    features: ["WALLS of S.T.E.E.L", "15 Years Warranty*", "Advanced PUD Formula"],
    sizes,
    colors: colorPalette,
    image: duralife,
  },
  {
    id: "asian-apex-ultima-protek",
    name: "Apex Ultima Protek",
    brand: "Asian Paints",
    application: "Exterior",
    pricePerL: 650,
    features: ["Home Lamination powered by Graphene", "12 Years Warranty*", "Elastomeric Armour"],
    sizes,
    colors: colorPalette,
    image: apexultimaprotek,
  },
  // Berger Interior
  {
    id: "berger-silk-glamor-matt",
    name: "Silk Glamor Matt",
    brand: "Berger",
    application: "Interior",
    pricePerL: 640,
    features: ["Rich Matt Finish", "Superior Cleanability", "Green Pro Certified"],
    sizes,
    colors: colorPalette,
    image: silkGlamourMatt,
  },
  {
    id: "berger-silk-glamor-high-sheen",
    name: "Silk Glamor High Sheen",
    brand: "Berger",
    application: "Interior",
    pricePerL: 660,
    features: ["Ultra Smooth Finish", "Elastomeric Film", "Low Smell"],
    sizes,
    colors: colorPalette,
    image: silkGlamourHighSheen,
  },
  {
    id: "berger-silk-glamor-soft-sheen",
    name: "Silk Glamor Soft Sheen",
    brand: "Berger",
    application: "Interior",
    pricePerL: 650,
    features: ["Rich sheen finish", "Superior Cleanability", "Elastomeric Film"],
    sizes,
    colors: colorPalette,
    image: silkGalmourSoftSheen,
  },
  // Dulux Exterior
  {
    id: "dulux-weathershield-powerflexx",
    name: "Weathershield Powerflexx",
    brand: "Dulux",
    application: "Exterior",
    pricePerL: 700,
    features: ["High Sheen", "Triple Defence Technology", "PU Modified Acrylic"],
    sizes,
    colors: colorPalette,
    image: weatherShieldPowerFlex,
  },
  {
    id: "dulux-weathershield-max",
    name: "Weathershield Max",
    brand: "Dulux",
    application: "Exterior",
    pricePerL: 690,
    features: ["PU Technology", "Elastomeric Film", "Sun Reflect"],
    sizes,
    colors: colorPalette,
    image: weatherShieldMax,
  },
  {
    id: "dulux-weathershield-protect-rainproof",
    name: "Weathershield Protect Rainproof",
    brand: "Dulux",
    application: "Exterior",
    pricePerL: 660,
    features: ["Soft Sheen", "High durability", "Advanced Rainshield"],
    sizes,
    colors: colorPalette,
    image: weatherSheildRainproof,
  },
  // Dulux Interior
  {
    id: "dulux-velvet-touch-eterna",
    name: "Velvet Touch Eterna",
    brand: "Dulux",
    application: "Interior",
    pricePerL: 720,
    features: ["Mid Sheen", "High Washability", "Refreshing aroma"],
    sizes,
    colors: colorPalette,
    image: eterna,
  },
  {
    id: "dulux-velvet-touch-diamond-glo",
    name: "Velvet Touch Diamond Glo",
    brand: "Dulux",
    application: "Interior",
    pricePerL: 740,
    features: ["High sheen", "Best in class stain repellence", "Durability"],
    sizes,
    colors: colorPalette,
    image: diamonGlo,
  },
  {
    id: "dulux-velvet-touch-pearl-glo",
    name: "Velvet Touch Pearl Glo",
    brand: "Dulux",
    application: "Interior",
    pricePerL: 710,
    features: ["Mid sheen", "Smoothness", "Pearl like finish"],
    sizes,
    colors: colorPalette,
    image: pearlGlo,
  },
  // Nerolac
  {
    id: "nerolac-excel-everlast-12",
    name: "Excel Everlast 12",
    brand: "Nerolac",
    application: "Exterior",
    pricePerL: 670,
    features: ["14 Years Warranty", "Anti Algal", "Anti Carbonation"],
    sizes,
    colors: colorPalette,
    image: excelEverlast,
  },
  {
    id: "nerolac-impression-kashmir-high-sheen",
    name: "Impression Kashmir High Sheen",
    brand: "Nerolac",
    application: "Interior",
    pricePerL: 680,
    features: ["Luxury Finish", "Anti-fungal", "Kills 99% Germs"],
    sizes,
    colors: colorPalette,
    image: kashmirHighSheen,
  },

  //Popular products are here
  // Asian Paints Products
  {
    id: "asian-paints-royale-luxury-emulsion",
    name: "Royale Luxury Emulsion",
    brand: "Asian Paints",
    application: "Interior",
    pricePerL: 850,
    features: ["Silk Finish", "Stain Resistant", "Anti-Bacterial", "Washable"],
    sizes,
    colors: colorPalette,
    image: royalLuxury,
  },
  {
    id: "asian-paints-apcolite-premium-gloss",
    name: "Apcolite Premium Gloss",
    brand: "Asian Paints",
    application: "Exterior",
    pricePerL: 920,
    features: ["Weather Shield", "UV Protection", "Crack Resistance", "Fade Resistant"],
    sizes,
    colors: colorPalette,
    image: apcolitePremium,
  },
  {
    id: "asian-paints-tractor-emulsion-shyne",
    name: "Tractor Emulsion Shyne",
    brand: "Asian Paints",
    application: "Interior",
    pricePerL: 750,
    features: ["Heavy Duty", "Chemical Resistant", "Long Lasting", "Industrial Grade"],
    sizes,
    colors: colorPalette,
    image: tractorEmulsion,
  },
  {
    id: "asian-paints-ultima-protek-shield",
    name: "Ultima Protek Shield",
    brand: "Asian Paints",
    application: "Exterior",
    pricePerL: 890,
    features: ["All Weather", "Crack Bridge", "Algae Resistant", "Flexible Film"],
    sizes,
    colors: colorPalette,
    image: ultimaProtekShield,
  },

  // Birla Opus Products
  {
    id: "birla-opus-one-pure-elegance-shine",
    name: "One Pure Elegance Shine",
    brand: "Birla Opus",
    application: "Interior",
    pricePerL: 780,
    features: ["Velvet Finish", "Easy Clean", "Smooth Texture", "Rich Colors"],
    sizes,
    colors: colorPalette,
    image: oneElegance,
  },
  {
    id: "birla-opus-calista-ever-stay",
    name: "Calista Ever Stay",
    brand: "Birla Opus",
    application: "Interior",
    pricePerL: 720,
    features: ["Designer Colors", "Creative Effects", "Premium Quality", "Textural Finish"],
    sizes,
    colors: colorPalette,
    image: calistaDesigner,
  },
  {
    id: "birla-opus-style-color-smart",
    name: "Style Color Smart",
    brand: "Birla Opus",
    application: "Interior",
    pricePerL: 650,
    features: ["Modern Colors", "Smooth Application", "Durable Finish", "Easy Maintenance"],
    sizes,
    colors: colorPalette,
    image: styleColor,
  },
  {
    id: "birla-opus-one-true-look",
    name: "One True Look",
    brand: "Birla Opus",
    application: "Interior",
    pricePerL: 680,
    features: ["Modern Colors", "Smooth Application", "Durable Finish", "Easy Maintenance"],
    sizes,
    colors: colorPalette,
    image: oneTrueLook,
  },

  // Dulux Products
  {
    id: "dulux-velvet-touch-platinum",
    name: "Velvet Touch Platinum",
    brand: "Dulux",
    application: "Interior",
    pricePerL: 820,
    features: ["Velvet Finish", "Superior Coverage", "Washable", "Premium Quality"],
    sizes,
    colors: colorPalette,
    image: velvetTouchPlatinum,
  },
  {
    id: "dulux-super-cover",
    name: "Super Cover",
    brand: "Dulux",
    application: "Interior",
    pricePerL: 760,
    features: ["One Coat Coverage", "Quick Dry", "High Hide", "Time Saving"],
    sizes,
    colors: colorPalette,
    image: superCover,
  },
  {
    id: "dulux-weathershield-max",
    name: "Weathershield Max",
    brand: "Dulux",
    application: "Exterior",
    pricePerL: 950,
    features: ["Maximum Protection", "Weather Resistant", "Long Lasting", "Flexible Film"],
    sizes,
    colors: colorPalette,
    image: weathershield,
  },
  {
    id: "dulux-promise-acrylic-emulsion",
    name: "Promise Acrylic Emulsion",
    brand: "Dulux",
    application: "Interior",
    pricePerL: 590,
    features: ["Anti-Bacterial", "Good Coverage", "Value for Money", "Health Benefits"],
    sizes,
    colors: colorPalette,
    image: promiseEmulsion,
  },

  // Berger Products
  {
    id: "berger-silk-glamour",
    name: "Silk Glamour",
    brand: "Berger",
    application: "Interior",
    pricePerL: 790,
    features: ["Velvety Smooth Finish", "Superior Stain Resistance", "Advanced Anti-Fungal", "Rich Color Depth"],
    sizes,
    colors: colorPalette,
    image: silkGlamour,
  },
  {
    id: "berger-easy-clean",
    name: "Easy Clean",
    brand: "Berger",
    application: "Interior",
    pricePerL: 690,
    features: ["Easy to Clean", "Washable Surface", "Durable Finish", "Kid-Friendly"],
    sizes,
    colors: colorPalette,
    image: EasyClean,
  },
  {
    id: "berger-weathercoat-long-life",
    name: "Weathercoat Long Life",
    brand: "Berger",
    application: "Exterior",
    pricePerL: 870,
    features: ["Long Life Formula", "Weather Resistant", "Fade Resistant", "UV Protection"],
    sizes,
    colors: colorPalette,
    image: weatherCoatLongLife,
  },
  {
    id: "berger-weather-coat-anti-dust-pro",
    name: "Weather Coat Anti Dust Pro",
    brand: "Berger",
    application: "Exterior",
    pricePerL: 810,
    features: ["Anti-Dust Technology", "Self Cleaning", "Weather Protection", "Dirt Resistant"],
    sizes,
    colors: colorPalette,
    image: weatherCoatAntiDust,
  },

  // Nerolac Products
  {
    id: "nerolac-impression-kashmir-high-sheen",
    name: "Impression Kashmir High Sheen",
    brand: "Nerolac",
    application: "Interior",
    pricePerL: 740,
    features: ["Rich High-Sheen Appearance", "Excellent Washability", "Soft-Touch Smoothness", "Superior Stain Resistance"],
    sizes,
    colors: colorPalette,
    image: kashmirHighSheen,
  },
  {
    id: "nerolac-impression-hd",
    name: "Impression HD",
    brand: "Nerolac",
    application: "Interior",
    pricePerL: 710,
    features: ["Ultra HD Colors", "Sharp Color Definition", "Vibrant Depth", "Color Lock Technology"],
    sizes,
    colors: colorPalette,
    image: impressionHd,
  },
  {
    id: "nerolac-excel-everlast",
    name: "Excel Everlast",
    brand: "Nerolac",
    application: "Interior",
    pricePerL: 670,
    features: ["10 Year Guarantee", "Everlasting Durability", "Superior Quality", "Proven Performance"],
    sizes,
    colors: colorPalette,
    image: excelEverlast,
  },
  {
    id: "nerolac-excel-top-guard-max",
    name: "Excel Top Guard Max",
    brand: "Nerolac",
    application: "Exterior",
    pricePerL: 880,
    features: ["Heat & UV Resistant", "Waterproofing Technology", "Crack-Bridging Formula", "Anti-Algae Protection"],
    sizes,
    colors: colorPalette,
    image: excelTopGuard,
  }

];
